import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "José Alejandro Berrío Marín | Lead Software Engineer",
  description:
    "Lead Software Engineer with 9+ years of experience in fintech, payments, and B2B platforms across LATAM. Specialized in backend engineering, distributed systems, and cloud infrastructure.",
  keywords: [
    "Software Engineer",
    "Lead Engineer",
    "Backend Developer",
    "Fintech",
    "Node.js",
    "TypeScript",
    "Go",
    "AWS",
    "Kubernetes",
    "Mercado Libre",
    "Rappi",
    "Colombia",
    "LATAM",
  ],
  authors: [{ name: "José Alejandro Berrío Marín" }],
  creator: "José Alejandro Berrío Marín",
  publisher: "José Alejandro Berrío Marín",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alejo86a.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "José Alejandro Berrío Marín | Lead Software Engineer",
    description:
      "Lead Software Engineer with 9+ years building scalable fintech platforms in LATAM. Expert in backend engineering, distributed systems, and team leadership.",
    url: "https://alejo86a.github.io",
    siteName: "José Alejandro Berrío - Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: "José Alejandro Berrío Marín - Lead Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "José Alejandro Berrío Marín | Lead Software Engineer",
    description:
      "Lead Software Engineer with 9+ years building scalable fintech platforms in LATAM. Expert in backend engineering and distributed systems.",
    images: ["/og-card.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "José Alejandro Berrío Marín",
              jobTitle: "Lead Software Engineer",
              description:
                "Lead Software Engineer with 9+ years of experience in fintech, payments, and B2B platforms across LATAM",
              url: "https://alejo86a.github.io",
              image: "https://alejo86a.github.io/profile-picture.png",
              sameAs: [
                "https://linkedin.com/in/alejo86a",
                "https://github.com/alejo86a",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Medellín",
                addressCountry: "CO",
              },
              email: "info@alejo86a.com",
              alumniOf: {
                "@type": "Organization",
                name: "Universidad de Antioquia",
              },
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Mercado Libre",
                },
              ],
              knowsAbout: [
                "Software Engineering",
                "Backend Development",
                "Fintech",
                "Distributed Systems",
                "Cloud Infrastructure",
                "Node.js",
                "TypeScript",
                "Go",
                "AWS",
                "Kubernetes",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
