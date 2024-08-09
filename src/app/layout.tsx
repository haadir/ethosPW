import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({ weight: '400', subsets: ["latin"], variable: "--font-dm_sans", display: "swap" });

export const metadata: Metadata = {
  title: "ethos",
  description: "Simplifying your portfolio",
};

export default function RootLayout({children,}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dm_sans.className}>
      <body>{children}</body>
    </html>
  );
}
