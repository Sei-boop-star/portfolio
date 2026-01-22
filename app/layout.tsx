import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google"; // Import Google Fonts
import "./globals.css";

// Configure fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

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
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans bg-slate-50 text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-900`}>
        {children}
      </body>
    </html>
  );
}
