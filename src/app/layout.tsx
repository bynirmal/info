import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nirmal Kumar | Developer Portfolio",
  description:
    "Nirmal Kumar — B.Tech CSE Student, Developer & Creative Technologist. Building modern, interactive and meaningful digital experiences.",
  keywords: [
    "Nirmal Kumar",
    "portfolio",
    "developer",
    "web development",
    "Next.js",
    "React",
    "Android",
  ],
  openGraph: {
    title: "Nirmal Kumar | Developer Portfolio",
    description:
      "B.Tech CSE Student, Developer & Creative Technologist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="grain min-h-screen bg-[#0a0a0a] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}
