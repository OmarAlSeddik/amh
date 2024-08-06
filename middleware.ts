import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const nextIntMiddleware = createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
});

export default function middleware(req: NextRequest): NextResponse {
  return nextIntMiddleware(req);
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
