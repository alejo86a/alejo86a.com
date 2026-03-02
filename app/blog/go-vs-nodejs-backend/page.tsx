import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Go vs Node.js for High-Throughput Backends — José Alejandro Berrío",
    description:
        "After production systems in both Go and Node.js at Leal and Mercado Libre, here is my honest take on when each language shines and when they disappoint.",
}

export default function GoVsNodeArticle() {
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
                    <span className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Backend</span>
                    <time className="text-sm text-muted-foreground">December 2025</time>
                    <span className="text-sm text-muted-foreground">· 7 min read</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                    Go vs Node.js for High-Throughput Backends: A Practical Comparison
                </h1>

                <p className="text-lg text-muted-foreground border-l-4 border-primary pl-5 mb-10 leading-relaxed">
                    I have shipped production systems in both Go and Node.js — loyalty platform backends in Go at Leal serving 700+ businesses, and payment infrastructure in Node.js at Rappi and Mercado Libre. This is not a benchmark article. It is a practical guide on when each language earns its place.
                </p>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The Context That Matters</h2>
                <p className="mb-4">Performance benchmarks are seductive but often misleading. A Go HTTP server can handle more raw requests per second than Node.js in synthetic tests — but that comparison means nothing if your bottleneck is a PostgreSQL query that takes 50ms regardless of which language you use.</p>
                <p className="mb-4">The real questions are: What does your team know? What are your operational constraints? Where is your actual bottleneck?</p>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Where Go Wins</h2>
                <p className="mb-4">At Leal, we used Go for the core loyalty engine — the service that calculates and distributes reward points across 1M+ user accounts and 700+ partner businesses. Go was the right choice here:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                    <li><strong className="text-foreground">True concurrency</strong> — Go goroutines are cheap. We spawned thousands of concurrent workers to process loyalty point distributions in parallel.</li>
                    <li><strong className="text-foreground">Predictable latency</strong> — Go&apos;s GC does not stop the world for long. P99 latencies were consistent.</li>
                    <li><strong className="text-foreground">Static typing + compilation</strong> — Errors caught at compile time, not in production. Refactoring is dramatically safer.</li>
                    <li><strong className="text-foreground">Small binary, low memory</strong> — Go compiles to a single static binary. Docker images are tiny.</li>
                </ul>

                <pre className="bg-muted rounded-xl p-5 overflow-x-auto my-6 text-sm font-mono border border-border"><code>{`// Go: spawning 1000 goroutines is trivial
func distributeLoyaltyPoints(users []User) {
    var wg sync.WaitGroup
    for _, u := range users {
        wg.Add(1)
        go func(user User) {
            defer wg.Done()
            calculateAndCredit(user)
        }(u)
    }
    wg.Wait()
}`}</code></pre>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Where Node.js Wins</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                    <li><strong className="text-foreground">Team velocity</strong> — If your team knows JavaScript, Node.js lets you ship faster. The ecosystem is enormous.</li>
                    <li><strong className="text-foreground">I/O-bound workloads</strong> — For services that are mostly waiting on database queries or external API calls, Node.js&apos;s event loop is extremely efficient.</li>
                    <li><strong className="text-foreground">JSON-first</strong> — Node.js speaks JSON natively. Zero ceremony.</li>
                    <li><strong className="text-foreground">Rapid prototyping</strong> — Need a proof of concept in 48 hours? Node.js + Express is hard to beat.</li>
                </ul>

                <pre className="bg-muted rounded-xl p-5 overflow-x-auto my-6 text-sm font-mono border border-border"><code>{`// Node.js: async I/O is effortless
async function processPayment(req, res) {
  const [user, merchant, limits] = await Promise.all([
    db.users.findById(req.userId),
    db.merchants.findById(req.merchantId),
    compliance.getLimits(req.userId),
  ]);
  // All three DB calls run in parallel
}`}</code></pre>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Comparison Table</h2>
                <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-card">
                                <th className="text-left p-3 border border-border text-primary font-bold">Factor</th>
                                <th className="text-left p-3 border border-border text-primary font-bold">Go</th>
                                <th className="text-left p-3 border border-border text-primary font-bold">Node.js</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                            {[
                                ["Raw CPU throughput", "✅ Excellent", "⚠️ Single-threaded"],
                                ["I/O-bound concurrency", "✅ Excellent", "✅ Excellent"],
                                ["Memory usage", "✅ Low & predictable", "⚠️ Higher, GC spikes"],
                                ["Type safety", "✅ Compile-time", "⚠️ TypeScript helps"],
                                ["Team hiring pool", "⚠️ Smaller", "✅ Large"],
                                ["Ecosystem / libraries", "⚠️ Smaller", "✅ Enormous (npm)"],
                                ["Dev speed (initial)", "⚠️ Slower", "✅ Fast"],
                                ["Refactoring safety", "✅ High", "⚠️ Medium (TS helps)"],
                                ["Docker image size", "✅ Tiny (static binary)", "⚠️ Larger (node_modules)"],
                            ].map(([factor, go, node]) => (
                                <tr key={factor} className="even:bg-card/30">
                                    <td className="p-3 border border-border font-medium text-foreground">{factor}</td>
                                    <td className="p-3 border border-border">{go}</td>
                                    <td className="p-3 border border-border">{node}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">My Decision Framework</h2>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
                    <li><strong className="text-foreground">CPU-intensive?</strong> (heavy computation, cryptography) → Go</li>
                    <li><strong className="text-foreground">Mostly I/O?</strong> (API gateway, BFF, webhook receiver) → Either; Node.js has a faster path to production</li>
                    <li><strong className="text-foreground">Team of 5+ engineers long-term?</strong> → Go&apos;s type system reduces coordination bugs</li>
                    <li><strong className="text-foreground">Need rapid iteration?</strong> → Node.js</li>
                    <li><strong className="text-foreground">Need sub-millisecond P99?</strong> → Go</li>
                </ol>

                <div className="bg-card border border-border border-l-4 border-l-primary rounded-lg p-5 my-6">
                    <strong className="text-primary block mb-2">🏆 The Real Winner</strong>
                    <p className="text-muted-foreground">The language your team knows deeply and can maintain confidently. A well-written Node.js service will always outperform a poorly written Go service.</p>
                </div>

                <h2 className="text-2xl font-bold text-primary mt-10 mb-4">TypeScript Changes the Equation</h2>
                <p className="mb-4">The weakest argument against Node.js used to be dynamic typing. TypeScript largely solves that. With strict mode enabled, TypeScript catches the majority of type errors at compile time. If you are building a new Node.js service today, use TypeScript — the cost is minimal, the benefit is substantial.</p>

                <hr className="border-border my-10" />

                <div className="bg-card border border-border rounded-xl p-5">
                    <strong className="block mb-1">José Alejandro Berrío Marín</strong>
                    <small className="text-muted-foreground">Lead Software Engineer · 9+ years in fintech across LATAM · ex-Mercado Libre, Rappi, Leal</small>
                </div>

                <nav className="flex justify-between mt-10 flex-wrap gap-4">
                    <Link href="/blog/building-payment-systems" className="text-primary hover:underline text-sm">← Lessons from Building Payment Systems</Link>
                    <Link href="/blog" className="text-primary hover:underline text-sm">All Articles →</Link>
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
