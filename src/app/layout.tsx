import type { Metadata } from "next";
import { Caveat, Eczar, Manrope } from "next/font/google";
import "./globals.css";

const display = Eczar({ subsets: ["latin", "latin-ext"], variable: "--font-display", display: "swap" });
const handwritten = Caveat({ subsets: ["latin", "latin-ext"], variable: "--font-hand", display: "swap", weight: "500" });
const body = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-body", display: "swap", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Twenty Eight Caffee — Un loc cu personalitate, în București",
  description: "O cafea. O conversație. O lume de detalii. Descoperă Twenty Eight Caffee, pe Strada Ion Câmpineanu 23, București.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ro"><body className={`${display.variable} ${body.variable} ${handwritten.variable}`}>{children}</body></html>;
}
