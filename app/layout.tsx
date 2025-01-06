import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import localFont from "next/font/local";
import SmoothScrolling from "@/components/utils/smooth-scrolling/smooth-scrolling";

const Jura = localFont({
  src: [
    {
      path: "./fonts/Jura-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
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
                            <body className={Jura.className}>{children}</body>

</SmoothScrolling>
    </html>
  );
}
