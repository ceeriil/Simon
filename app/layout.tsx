import type { Metadata } from "next";
import { Jura, DM_Sans } from "next/font/google";
import "../styles/globals.scss";
import localFont from "next/font/local";
import SmoothScrolling from "@/components/utils/smooth-scrolling/smooth-scrolling";

const jura = Jura({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Ceeriil",
  description: "Portfolio of Developer Ceeriil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SmoothScrolling>
        <body className={jura.className}>{children}</body>
      </SmoothScrolling>
    </html>
  );
}
