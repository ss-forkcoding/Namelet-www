import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlogHeader } from "@/components/BlogHeader";
import { JsonLd } from "@/components/JsonLd";
import { PostDate } from "@/components/PostDate";
import { StoreBadgeLink } from "@/components/StoreBadgeLink";
import { blogLanguages, blogPath, blogPreview, ogImagePath, publisher } from "@/content/seo";
import { appStoreUrl, blogCopy, isLang, site, type Lang } from "@/content/site";
import { extractFaqs, getPost, getSlugs, type Post } from "@/lib/blog";

// Cache Components 는 빈 배열을 허용하지 않는다. 글이 0개일 때만 자리표시 slug 를 내보내고, 그 페이지는 404 가 된다.
const emptyBlogSlug = "_empty";

export function generateStaticParams() {
  const slugs = getSlugs();
  return (slugs.length > 0 ? slugs : [emptyBlogSlug]).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[lang]/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = isLang(lang) ? getPost(lang, slug) : undefined;
  if (!post) return {};
  return {
    title: `${post.title} | ${site.name}`,
    description: post.description,
    alternates: { canonical: blogPath(post.lang, post.slug), languages: blogLanguages(post.slug) },
    ...blogPreview({
      lang: post.lang,
      path: blogPath(post.lang, post.slug),
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    }),
  };
}

function postJsonLd(post: Post) {
  const url = `${site.url}${blogPath(post.lang, post.slug)}`;
  const faqs = extractFaqs(post.body);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        inLanguage: post.lang,
        url,
        mainEntityOfPage: url,
        image: `${site.url}${ogImagePath}`,
        author: publisher,
        publisher,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: site.name, item: site.url },
          { "@type": "ListItem", position: 2, name: blogCopy[post.lang].title, item: `${site.url}${blogPath(post.lang)}` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
          ]
        : []),
    ],
  };
}

// 검색으로 글에 들어온 사람이 홈을 거치지 않고 스토어로 가는 자리. 스토어 주소가 없으면 그리지 않는다.
function PostStore({ lang }: Readonly<{ lang: Lang }>) {
  if (!appStoreUrl) return null;
  const copy = blogCopy[lang];
  return (
    <aside className="post-store" aria-labelledby="post-store-title">
      <h2 id="post-store-title">{copy.storeTitle}</h2>
      <p>{copy.storeLead}</p>
      <p>
        <StoreBadgeLink href={appStoreUrl} label={copy.storeAction} lang={lang} placement="blog_post_end" />
      </p>
    </aside>
  );
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[lang]/[slug]">) {
  const { lang, slug } = await params;
  const post = isLang(lang) ? getPost(lang, slug) : undefined;
  if (!post) notFound();

  return (
    <>
      <JsonLd data={postJsonLd(post)} />
      <BlogHeader lang={post.lang} slug={post.slug} />
      <article>
        <header className="blog-intro">
          <h1>{post.title}</h1>
          <p className="blog-lead">{post.description}</p>
          <p className="post-meta">
            <PostDate date={post.date} lang={post.lang} />
          </p>
        </header>
        <div className="blog-rail">
          <div className="prose">
            <Markdown remarkPlugins={[remarkGfm]}>{post.body}</Markdown>
          </div>
          <PostStore lang={post.lang} />
          <p className="post-back">
            <a href={blogPath(post.lang)}>{blogCopy[post.lang].backToList}</a>
          </p>
        </div>
      </article>
    </>
  );
}
