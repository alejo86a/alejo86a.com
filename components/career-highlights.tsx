"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

export function CareerHighlights() {
  const { t } = useLanguage()
  const ref = useScrollAnimation()

  const highlights = [
    {
      icon: TrendingUp,
      title: t.highlights.mercadoPago.title,
      company: t.highlights.mercadoPago.company,
      description: t.highlights.mercadoPago.description,
      impact: t.highlights.mercadoPago.impact,
      points: t.highlights.mercadoPago.points,
    },
    {
      icon: Globe,
      title: t.highlights.leal.title,
      company: t.highlights.leal.company,
      description: t.highlights.leal.description,
      impact: t.highlights.leal.impact,
      points: t.highlights.leal.points,
    },
    {
      icon: Users,
      title: t.highlights.rappiPay.title,
      company: t.highlights.rappiPay.company,
      description: t.highlights.rappiPay.description,
      impact: t.highlights.rappiPay.impact,
      points: t.highlights.rappiPay.points,
    },
  ]

  return (
    <section id="highlights" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.highlights.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.highlights.subtitle}</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 animate-on-scroll stagger">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{highlight.company}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{highlight.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold mb-2">{highlight.impact}</p>
                  <ul className="space-y-1">
                    {highlight.points.map((point, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
