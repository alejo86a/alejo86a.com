import { Card } from "@/components/ui/card"
import { Code, Cloud, Database, Wrench, UsersIcon } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      skills: [
        { name: "Node.js", description: "6+ years expert level" },
        { name: "TypeScript/JavaScript", description: "5 years production experience" },
        { name: "PHP", description: "3 years backend development" },
        { name: "Java", description: "Spring Boot, enterprise apps" },
        { name: "Go", description: "Microservices architecture" },
        { name: "Python", description: "Scripting and automation" },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", description: "EC2, EKS, RDS, S3, CodePipeline" },
        { name: "Kubernetes", description: "Container orchestration" },
        { name: "Docker", description: "Containerization" },
        { name: "Terraform", description: "Infrastructure as code" },
        { name: "CI/CD", description: "GitHub Actions, Jenkins" },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        { name: "PostgreSQL", description: "Relational database expert" },
        { name: "MySQL", description: "6+ years experience" },
        { name: "DynamoDB", description: "NoSQL at scale" },
        { name: "Redis", description: "Caching and sessions" },
        { name: "MariaDB", description: "High-performance queries" },
      ],
    },
    {
      icon: Wrench,
      title: "Architecture & Tools",
      skills: [
        { name: "Microservices", description: "Distributed systems design" },
        { name: "Kafka", description: "Event streaming" },
        { name: "REST APIs", description: "API design and development" },
        { name: "Datadog", description: "Monitoring and observability" },
        { name: "GitHub/GitLab", description: "Version control" },
      ],
    },
    {
      icon: UsersIcon,
      title: "Soft Skills",
      skills: [
        { name: "Leadership & Mentoring", description: "Led teams up to 9 engineers" },
        { name: "Technical Strategy", description: "Architecture and planning" },
        { name: "Stakeholder Communication", description: "Product alignment" },
        { name: "Agile Delivery", description: "Scrum and Kanban" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over 9+ years of hands-on experience
          </p>
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
