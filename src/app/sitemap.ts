import type { MetadataRoute } from "next";
import { blogLanguages, blogPath } from "@/content/seo";
import { langs, site } from "@/content/site";
import { getPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = langs.flatMap((lang) => {
    const posts = getPosts(lang);
    return [
      {
        url: `${site.url}${blogPath(lang)}`,
        // 글은 최신순으로 정렬되어 있다.
        lastModified: posts[0]?.date,
        alternates: { languages: blogLanguages(undefined, site.url) },
      },
      ...posts.map((post) => ({
        url: `${site.url}${blogPath(lang, post.slug)}`,
        lastModified: post.date,
        alternates: { languages: blogLanguages(post.slug, site.url) },
      })),
    ];
  });

  // 지원·정책 페이지 (src/app/(site)/support·privacy·terms)
  const pages = ["/support", "/privacy", "/terms"].map((path) => ({ url: `${site.url}${path}` }));

  return [{ url: site.url }, ...pages, ...blogEntries];
}