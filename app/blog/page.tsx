import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog — José Alejandro Berrío | Lead Software Engineer",
    description:
        "Technical articles on backend engineering, fintech, distributed systems, and software leadership by José Alejandro Berrío.",
    openGraph: {
        title: "Blog — José Alejandro Berrío",
        description:
            "Technical articles on backend engineering, fintech, distributed systems.",
        url: "https://alejo86a.com/blog",
    },
}

const articles = [
    {
        slug: "microservices-patterns-fintech",
        tag: "Architecture",
        title:
            "Microservices Patterns in Fintech: Lessons from 1M+ Monthly Transactions",
        excerpt:
            "How we designed the backend infrastructure for Mercado Pago's QR payment system — from event-driven choreography to saga patterns and idempotency keys that kept us at 100% SLA for 12+ consecutive months.",
        date: "February 2026",
        readTime: "8 min read",
    },
    {
        slug: "building-payment-systems",
        tag: "Fintech",
        title: "Lessons from Building Payment Systems at Scale",
        excerpt:
            "What I learned co-creating RappiPay: how to reason about money movement, why idempotency is non-negotiable, and the operational practices that made our co-branded credit card launch with Davivienda successful.",
        date: "January 2026",
        readTime: "10 min read",
    },
    {
        slug: "go-vs-nodejs-backend",
        tag: "Backend",
        title: "Go vs Node.js for High-Throughput Backends: A Practical Comparison",
        excerpt:
            "After shipping production systems in both Go and Node.js at Leal and Mercado Libre, here is my honest take — when each shines, where they disappoint, and how to choose for your next project.",
        date: "December 2025",
        readTime: "7 min read",
    },
]

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Nav */}
            <nav className="sticky top-0 z-10 bg-background/90 backdrop-blur border-b border-border px-6 py-4 flex items-center justify-between">
                <Link href="/" className="font-bold text-base hover:text-primary transition-colors">
                    Alejandro Berrío
                </Link>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    ← Back to CV
                </Link>
            </nav>

            {/* Hero */}
            <header className="max-w-3xl mx-auto px-6 pt-20 pb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Technical{" "}
                    <span className="text-primary">Writing</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                    Practical insights on backend engineering, fintech architecture, and
                    software leadership from 9+ years in the field.
                </p>
            </header>

            {/* Articles */}
            <main className="max-w-3xl mx-auto px-6 pb-24 flex flex-col gap-6">
                {articles.map((article) => (
                    <Link
                        key={article.slug}
                        href={`/blog/${article.slug}`}
                        className="group block bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                            {article.tag}
                        </span>
                        <h2 className="text-xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
                            {article.title}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                            {article.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{article.date}</span>
                            <span>·</span>
                            <span>{article.readTime}</span>
                            <span className="ml-auto text-primary font-semibold group-hover:translate-x-1 transition-transform">
                                Read article →
                            </span>
                        </div>
                    </Link>
                ))}
            </main>

            <footer className="border-t border-border text-center py-8 text-sm text-muted-foreground">
                <p>
                    Written by{" "}
                    <Link href="/" className="text-primary hover:underline">
                        José Alejandro Berrío
                    </Link>{" "}
                    ·{" "}
                    <a
                        href="https://linkedin.com/in/alejo86a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        LinkedIn
                    </a>{" "}
                    ·{" "}
                    <a
                        href="https://github.com/alejo86a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        GitHub
                    </a>
                </p>
            </footer>
        </div>
    )
}
