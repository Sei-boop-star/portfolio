import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google"; // Prioritize Japanese font
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "渡邊 聖也 | 現場のための業務改善パートナー",
  description: "「社長の頭の中」を、現場が迷わず動ける“仕組み”に変える。12年の品質管理経験で、実務に耐えるAI実装を設計します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSansJP.className} font-sans bg-background text-foreground antialiased selection:bg-gray-200 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
