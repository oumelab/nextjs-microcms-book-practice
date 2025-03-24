// import { NextRequest, NextResponse } from "next/server"

// export function middleware(request: NextRequest) {
//   console.log("middleware: " + request.url);

//   return NextResponse.next();
// }

// export const config = {
//   matcher: "/members/:path*",
// };

import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";


export const middleware = createNextAuthMiddleware({
  users:[{
    name: process.env.BASIC_AUTH_USERNAME || "",
    password: process.env.BASIC_AUTH_PASSWORD || "",
  }],
});
export const config = {
	matcher: ['/(.*)'],
};