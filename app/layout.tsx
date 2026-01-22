import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "渡邊聖也 | 業務改善・生成AI活用パートナー",
  description: "現場の曖昧さを“回る業務”に翻訳し、生成AIで処理速度を上げます。中小企業・個人事業主向けの実践的DX支援。",
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
