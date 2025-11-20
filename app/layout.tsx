import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NewsSense | 뉴스를 제대로 읽고 판단하는 능력을 키워주는 문해력 교육 플랫폼",
  description: "AI를 활용하여 스스로 비판하고 재구성함으로써 올바른 뉴스 리터러시 역량을 함양할 수 있도록 돕는 교육용 애플리케이션",
  keywords: "뉴스, 문해력, AI, 교육, 리터러시, NewsSense",
  openGraph: {
    title: "NewsSense - 문해력 교육 플랫폼",
    description: "뉴스를 제대로 읽고 판단하는 능력을 키워보세요",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" style={{ fontFamily: 'Pretendard, system-ui, sans-serif' }}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
