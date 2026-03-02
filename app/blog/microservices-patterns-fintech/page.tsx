import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Microservices Patterns in Fintech — José Alejandro Berrío",
    description:
        "How we designed the backend infrastructure for Mercado Pago's QR payment system — event-driven choreography, saga patterns, and idempotency keys that kept us at 100% SLA.",
}

export default function MicroservicesArticle() {
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
                    <span className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Architecture</span>
                    <time className="text-sm text-muted-foreground">February 2026</time>
                    <span className="text-sm text-muted-foreground">· 8 min read</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                    Microservices Patterns in Fintech: Lessons from 1M+ Monthly Transactions
                </h1>

                <p className="text-lg text-muted-foreground border-l-4 border-primary pl-5 mb-10 leading-relaxed">
                    When we set out to build the QR payment system for Mercado Pago in Buenos Aires, we had nine engineers, a two-month deadline, and the expectation that the system would process hundreds of thousands of transactions monthly from day one. Here is what we learned.
                </p>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The Problem with Simple REST in Payments</h2>
                <p className="mb-4">The temptation in any new service is to reach for synchronous REST calls. They are easy to reason about, easy to test, and easy to debug. However, in a payment system, synchronous coupling between services is a reliability tax that compounds quickly.</p>
                <p className="mb-4">If Service A calls Service B to validate a QR code, and Service B calls Service C to check merchant status, you have a cascading dependency chain. A 200ms latency spike in C becomes 200ms + overhead in B, which becomes 400ms+ in A. Under load, that is how you breach your SLA.</p>

                <div className="bg-card border border-border border-l-4 border-l-primary rounded-lg p-5 my-6">
                    <strong className="text-primary block mb-2">💡 Key Insight</strong>
                    <p className="text-muted-foreground">Every synchronous dependency in a payment flow is a potential SLA breach. Design for failure first.</p>
                </div>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Pattern 1: Event-Driven Choreography</h2>
                <p className="mb-4">For our QR payment flow, we decomposed the transaction lifecycle into events: <code className="bg-muted px-1.5 py-0.5 rounded text-primary text-sm font-mono">QRScanned</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-primary text-sm font-mono">MerchantValidated</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-primary text-sm font-mono">AmountAuthorized</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-primary text-sm font-mono">TransactionSettled</code>. Each service subscribes to the events it cares about and publishes its own events downstream.</p>
                <p className="mb-4">The result: the QR scanning service does not need to know about the settlement service. They are loosely coupled through a message broker (we used Kafka). When the settlement service went down for a deployment, QR scanning continued working — unaffected.</p>

                <pre className="bg-muted rounded-xl p-5 overflow-x-auto my-6 text-sm font-mono border border-border"><code>{`// Simplified event structure
{
  "event_type": "QR_SCANNED",
  "transaction_id": "txn_abc123",
  "qr_hash": "sha256:...",
  "merchant_id": "merch_456",
  "amount_cents": 2500,
  "timestamp": "2024-03-15T14:32:11Z",
  "idempotency_key": "client_789_1710510731"
}`}</code></pre>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Pattern 2: Saga Pattern for Distributed Transactions</h2>
                <p className="mb-4">In a monolith, you have database transactions. In microservices, you do not. When a payment involves debiting a user wallet, crediting a merchant account, and updating a ledger — all in separate services — you need a way to roll back partial changes if something fails.</p>
                <p className="mb-4">We implemented the <strong>choreography-based saga</strong>: each service publishes a success or failure event, and compensating transactions are triggered automatically. If merchant credit fails, a <code className="bg-muted px-1.5 py-0.5 rounded text-primary text-sm font-mono">WalletDebitReversed</code> event is published and the user&apos;s balance is restored.</p>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Pattern 3: Idempotency Keys — Non-Negotiable</h2>
                <p className="mb-4">In mobile payments, network timeouts are a daily reality. A user&apos;s phone submits a payment, times out, and the app retries. Without idempotency keys, you charge the user twice.</p>
                <p className="mb-4">Every payment request carries a client-generated <code className="bg-muted px-1.5 py-0.5 rounded text-primary text-sm font-mono">idempotency_key</code>. The server stores the result keyed by this value. If the same key arrives twice, the second call returns the cached response immediately without re-executing. This pattern eliminated duplicate charge incidents entirely.</p>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Operating at 1M+ Transactions/Month</h2>
                <p className="mb-4">Getting to scale was an iterative process. The first week we launched in Buenos Aires we processed around 10K transactions. A month later, 300K. By month six, we crossed 1M and held there for 12+ consecutive months with 100% SLA compliance.</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                    <li><strong className="text-foreground">Observability first</strong> — Datadog dashboards for each event type, with alerts for event lag, consumer group offsets, and DLQ growth</li>
                    <li><strong className="text-foreground">Circuit breakers</strong> — graceful degradation when downstream validation services degraded</li>
                    <li><strong className="text-foreground">Blue-green deployments</strong> — zero-downtime deploys kept SLA clean</li>
                    <li><strong className="text-foreground">Chaos engineering</strong> — we intentionally killed services in staging every sprint</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">What I Would Do Differently</h2>
                <p className="mb-4">With hindsight: I would invest earlier in <strong>contract testing</strong> between services using tools like Pact. We relied heavily on integration tests in staging, which were slow and occasionally flaky.</p>
                <p className="mb-4">I would also establish a single, canonical event schema registry from day one. We evolved our event schemas organically and paid a migration tax later.</p>

                <hr className="border-border my-10" />

                <div className="bg-card border border-border rounded-xl p-5">
                    <strong className="block mb-1">José Alejandro Berrío Marín</strong>
                    <small className="text-muted-foreground">Lead Software Engineer · 9+ years in fintech across LATAM · ex-Mercado Libre, Rappi, Leal</small>
                </div>

                <nav className="flex justify-between mt-10 flex-wrap gap-4">
                    <Link href="/blog" className="text-primary hover:underline text-sm">← All Articles</Link>
                    <Link href="/blog/building-payment-systems" className="text-primary hover:underline text-sm">Lessons from Building Payment Systems →</Link>
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
