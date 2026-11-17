import type { Metadata } from "next";
import { fallbackLang, langs, site, type Lang } from "@/content/site";

// 검색 결과와 링크 미리보기에 쓰는 값의 단일 출처.
export const publisher = { "@type": "Organization", name: "NextGenAI Co.", url: site.url } as const;

export const siteAuthors = [{ name: publisher.name, url: publisher.url }];

// src/app/opengraph-image.png 와 같은 파일이다. 구조화 데이터의 image 에 절대 주소로 쓴다.
export const ogImagePath = "/opengraph-image.png";

const ogLocales: Readonly<Record<Lang, string>> = { ko: "ko_KR", en: "en_US", ja: "ja_JP" };

export function blogPath(lang: Lang, slug?: string): string {
  return slug ? `/blog/${lang}/${slug}` : `/blog/${lang}`;
}

export function blogLanguages(slug?: string, origin = ""): Record<string, string> {
  return {
    ...Object.fromEntries(langs.map((lang) => [lang, `${origin}${blogPath(lang, slug)}`])),
    "x-default": `${origin}${blogPath(fallbackLang, slug)}`,
  };
}

type BlogPreview = Readonly<{ lang: Lang; path: string; title: string; description: string; publishedTime?: string }>;

// images 는 비워 둔다. app/opengraph-image.png 파일 규칙이 모든 경로에 같은 이미지를 붙인다.
export function blogPreview({ lang, path, publishedTime, ...preview }: BlogPreview): Pick<Metadata, "openGraph" | "twitter"> {
  const shared = {
    url: path,
    siteName: site.name,
    locale: ogLocales[lang],
    alternateLocale: langs.filter((item) => item !== lang).map((item) => ogLocales[item]),
    ...preview,
  };
  return {
    openGraph: publishedTime ? { ...shared, type: "article", publishedTime } : { ...shared, type: "website" },
    twitter: { card: "summary_large_image", ...preview },
  };
}
