import { NextResponse, type NextRequest } from "next/server";
import { preferredLang } from "@/lib/locale";

// 언어 없는 /blog 만 브라우저 언어로 보낸다. /blog/en 처럼 언어를 고른 주소는 그대로 둔다.
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/blog/${preferredLang(request.headers.get("accept-language"))}`;
  const response = NextResponse.redirect(url, 307);
  response.headers.set("Vary", "Accept-Language");
  return response;
}

export const config = {
  matcher: ["/blog"],
};
