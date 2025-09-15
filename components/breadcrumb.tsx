"use client"

import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const { t } = useLanguage()

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.href && { "item": `https://balenet.ca${item.href}` })
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <nav 
        aria-label="Breadcrumb navigation"
        className="flex items-center space-x-2 text-sm text-muted-foreground mb-4"
      >
        <ol 
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
          className="flex items-center space-x-2"
        >
          {/* Home link */}
          <li 
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
            className="flex items-center"
          >
            <Link 
              href="/" 
              itemProp="item"
              className="flex items-center hover:text-primary transition-colors"
              aria-label="Go to home page"
            >
              <Home className="h-4 w-4 mr-1" />
              <span itemProp="name">{t("breadcrumb.home")}</span>
            </Link>
            <meta itemProp="position" content="1" />
            <ChevronRight className="h-4 w-4 mx-2" />
          </li>

          {/* Dynamic breadcrumb items */}
          {items.map((item, index) => (
            <li 
              key={index}
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
              className="flex items-center"
            >
              {item.href ? (
                <Link 
                  href={item.href}
                  itemProp="item"
                  className="hover:text-primary transition-colors"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              ) : (
                <span 
                  itemProp="name"
                  className="text-foreground font-medium"
                  aria-current="page"
                >
                  {item.name}
                </span>
              )}
              <meta itemProp="position" content={index + 2} />
              {index < items.length - 1 && (
                <ChevronRight className="h-4 w-4 mx-2" />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

// Predefined breadcrumb configurations for common pages
export const breadcrumbConfigs = {
  home: [],
  services: [
    { name: "Services", href: "/en#services" }
  ],
  about: [
    { name: "About", href: "/en#about" }
  ],
  contact: [
    { name: "Contact", href: "/en#contact" }
  ],
  quote: [
    { name: "Contact", href: "/en#contact" },
    { name: "Get Quote" }
  ],
  constructionCleaning: [
    { name: "Services", href: "/en#services" },
    { name: "Construction Cleaning" }
  ],
  demolitionServices: [
    { name: "Services", href: "/en#services" },
    { name: "Demolition Services" }
  ],
  debrisRemoval: [
    { name: "Services", href: "/en#services" },
    { name: "Debris Removal" }
  ],
  disasterRecovery: [
    { name: "Services", href: "/en#services" },
    { name: "Disaster Recovery Cleaning" }
  ]
}
