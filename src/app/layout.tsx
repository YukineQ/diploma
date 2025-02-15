import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css";
import type { Metadata } from "next";

import { cn } from "@/lib/utils"
import { AppProvider } from "@/providers";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

const fontHeading = localFont({
    src: "../assets/fonts/CalSans-SemiBold.woff2",
    variable: "--font-heading",
})

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" >
            <body className={cn(
                "min-h-screen font-sans antialiased",
                fontSans.variable,
                fontHeading.variable
            )}>
                <AppProvider>
                    {children}
                </AppProvider>
            </body>
        </html>
    )
}