import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "THE SYSTEM | Dawid Gac - Dropshipping Blueprint 2026",
  description: "Jedyny system dropshipping, ktory potrzebujesz. Od 0 do 100k dziennie.",
  openGraph: {
    title: "THE SYSTEM | Dawid Gac",
    description: "Jedyny system dropshipping na 2026",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#030712] text-white min-h-screen`}>
        <div className="grid-bg fixed inset-0 pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
