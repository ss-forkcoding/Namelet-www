export { fallbackLang, isLang, langs, type Lang } from "./langs";
import type { Lang } from "./langs";

// 언어와 무관한 사이트 값의 단일 출처.
export const site = {
  name: "Namelet",
  // TODO(도메인 미확정): 배포 도메인이 정해지면 바꾼다. canonical·sitemap·OG 절대 주소가 모두 이 값을 쓴다.
  url: "https://namelet.fork-coding.com",
  copyright: "© 2026 NextGenAI Co.",
  // GA4 속성 "Namelet"(별빛상단 GA 계정) 웹 스트림 측정 ID. 공개 식별자다.
  gaMeasurementId: "G-KMWNRFC6CC",
} as const;

// 값이 있으면 블로그 글 끝에 App Store 링크를 그린다. 스토어 주소가 생기기 전에는 null 로 두어 가짜 CTA 를 만들지 않는다.
export const appStoreUrl: string | null = null;

export type BlogCopy = Readonly<{
  label: string;
  locale: string;
  title: string;
  lead: string;
  description: string;
  languageNav: string;
  backToList: string;
  empty: string;
  storeTitle: string;
  storeLead: string;
  storeAction: string;
}>;

export const blogCopy: Readonly<Record<Lang, BlogCopy>> = {
  ko: {
    label: "한국어",
    locale: "ko-KR",
    title: "블로그",
    lead: "SD 카드·microSD·USB 메모리를 케이스에 정리하고, 슬롯마다 무엇이 들었는지 기록하는 방법을 씁니다.",
    description: "Namelet 사용 방법과 저장매체 정리 방법을 다루는 블로그입니다.",
    languageNav: "언어 선택",
    backToList: "글 목록으로 돌아가기",
    empty: "아직 올라온 글이 없습니다.",
    storeTitle: "케이스마다 이름을, 슬롯마다 기록을",
    storeLead: "Namelet은 저장매체 케이스의 슬롯마다 카드와 목적을 기록하는 iPhone 앱입니다.",
    storeAction: "App Store에서 보기",
  },
  en: {
    label: "English",
    locale: "en-US",
    title: "Blog",
    lead: "How to organize SD cards, microSD cards, and USB drives in cases, and keep track of what sits in every slot.",
    description: "Guides to using Namelet and organizing your storage media.",
    languageNav: "Choose language",
    backToList: "Back to all posts",
    empty: "No posts yet.",
    storeTitle: "A name for every case, a record for every slot",
    storeLead: "Namelet is an iPhone app that records which card sits in each slot of your storage case, and why.",
    storeAction: "View on the App Store",
  },
  ja: {
    label: "日本語",
    locale: "ja-JP",
    title: "ブログ",
    lead: "SDカード・microSD・USBメモリをケースで整理し、スロットごとに何が入っているかを記録する方法をまとめています。",
    description: "Namelet の使い方と記録メディアの整理方法を紹介するブログです。",
    languageNav: "言語を選択",
    backToList: "記事一覧へ戻る",
    empty: "まだ記事がありません。",
    storeTitle: "ケースに名前を、スロットに記録を",
    storeLead: "Namelet は、記録メディアケースのスロットごとにカードと用途を記録する iPhone アプリです。",
    storeAction: "App Store で見る",
  },
};