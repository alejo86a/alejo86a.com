"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Linkedin, Mail, Download, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            {t.hero.greeting} <span className="text-primary">{t.hero.name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t.hero.title}
          </p>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.hero.description}</p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Medellín, Colombia</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button asChild size="lg" className="gap-2">
              <a href="https://calendly.com/alejo86a/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                {t.hero.scheduleCall}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <a href="https://linkedin.com/in/alejo86a" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                {t.hero.viewLinkedIn}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <a href="#contact">
                <Download className="w-5 h-5" />
                {t.hero.downloadCV}
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="gap-2">
              <a href="mailto:alejo86a@gmail.com">
                <Mail className="w-5 h-5" />
                {t.hero.emailMe}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
