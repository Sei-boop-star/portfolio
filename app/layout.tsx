import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "渡邊聖也 | 業務改善・生成AI活用パートナー",
  description: "「社長の頭の中」を、現場が迷わず動ける“仕組み”に変える。口頭指示・メモ・暗黙の判断を、手順・チェック・文章に落とし、運用を回転させます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
