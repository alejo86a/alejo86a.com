"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"
import Image from "next/image"

const productKeys = [
  {
    key: "keyboard",
    link: "https://amzn.to/4arQa4z",
    img: "https://m.media-amazon.com/images/I/619I8FQsDoL._AC_SX679_.jpg",
  },
  {
    key: "camera",
    link: "https://amzn.to/3MHM0fD",
    img: "https://m.media-amazon.com/images/I/61lJPqu-DvL._AC_SX679_.jpg",
  },
  {
    key: "wrist",
    link: "https://amzn.to/4qKXRrc",
    img: "https://m.media-amazon.com/images/I/41LCXFYP--L._AC_SX679_.jpg",
  },
  {
    key: "monitor",
    link: "https://amzn.to/40hVyBd",
    img: "https://m.media-amazon.com/images/I/71o+Z89ZUuL._AC_SX679_.jpg",
  },
  {
    key: "switch",
    link: "https://amzn.to/4kO6IY7",
    img: "https://m.media-amazon.com/images/I/71ro3LsLkqL._AC_SX679_.jpg",
  },
  {
    key: "hdmiSwitch",
    link: "https://amzn.to/4aqA3Ei",
    img: "https://m.media-amazon.com/images/I/61uTEK9Kg1L._AC_SX679_.jpg",
  },
  {
    key: "usbc",
    link: "https://amzn.to/4qMS5W6",
    img: "https://m.media-amazon.com/images/I/614tYFlPWJL._AC_SX679_.jpg",
  },
  {
    key: "hdmiCable",
    link: "https://amzn.to/4c3KLBZ",
    img: "https://m.media-amazon.com/images/I/81fuJJLI2eL._AC_SX679_.jpg",
  },
  {
    key: "speakers",
    link: "https://amzn.to/4b0Jydy",
    img: "https://m.media-amazon.com/images/I/81yChD5-3+L._AC_SX679_.jpg",
  },
  {
    key: "bluetooth",
    link: "https://amzn.to/4aLFcWw",
    img: "https://m.media-amazon.com/images/I/61Yklg9qHiL._AC_SX679_.jpg",
  },
  {
    key: "desk",
    link: "https://amzn.to/46eUUbb",
    img: "https://m.media-amazon.com/images/I/61a3YKO6d4L._AC_SX679_.jpg",
  },
  {
    key: "laptopMount",
    link: "https://amzn.to/4rYyiUH",
    img: "https://m.media-amazon.com/images/I/71KZXK2E3fL._AC_SX679_.jpg",
  },
  {
    key: "massager",
    link: "https://amzn.to/4tM5mRu",
    img: "https://m.media-amazon.com/images/I/81AyegDR7hL._AC_SX679_.jpg",
  },
] as const

type ProductKey = (typeof productKeys)[number]["key"]

export function Setup() {
  const { t } = useLanguage()
  const ref = useScrollAnimation()
  const s = t.setup

  return (
    <section id="setup" className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div ref={ref} className="container mx-auto max-w-6xl animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{s.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{s.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productKeys.map(({ key, link, img }) => {
            const product = s.products[key as ProductKey]
            return (
              <a
                key={key}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card text-card-foreground rounded-xl border shadow-sm overflow-hidden hover:shadow-md hover:border-primary/50 transition-all duration-200"
              >
                {/* Product image */}
                <div className="w-full h-48 bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src={img}
                    alt={product.name}
                    width={240}
                    height={192}
                    className="object-contain w-full h-full p-4 group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {s.viewAmazon}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </span>
                </div>
              </a>
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
