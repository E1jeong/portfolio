import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-jade-ten-46.vercel.app"),
  title: "이원정 | AI-Native Android Developer",
  description:
    "온디바이스 AI(Edge ML), Android 시스템 앱, 하드웨어 연동, Clean Architecture 기반 개발 포트폴리오",
  openGraph: {
    title: "이원정 | AI-Native Android Developer",
    description:
      "AI 모델을 직접 설계하여 임베디드 NPU에 배포하고 Android 시스템 및 아키텍처를 구축하는 엔지니어링 포트폴리오",
    url: "https://portfolio-jade-ten-46.vercel.app",
    siteName: "이원정 Portfolio",
    locale: "ko_KR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
