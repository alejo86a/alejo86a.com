"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t.about.title}</h2>

        <Card className="p-8 space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">{t.about.intro}</p>

          <p className="text-lg leading-relaxed text-muted-foreground">{t.about.passion}</p>

          <div className="pt-6 border-t border-border">
            <h3 className="text-xl font-semibold mb-4">{t.about.languages}</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🇪🇸</span>
                <div>
                  <p className="font-semibold">{t.about.spanish}</p>
                  <p className="text-sm text-muted-foreground">{t.about.native}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">🇬🇧</span>
                <div>
                  <p className="font-semibold">{t.about.english}</p>
                  <p className="text-sm text-muted-foreground">{t.about.fluent}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">🇧🇷</span>
                <div>
                  <p className="font-semibold">{t.about.portuguese}</p>
                  <p className="text-sm text-muted-foreground">{t.about.intermediate}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
