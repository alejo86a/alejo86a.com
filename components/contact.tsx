"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Linkedin, Mail, Download, MapPin, Github } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

export function Contact() {
  const { t } = useLanguage()
  const ref = useScrollAnimation()

  return (
    <section id="contact" className="py-24 px-4">
      <div ref={ref} className="container mx-auto max-w-4xl animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <Card className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.email}</p>
                  <a href="mailto:info@alejo86a.com" className="font-medium hover:text-primary transition-colors">
                    info@alejo86a.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.location}</p>
                  <p className="font-medium">Medellín, Colombia</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.linkedin}</p>
                  <a
                    href="https://linkedin.com/in/alejo86a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    linkedin.com/in/alejo86a
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a
                    href="https://github.com/alejo86a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    github.com/alejo86a
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <a href="https://calendly.com/alejo86a/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5" />
                  {t.contact.scheduleCallBtn}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                <a href="https://linkedin.com/in/alejo86a" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  {t.contact.connectLinkedIn}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                <a href="mailto:info@alejo86a.com">
                  <Mail className="w-5 h-5" />
                  {t.contact.emailMe}
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>© 2025 José Alejandro Berrío Marín. {t.contact.footer}</p>
        </div>
      </div>
    </section>
  )
}
