"use client"

import { Keyboard, Camera, MousePointer2, Monitor, Network, Split, Usb, Cable, Speaker, Headphones, Table, Laptop, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const productKeys = [
  { key: "keyboard", link: "https://amzn.to/4arQa4z", icon: Keyboard },
  { key: "camera", link: "https://amzn.to/3MHM0fD", icon: Camera },
  { key: "wrist", link: "https://amzn.to/4qKXRrc", icon: MousePointer2 },
  { key: "monitor", link: "https://amzn.to/40hVyBd", icon: Monitor },
  { key: "switch", link: "https://amzn.to/4kO6IY7", icon: Network },
  { key: "hdmiSwitch", link: "https://amzn.to/4aqA3Ei", icon: Split },
  { key: "usbc", link: "https://amzn.to/4qMS5W6", icon: Usb },
  { key: "hdmiCable", link: "https://amzn.to/4c3KLBZ", icon: Cable },
  { key: "speakers", link: "https://amzn.to/4b0Jydy", icon: Speaker },
  { key: "bluetooth", link: "https://amzn.to/4aLFcWw", icon: Headphones },
  { key: "desk", link: "https://amzn.to/46eUUbb", icon: Table },
  { key: "laptopMount", link: "https://amzn.to/4rYyiUH", icon: Laptop },
  { key: "massager", link: "https://amzn.to/4tM5mRu", icon: Heart },
] as const

type ProductKey = typeof productKeys[number]["key"]

export function Setup() {
  const { t } = useLanguage()
  const s = t.setup

  return (
    <section id="setup" className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{s.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{s.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productKeys.map(({ key, link, icon: Icon }) => {
            const product = s.products[key as ProductKey]
            return (
              <div
                key={key}
                className="bg-card text-card-foreground rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <Button asChild className="w-full">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {s.viewAmazon}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </a>
                </Button>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">{s.affiliate}</p>
        </div>
      </div>
    </section>
  )
}
