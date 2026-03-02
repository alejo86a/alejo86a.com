import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Lessons from Building Payment Systems at Scale — José Alejandro Berrío",
    description:
        "What I learned co-creating RappiPay: money movement, idempotency, and making a co-branded credit card launch successful.",
}

export default function PaymentSystemsArticle() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <nav className="sticky top-0 z-10 bg-background/90 backdrop-blur border-b border-border px-6 py-4 flex items-center justify-between">
                <Link href="/" className="font-bold text-base hover:text-primary transition-colors">
                    Alejandro Berrío
                </Link>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    ← All Articles
                </Link>
            </nav>

            <article className="max-w-2xl mx-auto px-6 py-16 pb-24">
                <div className="flex gap-3 items-center mb-6 flex-wrap">
                    <span className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Fintech</span>
                    <time className="text-sm text-muted-foreground">January 2026</time>
                    <span className="text-sm text-muted-foreground">· 10 min read</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                    Lessons from Building Payment Systems at Scale
                </h1>

                <p className="text-lg text-muted-foreground border-l-4 border-primary pl-5 mb-10 leading-relaxed">
                    At Rappi, I was part of the small team that bootstrapped RappiPay from zero — including Colombia&apos;s first co-branded credit card with Davivienda and a digital savings account that grew to 100K+ active users. Here are the hard lessons.
                </p>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Money Is Not Just a Number</h2>
                <p className="mb-4">The first mistake many engineers make when building a payment system is representing money as a floating-point number. <code className="bg-muted px-1.5 py-0.5 rounded text-primary text-sm font-mono">float amount = 10.50</code> — this will haunt you. Floating-point arithmetic is not exact. In payments, fractions of a cent matter at scale.</p>
                <p className="mb-4">The rule: always store monetary amounts in the smallest indivisible unit (cents, in most cases), as an integer. <code className="bg-muted px-1.5 py-0.5 rounded text-primary text-sm font-mono">1050</code> for $10.50. Do all arithmetic in integers. Format for display only at the presentation layer.</p>

                <pre className="bg-muted rounded-xl p-5 overflow-x-auto my-6 text-sm font-mono border border-border"><code>{`// ❌ Dangerous
const amount: number = 10.50;

// ✅ Safe  
const amountCents: number = 1050; // always integer, always cents`}</code></pre>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The Ledger is Sacred</h2>
                <p className="mb-4">Every payment system is, at its core, an accounting system. The golden rule: every debit has a matching credit — the ledger must always balance. We enforced this at the database level with triggers and at the application level with reconciliation jobs that ran every 15 minutes.</p>
                <p className="mb-4">When we integrated the Davivienda credit card, we discovered that the bank&apos;s API returned transaction statuses asynchronously — sometimes hours later. Our reconciliation system had to account for <em>pending</em>, <em>authorized</em>, <em>settled</em>, and <em>reversed</em> states, each with corresponding ledger entries.</p>

                <div className="bg-card border border-border border-l-4 border-l-primary rounded-lg p-5 my-6">
                    <strong className="text-primary block mb-2">⚠️ Lesson Learned</strong>
                    <p className="text-muted-foreground">Never trust a payment provider&apos;s webhook as the source of truth. Build reconciliation jobs that query their API independently and compare against your internal state.</p>
                </div>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Idempotency: Do Not Skip This</h2>
                <p className="mb-4">Mobile networks are unreliable. Users tap &quot;Pay&quot; and get a spinner. They tap again. Your server receives the request twice. Without idempotency, you charge them twice.</p>
                <p className="mb-4">Every mutating API endpoint in RappiPay required an <code className="bg-muted px-1.5 py-0.5 rounded text-primary text-sm font-mono">Idempotency-Key</code> header. On the server we stored <code className="bg-muted px-1.5 py-0.5 rounded text-primary text-sm font-mono">(user_id, idempotency_key) → response</code> with a 24-hour TTL. This pattern eliminated duplicate transactions entirely.</p>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Regulatory Compliance is an Engineering Problem</h2>
                <p className="mb-4">Financial regulation in LATAM varies by country. In Colombia, the Superintendencia Financiera sets rules around KYC, transaction limits, and AML screening. These have direct engineering implications:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                    <li>KYC data must be encrypted at rest and in transit, with strict access controls</li>
                    <li>Transaction records must be immutable — append-only audit tables, no UPDATE or DELETE</li>
                    <li>AML screening requires external watchlist APIs with sub-second SLA requirements</li>
                    <li>Data residency requirements may forbid certain cloud regions</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The Co-Branded Card Launch</h2>
                <p className="mb-4">Launching Colombia&apos;s first co-branded credit card between Rappi and Davivienda required integrating with the bank&apos;s decades-old SOAP-based core banking system. We built a dedicated adapter service — a strangler fig pattern — that translated all interactions. When Davivienda upgraded their systems a year later, we only had to update the adapter.</p>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">What I Wish I Had Known</h2>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
                    <li><strong className="text-foreground">Design error states explicitly</strong> — A payment can succeed, fail, or be in an unknown state. Handle all three.</li>
                    <li><strong className="text-foreground">PCI-DSS is a journey, not a checkbox</strong> — Start the compliance process early. The audit takes months.</li>
                    <li><strong className="text-foreground">Invest in a testing sandbox early</strong> — Mirrors production, saves enormous debugging time.</li>
                    <li><strong className="text-foreground">Observability = sleep</strong> — The teams that sleep are the ones with dashboards, not the ones paged at 3am.</li>
                </ol>

                <hr className="border-border my-10" />

                <div className="bg-card border border-border rounded-xl p-5">
                    <strong className="block mb-1">José Alejandro Berrío Marín</strong>
                    <small className="text-muted-foreground">Lead Software Engineer · 9+ years in fintech across LATAM · ex-Mercado Libre, Rappi, Leal</small>
                </div>

                <nav className="flex justify-between mt-10 flex-wrap gap-4">
                    <Link href="/blog/microservices-patterns-fintech" className="text-primary hover:underline text-sm">← Microservices Patterns in Fintech</Link>
                    <Link href="/blog/go-vs-nodejs-backend" className="text-primary hover:underline text-sm">Go vs Node.js for Backends →</Link>
                </nav>
            </article>

            <footer className="border-t border-border text-center py-8 text-sm text-muted-foreground">
                <Link href="/" className="text-primary hover:underline">alejo86a.com</Link>
                {" · "}
                <a href="https://linkedin.com/in/alejo86a" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>
                {" · "}
                <a href="https://github.com/alejo86a" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
            </footer>
        </div>
    )
}
