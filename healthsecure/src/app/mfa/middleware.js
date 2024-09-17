// // app/middleware.ts
// import { NextResponse } from 'next/server'

// export function middleware(request) {
//   const url = request.nextUrl.clone()
//   const hostname = request.headers.get('host') || ''
//   const isLocalhost = hostname.includes('localhost') || hostname.includes('127.0.0.1')

//   // Split hostname into parts
//   const parts = hostname.split('.')

//   if (isLocalhost) {
//     // For localhost, check if there's a subdomain before 'localhost'
//     if (parts.length > 1 && parts[0] !== 'localhost' && parts[0] !== 'www') {
//       const domain = parts[0]
//       console.log('Detected subdomain:', domain)
//       url.pathname = `/${domain}`
//       console.log('Redirecting to:', url.pathname)
//       return NextResponse.rewrite(url)
//     }
//   } else {
//     // For non-localhost environments
//     if (parts.length > 2) {
//       const domain = parts[0]
//       console.log('Detected domain:', domain)
//       url.pathname = `/${domain}`
//       console.log('Redirecting to:', url.pathname)
//       return NextResponse.rewrite(url)
//     }
//   }
  
//   console.log('No redirect, continuing to:', url.pathname)
//   return NextResponse.next()
// }

// export const config = {
//   matcher: [
//     '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   ],
// }