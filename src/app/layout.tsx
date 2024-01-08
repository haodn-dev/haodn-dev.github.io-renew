import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import Header from "@/app/components/Header";
import PageContent from "@/app/components/PageContent";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Portfolio : Haodn.dev',
    description: 'Hao Duong\'s portfolio',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header></Header>
        <PageContent></PageContent>
        {children}
        </body>
        </html>
    )
}
