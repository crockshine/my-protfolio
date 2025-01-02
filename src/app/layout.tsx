import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Unbounded } from "next/font/google";
import "../styles/globals.css";
import React from "react";

const unbounded = Unbounded({
  variable: "--font-unbounded-sans",
  weight:["200", "700"],
  subsets:["cyrillic","latin"]
});


export const metadata: Metadata = {
  title: "crockshine",
  description: "Портфолио Королев Михаил",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={unbounded.className}>
      {children}
    </body>
    </html>
  );
}
