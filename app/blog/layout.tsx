import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: {
        default: "Blog — José Alejandro Berrío",
        template: "%s — José Alejandro Berrío",
    },
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={`${inter.className} antialiased dark`}>
            {children}
        </div>
    )
}
