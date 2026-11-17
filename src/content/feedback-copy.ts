import { feedbackLimits, legal } from "./policy";

const limit = feedbackLimits.messageMax.toLocaleString("ko-KR");

export const feedbackCopy = {
  eyebrow: "듣고 있습니다",
  title: "앱에 대한 의견을 남겨 주세요",
  note: "답변이 필요한 문의는 이메일 주소를 함께 적어 주세요.",
  categoryLabel: "종류",
  categoryPlaceholder: "선택해 주세요",
  categories: { bug: "오류나 문제", idea: "개선 제안", question: "질문", other: "기타" },
  messageLabel: "내용",
  messageHelp: `${feedbackLimits.messageMin}자 이상 ${limit}자 이하로 적어 주세요. 오류라면 어떤 화면에서 무엇을 눌렀는지 적어 주세요.`,
  emailLabel: "이메일 (선택)",
  emailHelp: "적어 주신 이메일은 답변에만 씁니다.",
  submit: "의견 보내기",
  pending: "보내는 중입니다",
  success: "의견을 받았습니다. 고맙습니다.",
  invalidSummary: "입력한 내용을 다시 확인해 주세요.",
  rateLimited: "짧은 시간에 여러 번 보내셨습니다. 10분 뒤에 다시 보내 주세요.",
  unavailable: `지금은 의견을 받지 못했습니다. ${legal.supportEmail} 로 이메일을 보내 주세요.`,
  errors: {
    category: "종류를 선택해 주세요.",
    messageShort: `내용을 ${feedbackLimits.messageMin}자 이상 적어 주세요.`,
    messageLong: `내용은 ${limit}자까지 적을 수 있습니다.`,
    email: "이메일 주소를 다시 확인해 주세요. 예: name@example.com",
  },
} as const;

export type FeedbackCopy = typeof feedbackCopy;
