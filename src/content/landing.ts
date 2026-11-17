import { appPolicy, won } from "@/content/policy";

// 랜딩 문구의 단일 출처. 숫자는 policy.ts(앱 Policy.swift 와 같은 값)에서 읽고 직접 쓰지 않는다.
// 화면 그림(AppScreens)의 예시 값도 여기 둔다. 그림은 장식이므로 같은 내용을 제목·설명 글이 말한다.
const p = appPolicy;
const free = `${p.freeGridMax}×${p.freeGridMax}`;
const max = `${p.gridMax}×${p.gridMax}`;

export type Cell = Readonly<{ label: string; role: string; focus?: boolean }> | null;

export const landingCopy = {
  nav: [
    { href: "/blog/ko", label: "블로그" },
    { href: "/support", label: "지원" },
  ],
  hero: {
    title: ["케이스마다 이름을,", "슬롯마다 기록을."],
    lead: "SD·microSD·USB 케이스의 칸마다 라벨·역할·종류·용량을 기록하는 iPhone 앱입니다.",
  },
  store: {
    pendingStatus: "App Store 출시 준비 중",
    pendingNote: "출시되면 이 자리에서 바로 받을 수 있습니다. 소식은",
    pendingLink: "블로그에 올립니다.",
    badgeLabel: "App Store에서 다운로드",
    qrCaption: "iPhone 카메라로 찍어 설치",
  },
  caseScreen: {
    name: "촬영 백업 케이스",
    meta: "4×3 · 기록 8/12",
    cells: [
      { label: "A7 본체", role: "메인 촬영" },
      { label: "A7 예비", role: "듀얼 슬롯" },
      { label: "드론", role: "항공 원본", focus: true },
      null,
      { label: "액션캠", role: "4K 원본" },
      { label: "오디오", role: "녹음" },
      null,
      { label: "포맷 완료", role: "빈 카드" },
      { label: "USB", role: "납품본" },
      { label: "RAW", role: "보관" },
      null,
      null,
    ] satisfies readonly Cell[],
  },
  sizes: {
    title: ["케이스 모양 그대로", "칸을 그립니다"],
    lead: `칸 크기는 1×1부터 ${max}까지 정합니다. 무료로 ${free}까지 만듭니다.`,
    cases: [
      { name: "microSD 지갑", cols: 2, rows: 4, filled: 5 },
      { name: "촬영 백업 케이스", cols: 4, rows: 3, filled: 8 },
      { name: "라즈베리파이 보관함", cols: 6, rows: 5, filled: 19 },
    ],
  },
  slot: {
    title: ["칸을 누르면", "기록이 열립니다"],
    lead: `라벨·역할·매체 종류·용량을 적습니다. 한 칸에 카드를 최대 ${p.depthMax}장까지 겹쳐 기록합니다.`,
    screen: {
      where: "촬영 백업 케이스 · 1행 3열",
      depth: "1 / 3장",
      label: "드론",
      rows: [
        { term: "역할", value: "항공 원본" },
        { term: "종류", value: "microSD" },
        { term: "용량", value: "256GB" },
      ],
    },
    stack: ["드론", "드론 예비", "포맷 완료"],
  },
  search: {
    title: ["찾는 카드는", "검색으로"],
    lead: "케이스 이름·라벨·역할로 검색해 카드가 있는 칸을 바로 찾습니다.",
    query: "드론",
    results: [
      { label: "드론", where: "촬영 백업 케이스 · 1행 3열" },
      { label: "드론 예비", where: "촬영 백업 케이스 · 1행 3열 · 2번째" },
      { label: "드론 펌웨어", where: "USB 보관함 · 2행 1열" },
    ],
  },
  promises: {
    title: "기록은 이 iPhone에만",
    lines: ["로그인 없음", "서버 없음", "오프라인에서도 열림"],
    note: "앱을 삭제하면 기록도 지워집니다.",
  },
  facts: {
    title: "받기 전에 확인하세요",
    note: "가격은 한국 App Store 기준이며, 실제 결제 금액은 App Store에 표시된 가격을 따릅니다.",
    rows: [
      { term: "무료", detail: `케이스 ${p.freeCaseCount}개, 칸 크기 ${free}까지` },
      { term: "큰 케이스", detail: `${free}보다 크게 만들면 광고 1편을 본 뒤 저장합니다. 광고 제거를 구매하면 바로 저장합니다.` },
      { term: "케이스 추가", detail: `${p.freeCaseCount + 1}번째부터 ${p.maxCaseCount}번째 자리까지 자리마다 ${won(p.caseSlotPriceWon)}` },
      { term: "광고 제거", detail: `${won(p.adFreePriceWon)}, 한 번 결제` },
    ],
  },
  closing: {
    titlePending: ["출시되면", "여기서 바로 받습니다"],
    titleLive: ["지금", "App Store에서 받으세요"],
  },
  links: [
    { href: "/blog/ko", label: "블로그" },
    { href: "/support", label: "지원·의견 보내기" },
    { href: "/privacy", label: "개인정보 처리방침" },
    { href: "/terms", label: "이용약관" },
  ],
} as const;
