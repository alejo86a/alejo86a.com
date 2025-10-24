"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Alejandro Berrio's CV
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.about}
            </a>
            <a href="#highlights" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.highlights}
            </a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.experience}
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.skills}
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.projects}
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.contact}
            </a>
            <div className="flex items-center gap-2 ml-2 pl-2 border-l border-border">
              <button
                onClick={() => setLanguage("en")}
                className={`text-2xl transition-opacity ${language === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
                title="English"
                aria-label="Switch to English"
              >
                🇺🇸
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`text-2xl transition-opacity ${language === "es" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
                title="Español"
                aria-label="Cambiar a Español"
              >
                🇨🇴
              </button>
            </div>
          </div>
          <Button asChild size="sm" className="hidden md:flex">
            <a href="https://calendly.com/alejo86a/30min" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4 mr-2" />
              {t.nav.scheduleCall}
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
