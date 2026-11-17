// 지원·개인정보 처리방침·이용약관이 쓰는 값. 도메인·저작권은 site.ts 를 따른다.
// 앱 정책 숫자는 앱의 Packages/NameletCore/Sources/NameletCore/Policy.swift 와 같아야 한다.
export const legal = {
  appName: "네임렛",
  operator: "NextGenAI Co.",
  supportEmail: "khan@nextgenai.kr",
  effectiveOn: "2026-11-17",
} as const;

export const appPolicy = {
  freeCaseCount: 7,
  maxCaseCount: 20,
  freeGridMax: 5,
  gridMax: 10,
  depthMax: 5,
  caseSlotPriceWon: 500,
  adFreePriceWon: 4900,
} as const;

export const won = (value: number) => `${value.toLocaleString("ko-KR")}원`;

export const refundUrl = "https://reportaproblem.apple.com";

export const feedbackCategoryValues = ["bug", "idea", "question", "other"] as const;
export type FeedbackCategory = (typeof feedbackCategoryValues)[number];
export type FeedbackErrorCode = "category" | "messageShort" | "messageLong" | "email";
export const feedbackLimits = { messageMin: 10, messageMax: 2000, emailMax: 254, sourceMax: 40 } as const;
export const feedbackRetention = "접수일부터 1년 동안 보관하고 삭제합니다.";

export type PolicyRow = Readonly<{ label: string; value: string; href?: string }>;
export type PolicyRecord = Readonly<{ name: string; rows: readonly PolicyRow[] }>;
export type PolicySection = Readonly<{
  id: string;
  title: string;
  notice?: string;
  paragraphs?: readonly string[];
  records?: readonly PolicyRecord[];
  items?: readonly string[];
}>;
