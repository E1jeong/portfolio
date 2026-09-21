import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { profile } from "../data/portfolio";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-jade-ten-46.vercel.app"),
  title: `${profile.name} | ${profile.title}`,
  description: profile.metaDescription,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png?v=size2", type: "image/png" },
    ],
  },
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.ogDescription,
    url: "https://portfolio-jade-ten-46.vercel.app",
    siteName: `${profile.name} Portfolio`,
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
    <html lang="ko" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
