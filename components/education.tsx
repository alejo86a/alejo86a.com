import { Card } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Systems Engineering",
      institution: "Metropolitan Institute of Technology (ITM)",
      year: "2024",
      location: "Medellín, Colombia",
    },
    {
      degree: "Diploma in Cloud Computing Fundamentals",
      institution: "Metropolitan Institute of Technology (ITM)",
      year: "2024",
      location: "Medellín, Colombia",
    },
    {
      degree: "Diploma: Leadership in an Age of Disruption",
      institution: "California State University, Northridge",
      year: "2022",
      location: "Los Angeles, California",
    },
    {
      degree: "Diploma in Advanced Architecture with Microservices",
      institution: "University of Antioquia (UdeA)",
      year: "2018",
      location: "Medellín, Colombia",
    },
    {
      degree: "Systems Engineering",
      institution: "University of Antioquia",
      year: "2012 – 2016",
      location: "Medellín, Colombia",
    },
    {
      degree: "Systems Technique",
      institution: "SENA",
      year: "2011",
      location: "Medellín, Colombia",
    },
  ]

  const achievements = [
    "Mercado Pago: QR payments scaling from 0 to 1M+ monthly transactions",
    "RappiPay: Launched first co-branded credit card and savings account adopted by 100K+ users",
    "Leal: Loyalty platform with 1M+ users and 700+ businesses in 8 countries",
    "Hackathons: Startup Weekend Medellín (IoT, Fintech Challenge), Apps.co finalist",
    "Founder: Peiname.co MVP (Android/iOS), marketing & customer discovery",
  ]

  return (
    <section id="education" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education & Achievements</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-4">
                  <p className="font-bold">{edu.degree}</p>
                  <p className="text-sm text-primary">{edu.institution}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-muted-foreground">{edu.location}</p>
                    <p className="text-xs font-medium text-muted-foreground">{edu.year}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Career Achievements</h3>
            </div>
            <Card className="p-6">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
