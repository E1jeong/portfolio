import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이원정 | Android Developer",
  description: "Android 시스템 앱, 하드웨어 연동, NFC/단말 프로토콜, 결제/구독 앱 개발 포트폴리오",
  openGraph: {
    title: "이원정 | Android Developer",
    description: "Android 시스템 앱과 하드웨어 연동 경험을 중심으로 정리한 개발 포트폴리오",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
