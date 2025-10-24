"use client"

import { Card } from "@/components/ui/card"
import { Code, Cloud, Database, Wrench } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      icon: Code,
      title: t.skills.backend.title,
      skills: [
        { name: "Node.js", description: t.skills.backend.nodejs },
        { name: "TypeScript/JavaScript", description: t.skills.backend.typescript },
        { name: "PHP", description: t.skills.backend.php },
        { name: "Java", description: t.skills.backend.java },
        { name: "Go", description: t.skills.backend.go },
        { name: "Python", description: t.skills.backend.python },
      ],
    },
    {
      icon: Cloud,
      title: t.skills.cloud.title,
      skills: [
        { name: "AWS", description: t.skills.cloud.aws },
        { name: "Kubernetes", description: t.skills.cloud.kubernetes },
        { name: "Docker", description: t.skills.cloud.docker },
        { name: "Terraform", description: t.skills.cloud.terraform },
        { name: "Kafka", description: t.skills.cloud.kafka },
      ],
    },
    {
      icon: Database,
      title: t.skills.databases.title,
      skills: [
        { name: "PostgreSQL", description: t.skills.databases.postgresql },
        { name: "MySQL", description: t.skills.databases.mysql },
        { name: "DynamoDB", description: t.skills.databases.dynamodb },
        { name: "Redis", description: t.skills.databases.redis },
        { name: "MariaDB", description: t.skills.databases.mariadb },
      ],
    },
    {
      icon: Code,
      title: t.skills.frontend.title,
      skills: [
        { name: "React", description: t.skills.frontend.react },
        { name: "Angular", description: t.skills.frontend.angular },
        { name: "Vue", description: t.skills.frontend.vue },
        { name: "Next.js", description: t.skills.frontend.nextjs },
      ],
    },
    {
      icon: Wrench,
      title: t.skills.tools.title,
      skills: [
        { name: "Git", description: t.skills.tools.git },
        { name: "Jira", description: t.skills.tools.jira },
        { name: "Datadog", description: t.skills.tools.datadog },
        { name: "Jest", description: t.skills.tools.jest },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skills.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.skills.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <p className="font-semibold text-sm">{skill.name}</p>
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
