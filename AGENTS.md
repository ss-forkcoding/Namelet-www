<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Namelet Web

앱 소개 페이지(`/`)와 ko·en·ja 정적 블로그(`/blog/ko`, `/blog/en`, `/blog/ja`)를 제공한다. 구조는 U-Saver-Web 블로그를 따른다. `/blog` 는 `src/proxy.ts` 가 브라우저 기본 언어로 보내고, 지원하지 않는 언어는 영어로 보낸다. 블로그는 `html lang` 때문에 루트 레이아웃(`src/app/blog/[lang]/layout.tsx`)을 따로 두고, 소개 페이지는 `src/app/(site)/` 루트 레이아웃을 쓴다. 사이트 값(이름·도메인·App Store 주소)과 블로그 문구는 `src/content/site.ts` 한 곳에서 바꾼다.

### 블로그 글 추가

`src/content/blog/<slug>/` 폴더에 `ko.md`, `en.md`, `ja.md` 를 모두 만든다. 하나라도 없거나 frontmatter(`title`, `description`, `date: YYYY-MM-DD`)가 잘못되면 빌드가 실패한다. slug 는 영문 소문자·숫자·하이픈만 쓴다. 본문 제목은 `##` 부터 쓴다. 물음표로 끝나는 `##`/`###` 제목과 바로 다음 문단은 FAQ 구조화 데이터가 된다.

```md
---
title: "글 제목"
description: "검색 결과와 목록에 보일 한두 문장"
date: 2026-11-17
---

## 첫 소제목
```

### 알려진 제약

- Cache Components 는 빈 `generateStaticParams` 를 허용하지 않는다. 글이 0개면 `_empty` 자리표시 경로를 하나 만든다.
- 없는 글 주소(`/blog/ko/없는-slug`)는 404 화면과 `noindex` 를 내지만 상태 코드는 200이다. `dynamicParams` 를 Cache Components 에서 쓸 수 없기 때문이다. 없는 언어(`/blog/fr`)는 404다.
- `appStoreUrl` 이 `null` 이면 글 끝 App Store 링크를 그리지 않는다. 출시 뒤 주소를 넣는다.

## 지원·정책 페이지

`/support`·`/privacy`·`/terms` 는 `src/app/(site)/` 아래에 있다. 문구는 `src/content/legal.ts`·`feedback-copy.ts`, 값은 `src/content/policy.ts` 에서 바꾼다. 앱 가격·한도가 바뀌면 `policy.ts` 의 `appPolicy` 를 앱 `Policy.swift` 와 같이 고친다.

의견 양식은 Google Apps Script 웹 앱(`scripts/feedback-apps-script.gs`)으로 시트에 저장한다. 환경변수 `FEEDBACK_WEBHOOK_URL`·`FEEDBACK_WEBHOOK_SECRET` 이 필요하다(`.env.example`). 앱의 설정 > 피드백 보내기는 `/support?from=app-ios-<버전>#feedback` 으로 열고, 서버 액션이 Referer 의 `from` 을 시트 "출처" 열에 남긴다.

## 랜딩과 App Store CTA

랜딩(`/`)은 `src/app/(site)/page.tsx` 와 `landing.css`, 문구는 `src/content/landing.ts` 에 있다. 디자인 규칙은 `DESIGN.md` 를 따른다.

iOS 앱이 출시되면 `src/content/site.ts` 의 `appStoreUrl` 에 국가 없는 주소(`https://apps.apple.com/app/id…`)만 넣는다. 랜딩 히어로·마지막 띠의 "출시 준비 중" 표시가 Apple 공식 배지(`public/badges/`, 수정 금지)와 데스크톱 QR 로 바뀌고, 블로그 글 끝에도 배지가 나온다. 클릭은 GA 이벤트 `app_store_click`(`placement`, `page_lang`)으로 남는다. App Store Connect 캠페인 공급자 토큰이 있으면 `appStoreProviderToken` 에 넣어 `pt`·`ct` 를 붙인다. 새 버튼 위치는 `storePlacements` 에 이름을 더한다. 스토어 링크는 `StoreCta`·`StoreBadgeLink` 로만 만든다.
