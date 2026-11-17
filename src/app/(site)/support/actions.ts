"use server";

import { headers } from "next/headers";
import { parseFeedback, type FeedbackState, type FeedbackValues } from "@/lib/feedback/core";
import { allowFeedback } from "@/lib/feedback/rate-limit";
import { saveFeedbackToSheet } from "@/lib/feedback/sheet";

function text(form: FormData, name: string): string {
  const value = form.get(name);
  return typeof value === "string" ? value : "";
}

// 앱의 설정 > 피드백 보내기는 /support?from=app-ios-<버전> 으로 연다. 같은 출처 Referer 의 쿼리로 보낸 곳을 남긴다.
async function feedbackSource(): Promise<string> {
  const referer = (await headers()).get("referer");
  if (!referer) return "web";
  try {
    return new URL(referer).searchParams.get("from") ?? "web";
  } catch {
    return "web";
  }
}

async function clientKey(): Promise<string> {
  const list = await headers();
  return list.get("x-forwarded-for")?.split(",")[0]?.trim() || list.get("x-real-ip") || "unknown";
}

export async function submitFeedback(previous: FeedbackState, form: FormData): Promise<FeedbackState> {
  const attempt = previous.attempt + 1;
  const values: FeedbackValues = {
    category: text(form, "category"),
    message: text(form, "message"),
    email: text(form, "email"),
  };

  // 사람에게 보이지 않는 입력란이 채워지면 봇으로 보고 저장 없이 성공처럼 끝낸다.
  if (text(form, "website") !== "") return { status: "success", attempt };

  const parsed = parseFeedback(values, await feedbackSource());
  if (!parsed.ok) return { status: "invalid", attempt, values, errors: parsed.errors };

  if (!allowFeedback(await clientKey(), Date.now())) return { status: "rate_limited", attempt, values };

  const saved = await saveFeedbackToSheet(parsed.value);
  return saved ? { status: "success", attempt } : { status: "unavailable", attempt, values };
}
