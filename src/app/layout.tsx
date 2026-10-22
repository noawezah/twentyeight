import type { Metadata } from "next";
import { Caveat, Eczar, Manrope } from "next/font/google";
import { cafe } from "@/data/cafe";
import "./globals.css";

const display = Eczar({ subsets: ["latin", "latin-ext"], variable: "--font-display", display: "swap" });
const handwritten = Caveat({ subsets: ["latin", "latin-ext"], variable: "--font-hand", display: "swap", weight: "500" });
const body = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-body", display: "swap", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: cafe.copy.metadataTitle,
  description: cafe.copy.metadataDescription,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ro"><body className={`${display.variable} ${body.variable} ${handwritten.variable}`}>{children}</body></html>;
}
