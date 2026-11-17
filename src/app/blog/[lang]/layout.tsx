import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteAuthors } from "@/content/seo";
import { isLang, langs, site } from "@/content/site";
import "../blog.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  authors: siteAuthors,
};

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

// 블로그의 루트 레이아웃. 언어별로 html lang 을 정확히 내보낸다.
export default async function BlogRootLayout({ children, params }: LayoutProps<"/blog/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={lang}>
      <body>
        <main>{children}</main>
        <footer className="blog-footer">
          <p>{site.copyright}</p>
        </footer>
      </body>
      <GoogleAnalytics gaId={site.gaMeasurementId} />
    </html>
  );
}
