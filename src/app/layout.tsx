import type {Metadata} from 'next'
import {JetBrains_Mono} from 'next/font/google'
import './globals.css'
import React from "react";
import Header from "@/app/components/Header";
import StickyMenu from "@/app/components/StickyMenu";

export const metadata: Metadata = {
    title: 'Portfolio : Haodn.dev',
    description: 'Duong Nhat Hao\'s portfolio',
    keywords: 'Duong Nhat Hao, Dương Nhật Hào, Haodn.dev, portfolio, profile, PHP, Java, Laravel, Next.js',
}
const jetBrainsMono = JetBrains_Mono({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-jetbrains-mono',
    display: 'swap',
})
export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={jetBrainsMono.className}>
        <Header></Header>
        <div className="page-wrapper">
            <StickyMenu></StickyMenu>
            {children}
        </div>
        </body>
        </html>
    )
}
