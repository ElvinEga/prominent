import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;
  const user = token ? verifyToken(token) : null;

  if (!user && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*"] };
