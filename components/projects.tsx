"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

type FilterType = "all" | "backend" | "frontend" | "fullstack" | "algorithms"

interface Project {
  name: string
  tagline: string
  highlights: string[]
  tags: string[]
  category: FilterType[]
  links: {
    repo?: string
    frontend?: string
    backend?: string
    admin?: string
    inventarioBack?: string
    tiendaBack?: string
  }
}

export function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<FilterType>("all")

  const projects: Project[] = [
    {
      name: t.projects.inventario.name,
      tagline: t.projects.inventario.tagline,
      highlights: t.projects.inventario.highlights,
      tags: ["Node.js", "NestJS", "Koa", "React", "Next.js", "Angular", "TypeScript", "Docker"],
      category: ["fullstack", "backend", "frontend"],
      links: {
        repo: "https://github.com/alejo86a",
        frontend: "https://github.com/alejo86a/tienda",
        admin: "https://github.com/alejo86a/inventario",
        inventarioBack: "https://github.com/alejo86a/inventario-back",
        tiendaBack: "https://github.com/alejo86a/tienda-back",
      },
    },
    {
      name: t.projects.nestEvents.name,
      tagline: t.projects.nestEvents.tagline,
      highlights: t.projects.nestEvents.highlights,
      tags: ["NestJS", "TypeScript", "Jest", "Vue", "Tailwind", "Docker"],
      category: ["fullstack", "backend", "frontend"],
      links: {
        backend: "https://github.com/alejo86a/nest-events",
        frontend: "https://github.com/alejo86a/nest-events-frontend",
      },
    },
    {
      name: t.projects.coordinadora.name,
      tagline: t.projects.coordinadora.tagline,
      highlights: t.projects.coordinadora.highlights,
      tags: ["Node.js", "TypeScript", "REST", "Axios", "Jest"],
      category: ["backend"],
      links: {
        repo: "https://github.com/alejo86a/coordinadora-api-tracking",
      },
    },
    {
      name: t.projects.fuleo.name,
      tagline: t.projects.fuleo.tagline,
      highlights: t.projects.fuleo.highlights,
      tags: ["Angular", "TypeScript", "Karma", "Protractor"],
      category: ["frontend"],
      links: {
        repo: "https://github.com/alejo86a/fuleo",
      },
    },
    {
      name: t.projects.leetcode.name,
      tagline: t.projects.leetcode.tagline,
      highlights: t.projects.leetcode.highlights,
      tags: ["JavaScript", "Algorithms", "Data Structures"],
      category: ["algorithms"],
      links: {
        repo: "https://github.com/alejo86a/leetcode",
      },
    },
    {
      name: t.projects.memoization.name,
      tagline: t.projects.memoization.tagline,
      highlights: t.projects.memoization.highlights,
      tags: ["Node.js", "JavaScript"],
      category: ["backend"],
      links: {
        repo: "https://github.com/alejo86a/memoization",
      },
    },
    {
      name: t.projects.personalSite.name,
      tagline: t.projects.personalSite.tagline,
      highlights: t.projects.personalSite.highlights,
      tags: ["GitHub Pages", "Next.js", "React", "TypeScript"],
      category: ["frontend", "fullstack"],
      links: {
        repo: "https://github.com/alejo86a/alejo86a.github.io",
      },
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category.includes(filter))

  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.projects.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {(["all", "backend", "frontend", "fullstack", "algorithms"] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:bg-muted"
              }`}
            >
              {t.projects.filters[f]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.tagline}</p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 8).map((tag, i) => (
                  <span key={i} className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-6 flex-grow">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {project.links.repo && (
                  <Button asChild size="sm" className="gap-2">
                    <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      {t.projects.viewRepo}
                    </a>
                  </Button>
                )}
                {project.links.frontend && (
                  <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                    <a href={project.links.frontend} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      {t.projects.viewFrontend}
                    </a>
                  </Button>
                )}
                {project.links.backend && (
                  <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                    <a href={project.links.backend} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      {t.projects.viewBackend}
                    </a>
                  </Button>
                )}
                {project.links.admin && (
                  <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                    <a href={project.links.admin} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      {t.projects.viewAdmin}
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="text-center text-sm text-muted-foreground mb-8">
          <p>{t.projects.note}</p>
        </div>

        {/* Professional Case Studies */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-2 text-center">{t.projects.caseStudies.title}</h3>
          <p className="text-sm text-muted-foreground text-center mb-6">{t.projects.caseStudies.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Mercado Pago — QR Payments</h4>
              <p className="text-sm text-muted-foreground">{t.projects.caseStudies.mercadoPago}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">RappiPay — Cards & Savings</h4>
              <p className="text-sm text-muted-foreground">{t.projects.caseStudies.rappiPay}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Leal — Loyalty Platform</h4>
              <p className="text-sm text-muted-foreground">{t.projects.caseStudies.leal}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
