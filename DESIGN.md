# Namelet Web 디자인 기준

- **사용자층:** 일반. SD·microSD·USB 카드를 케이스로 여러 개 보관하는 사람(촬영·드론·영상 작업자 포함). 본문 17px 이상, 터치 타깃 44px 이상.
- **북극성:** 처음 온 사람이 5초 안에 "케이스 칸마다 카드를 기록하는 iPhone 앱"이라는 것과 받을 수 있는 상태인지를 안다.
- **형용사:** 따뜻함, 정돈됨, 정직함.
- **안티레퍼런스:** 보라 그라데이션 SaaS 랜딩, 3열 피처 카드, 검증할 수 없는 통계·후기, 누를 수 없는 가짜 다운로드 버튼.

## 토큰

값의 정본은 `src/app/globals.css` 의 `:root` 다. 블로그(`blog.css`)와 지원·정책(`page-shell.css`)은 같은 값을 복제해 쓴다. 팔레트를 바꾸면 세 파일을 함께 고친다.

| 이름 | 값 | 쓰는 곳 |
|---|---|---|
| Deep Mocha | #432F2E | 글자, 카드 사이 바탕(거터), 앱 화면 그림 바탕 |
| Pale Sky | #C1DBE8 | "케이스 크기"·"받기 전에 확인하세요" 카드, 앱 그림 보조 글자 |
| Vanilla Custard | #FFF0B5 | 마지막 CTA 카드, 채운 칸·선택한 칸, 링크 카드 hover |
| Cream | #FFFBEC | 기본 카드 바탕, Mocha 위 글자 |
| Mocha Soft | #5E4746 | 보조 글자 (Sky 위 5.9:1) |

## Named Rules

1. **Mocha Text Rule:** 글자는 Mocha 또는 Mocha Soft다. Mocha 바탕에서만 Cream·Vanilla·Sky 글자를 쓴다. Sky·Vanilla 는 글자색으로 쓰지 않는다(흰 바탕 1.4:1 이하).
2. **Stacked Card Rule:** 랜딩은 Mocha 바탕 위에 둥근 단색 카드(radius 32px, 모바일 24px)를 8px 간격으로 쌓는다. 카드마다 줄을 끊은 큰 제목 하나, 설명 한 문장, 그림 하나만 둔다. 그라데이션을 쓰지 않는다. 바닥글 링크도 한 줄짜리 카드로 쌓는다(레퍼런스: Landingfolio MULTI 구조).
3. **Honest CTA Rule:** 스토어 CTA 는 `StoreCta` 하나로만 그린다. `appStoreUrl` 이 null 이면 "출시 준비 중"을 글로 보여 주고, 주소가 생기면 Apple 공식 배지와 데스크톱 QR 로 바뀐다. 가짜 버튼을 만들지 않는다.
4. **Policy Numbers Rule:** 가격·한도 숫자는 `policy.ts` 의 `appPolicy` 에서 읽는다. 문구에 숫자를 직접 쓰지 않는다.
5. **Hairline Depth Rule:** 면 구분은 헤어라인과 카드 색·거터로만 한다. 그림자와 좌측 컬러 줄을 쓰지 않는다.
6. **Illustration Not Screenshot Rule:** 전화기·케이스 그림(`AppScreens.tsx`)은 앱 화면을 단순화한 장식이다(`aria-hidden`). 손·기기 사진을 쓰지 않고, 같은 내용을 카드 제목·설명이 글로 말한다. 예시 값은 `landing.ts` 에 둔다.
