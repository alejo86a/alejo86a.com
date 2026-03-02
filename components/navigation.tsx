"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Menu, X, Sun, Moon } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "next-themes"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#setup", label: t.nav.setup },
    { href: "#highlights", label: t.nav.highlights },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
    { href: "/blog", label: t.nav.blog },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#hero" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              Alejandro Berrio&apos;s CV
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
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
                <button
                  onClick={() => setLanguage("pt")}
                  className={`text-2xl transition-opacity ${language === "pt" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
                  title="Português"
                  aria-label="Mudar para Português"
                >
                  🇧🇷
                </button>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="ml-1 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  aria-label="Toggle dark/light mode"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Desktop CTA */}
            <Button asChild size="sm" className="hidden md:flex">
              <a href="https://calendly.com/alejo86a/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                {t.nav.scheduleCall}
              </a>
            </Button>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label="Toggle dark/light mode"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-foreground hover:bg-accent transition-colors"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="container mx-auto px-4 pb-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 px-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Language switcher row */}
            <div className="flex items-center gap-4 pt-3 px-2 border-t border-border mt-2">
              <button
                onClick={() => { setLanguage("en"); setIsMenuOpen(false) }}
                className={`text-2xl transition-opacity ${language === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
                title="English"
                aria-label="Switch to English"
              >
                🇺🇸
              </button>
              <button
                onClick={() => { setLanguage("es"); setIsMenuOpen(false) }}
                className={`text-2xl transition-opacity ${language === "es" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
                title="Español"
                aria-label="Cambiar a Español"
              >
                🇨🇴
              </button>
              <button
                onClick={() => { setLanguage("pt"); setIsMenuOpen(false) }}
                className={`text-2xl transition-opacity ${language === "pt" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
                title="Português"
                aria-label="Mudar para Português"
              >
                🇧🇷
              </button>
            </div>

            {/* Mobile Schedule Call CTA */}
            <Button asChild size="sm" className="mt-3 w-full">
              <a
                href="https://calendly.com/alejo86a/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t.nav.scheduleCall}
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}
