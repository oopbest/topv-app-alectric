import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get('ACCESS_TOKEN')?.value;
  // const refreshToken = req.cookies.get('refresh_token')?.value;

  if(accessToken){

    // const { exp } = JSON.parse(atob(accessToken.split('.')[1])); // decode JWT payload
    // const currentTime = Math.floor(Date.now() / 1000);
    // console.log('xxx>>',exp, currentTime)

    // if (!refreshToken) {
    //   return NextResponse.redirect(new URL('/login', req.url));
    // }

    // Try to refresh the token
    const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/integration/admin/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        username: process.env.API_USERNAME, 
        password: process.env.API_PASSWORD
      }),
    });
  
    if (refreshResponse.status === 200) {
      const newAccessToken = await refreshResponse.json();
      // Set the new access token in cookies
      const response = NextResponse.next();
      response.cookies.set('ACCESS_TOKEN', newAccessToken, { httpOnly: true, secure: true });
      return response;
    } else {
      // Refresh failed, redirect to login
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }
  return NextResponse.next()
}

export const config = {
  // matcher: '/admin/:path*',
  matcher: '/products'
};
