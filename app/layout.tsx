import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google';
import type {Metadata} from "next";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL ?? "http://localhost:3000"),
  title: {
    template: "【学習用】%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description:
    "「Next.js＋ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
  openGraph: {
    title: "【学習用】シンプルなコーポレートサイト",
    description:
      "「Next.js＋ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
    url: process.env.BASE_URL ?? "http://localhost:3000",
    siteName: "【学習用】%s | シンプルなコーポレートサイト",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: process.env.BASE_URL ?? "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <GoogleTagManager gtmId="GTM-T643K6JZ" />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
