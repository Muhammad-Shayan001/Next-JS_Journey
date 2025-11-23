
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Check for a specific cookie (simulating auth)
  const authToken = request.cookies.get('auth_token')
 
  // If no token and trying to access dashboard, redirect to login
  if (!authToken && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
 
  // If token exists and on login page, redirect to dashboard
  if (authToken && request.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}
 
export const config = {
  matcher: ['/dashboard/:path*', '/login'],
}
