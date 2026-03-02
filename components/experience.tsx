"use client"

import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

export function Experience() {
  const ref = useScrollAnimation()
  const experiences = [
    {
      title: "Project Leader",
      company: "Mercado Libre - Mercado Pago",
      location: "Buenos Aires/São Paulo/Medellín",
      period: "2024 – Present",
      achievements: [
        "Directed a 9-engineer team (5 iOS, 4 Android) delivering key payment features for millions of users",
        "Launched QR payment solution in 2 months, scaling to 300K+ transactions in the first month and over 1M monthly later",
        'Eliminated multi-year technical debt and sustained SLA "Above" rating with 100% compliance for 12+ months',
        "Implemented encryption and QR signing algorithms; led hiring, mentoring, PR reviews, and career plans",
      ],
    },
    {
      title: "Technical Leader",
      company: "Leal",
      location: "Bogotá",
      period: "2022 – 2024",
      achievements: [
        "Led 7 engineers designing a loyalty platform with 1M+ users and 700+ businesses across 8 countries",
        "Architected backend (Go, Node.js) and coordinated Flutter frontend to accelerate product delivery",
        "Maintained and enhanced co-branded credit card system with Davivienda, improving transaction reconciliation speed by 30%",
      ],
    },
    {
      title: "Senior Principal Software Engineer",
      company: "Prodigious (Publicis Global Delivery)",
      location: "Paris, France",
      period: "2021 – 2022",
      achievements: [
        "Developed backend services in Node.js, Java, React, and Azure, supporting international clients",
        "Spearheaded internal frameworks (Knex, Spring Boot) and conducted 20+ interviews for senior Node.js engineers",
      ],
    },
    {
      title: "Software Development Engineer",
      company: "Baires Dev",
      location: "San Francisco, USA",
      period: "2021",
      achievements: [
        "Built Node.js backend for Instructure LMS used by thousands of educators",
        "Delivered backend & DevOps for Waitr App, optimizing CI/CD pipelines and cloud deployments",
      ],
    },
    {
      title: "Software Engineer",
      company: "Rapicredit",
      location: "Bogotá",
      period: "2020 – 2021",
      achievements: [
        "Developed APIs with Java Spring Boot and Drools rule engine for automated credit risk scoring",
        "Implemented Angular components, reducing frontend defect rate by 15%",
      ],
    },
    {
      title: "Intermediate Backend Developer",
      company: "Rappi",
      location: "Bogotá",
      period: "2018 – 2020",
      achievements: [
        "Co-created RappiPay: enabled money transfers, launched first co-branded credit card with Davivienda, and savings account adopted by 100K+ users",
      ],
    },
    {
      title: "Development Consultant",
      company: "SETI / SURA",
      location: "Medellín",
      period: "2016 – 2020",
      achievements: [
        "Engineered proposal management platform (Angular, Java EE, Oracle) improving sales efficiency by 25%",
        "Delivered insurance quoting/sales system (GuideWire, Angular, Scala) handling thousands of monthly policies",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 bg-muted/30">
      <div ref={ref} className="container mx-auto max-w-4xl animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 mt-1">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-muted-foreground">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
