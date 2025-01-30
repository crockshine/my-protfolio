import type {Metadata} from "next";
import {Unbounded} from "next/font/google";
import "../styles/globals.css";
import React from "react";
import {ModalProvider} from "@/context/modal.context";
import {Modals} from "@/modal";

const unbounded = Unbounded({
    variable: "--font-unbounded-sans",
    weight: ["200", "700"],
    subsets: ["cyrillic", "latin"]
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
          <ModalProvider>
              {children}
              <Modals/>
          </ModalProvider>
        </body>
        </html>
    );
}
