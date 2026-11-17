"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Image from "next/image";
import { appStoreLink, type Lang, type StorePlacement } from "@/content/site";

// Apple 공식 "Download on the App Store" 배지(toolbox.marketingtools.apple.com)를 수정 없이 쓴다.
// Apple 가이드: 화면 높이 40px 이상, 색·비율·문구 변경 금지.
const badgeWidth: Record<Lang, number> = { ko: 129.70071, en: 119.66407, ja: 108.85157 };
const badgeHeight = 52;

type Props = Readonly<{ href: string; label: string; lang: Lang; placement: StorePlacement }>;

export function StoreBadgeLink({ href, label, lang, placement }: Props) {
  return (
    <a
      className="store-badge"
      href={appStoreLink(href, placement, lang)}
      onClick={() => sendGAEvent("event", "app_store_click", { placement, page_lang: lang })}
    >
      <Image
        src={`/badges/app-store-${lang}.svg`}
        alt={label}
        width={Math.round((badgeWidth[lang] * badgeHeight) / 40)}
        height={badgeHeight}
      />
    </a>
  );
}
