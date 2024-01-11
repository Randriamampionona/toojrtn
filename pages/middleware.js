import { NextRequest, NextResponse } from 'next/server'

export function middleware(req) {
  const isMaintenance = true 
  req.nextUrl.pathname = !isMaintenance ? '/' : '/maintenance';
  return NextResponse.rewrite(req.nextUrl);
}
 
// Supports both a single value or an array of matches
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
