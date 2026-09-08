import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nirmal Kumar — Developer",
  description:
    "Nirmal Kumar — B.Tech student, web developer, and Android learner building real software.",
  keywords: [
    "Nirmal Kumar",
    "portfolio",
    "developer",
    "web development",
    "Android",
  ],
  openGraph: {
    title: "Nirmal Kumar — Developer",
    description: "B.Tech student, web developer, and Android learner",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF7F2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geist.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
