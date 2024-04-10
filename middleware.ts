// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';

// export default NextAuth(authConfig).auth;

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };
import { NextResponse, NextRequest } from 'next/server'
const middleware = (req: NextRequest, res: NextResponse) => {
  console.log('=====req=====');
  console.log(req);
  console.log('=====req=====');
      const loginUrl = new URL('/error/404', req.url)
      if (req.nextUrl.pathname.startsWith('/creator')){
            // loginUrl.searchParams.set('from', req.nextUrl.pathname)
            return NextResponse.redirect(loginUrl)
      }
      return;
};
export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
}
export default middleware;