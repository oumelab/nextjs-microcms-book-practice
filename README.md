# 翔泳社 『Next.js＋ヘッドレスCMSではじめる！ かんたんモダンWebサイト制作入門 高速で、安全で、運用しやすいサイトのつくりかた』

書籍の学習用リポジトリです。<br>

- Next.js v15
- React v19
- Bun v1.1.43

## 8章-6 Basic認証を設定してみよう
### Middlewareとは
`Middleware` の処理を確認する<br>
プロジェクトルートに `middleware.ts` を作成
```TypeScript
import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
   console.log("middleware: " + request.url);

   return NextResponse.next();
 }

 export const config = {
   matcher: "/members/:path*",
 };
```
### Basic認証の設定
1. `nextjs-basic-auth-middleware` をインストール
  ```shell
  bun add nextjs-basic-auth-middleware
  ```
2. `middleware.ts` を修正<br>
  書籍のコードだと、自分の環境ではローカルでは動作したが、Vercelにデプロイしたら動作しなかった。なので下記に変更して動作した。
```TypeScript
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
```
3. `.env.local` に環境変数を追記
```
BASIC_AUTH_USERNAME=admin
BASIC_AUTH_PASSWORD=password
```