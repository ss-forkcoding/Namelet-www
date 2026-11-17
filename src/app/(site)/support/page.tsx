import type { Metadata } from "next";
import { FeedbackForm } from "@/components/FeedbackForm";
import { PageShell } from "@/components/PageShell";
import { feedbackCopy } from "@/content/feedback-copy";
import { refundUrl, legal } from "@/content/policy";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `지원 — ${site.name}`,
  description: `${legal.appName} 문의 이메일, 의견 보내기, 구매 복원과 환불 안내입니다.`,
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <PageShell>
      <section className="panel">
        <p className="eyebrow">도와드릴게요</p>
        <h1>{legal.appName} 지원</h1>
        <p className="lead">구매한 기능이 열리지 않으면 앱의 설정 탭에서 “구매 복원”을 누르세요. 해결되지 않으면 아래 양식이나 이메일로 알려 주세요.</p>
        <div className="action-row">
          <a className="pill pill-primary" href="#feedback">의견 남기기</a>
          <a className="pill" href={`mailto:${legal.supportEmail}?subject=${encodeURIComponent(`${legal.appName} 문의`)}`}>이메일 보내기</a>
        </div>
      </section>

      <section className="rail-section" aria-labelledby="refund-title">
        <h2 id="refund-title">환불</h2>
        <p>
          App Store 구매 건은 Apple이 처리합니다. <a href={refundUrl}>Apple 문제 신고 페이지</a>에서 요청하세요.
        </p>
      </section>

      <section id="feedback" className="rail-section" aria-labelledby="feedback-title">
        <p className="eyebrow">{feedbackCopy.eyebrow}</p>
        <h2 id="feedback-title">{feedbackCopy.title}</h2>
        <p className="section-note">{feedbackCopy.note}</p>
        <FeedbackForm copy={feedbackCopy} />
      </section>
    </PageShell>
  );
}
