import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { TrustBadges } from "@/components/trust-badges"
import { About } from "@/components/about"
import { ProjectsGallery } from "@/components/projects-gallery"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"
import { Metadata } from "next"

export const metadata: Metadata = {
  // Construction company homepage metadata
  title: "BaleNet Group - Professional Construction & Cleanup Services | Ottawa, Gatineau",
  description: "Professional construction and cleanup services across Ottawa, Gatineau, and surrounding areas. Quality workmanship, reliable results, and exceptional service. Free quotes available 24/7.",
  keywords: [
    "construction cleaning Ottawa",
    "post construction cleanup Gatineau",
    "debris removal Ottawa",
    "construction cleaning Carleton",
    "post construction cleanup Hull",
    "construction cleaning Aylmer",
    "debris removal Orleans",
    "construction cleaning Kanata",
    "post construction cleanup Nepean",
    "construction cleaning Gloucester",
    "debris removal Ottawa South",
    "construction cleaning Barrhaven",
    "post construction cleanup Stittsville",
    "demolition services Ottawa",
    "demolition services Gatineau",
    "disaster recovery cleaning",
    "final cleaning construction",
    "deep cleaning construction",
    "construction waste removal",
    "site cleanup services",
    "BaleNet Group",
    "Vision becomes reality"
  ],
}

export default function HomePage() {
  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BaleNet Group",
    "description": "Vision becomes reality through our three pillars: Clean, Restore, Construct. Leading the future through innovation-first solutions in Ottawa, Gatineau, and surrounding areas.",
    "url": "https://www.balenet.ca",
    "logo": "https://www.balenet.ca/images/balenet-group-logo.png",
    "image": "https://www.balenet.ca/images/construction-site-bg.jpg",
    "telephone": "+1-514-577-8776",
    "email": "info@balenet.ca",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA",
      "addressRegion": "ON",
      "addressLocality": "Ottawa"
    },
    "areaServed": [
      "Ottawa", "Gatineau", "Carleton", "Hull", "Aylmer", "Orleans", 
      "Kanata", "Nepean", "Gloucester", "Ottawa South", "Barrhaven", "Stittsville"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 45.4215,
        "longitude": -75.6972
      },
      "geoRadius": "50000"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "sameAs": [
      "https://www.linkedin.com/company/balenet",
      "https://www.facebook.com/balenetgroup"
    ],
    "department": [
      {
        "@type": "LocalBusiness",
        "name": "Clean Services",
        "description": "Vision becomes reality through pristine, innovation-driven spaces. Professional cleaning services including daily janitorial, deep cleaning, floor care, and post-construction cleanup.",
        "url": "https://www.balenet.ca/clean"
      },
      {
        "@type": "LocalBusiness", 
        "name": "Restore Services",
        "description": "Vision becomes reality through complete, technology-enhanced restoration. Emergency disaster recovery, water damage cleanup, fire restoration, and mold remediation services.",
        "url": "https://www.balenet.ca/restore"
      },
      {
        "@type": "LocalBusiness",
        "name": "Construct Services", 
        "description": "Vision becomes reality through innovative builds and smart solutions. Professional demolition, tenant fit-outs, and renovations with cutting-edge construction methods.",
        "url": "https://www.balenet.ca/construct"
      }
    ]
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas does BaleNet Group serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BaleNet Group serves Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, Stittsville, and surrounding areas in the National Capital Region."
        }
      },
      {
        "@type": "Question",
        "name": "What services does BaleNet Group offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BaleNet Group offers comprehensive three-pillar services: Clean (janitorial, deep cleaning, floor care), Restore (disaster recovery, mold remediation, water damage), and Construct (demolition, fit-outs, renovations)."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get a free quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get a free quote by calling (514) 577-8776, emailing info@balenet.ca, or filling out our online contact form. We provide detailed estimates for all Clean, Restore, and Construct projects."
        }
      },
      {
        "@type": "Question",
        "name": "What are BaleNet Group's operating hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BaleNet Group operates 7 days a week, 24 hours a day. We provide round-the-clock Clean, Restore, and Construct services to accommodate urgent project needs and tight deadlines."
        }
      },
      {
        "@type": "Question",
        "name": "Does BaleNet Group provide quality guarantees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, BaleNet Group provides comprehensive quality guarantees on all services. We ensure every project meets the highest standards with innovation-first approaches and professional expertise across Clean, Restore, and Construct services."
        }
      }
    ]
  }

  return (
    <LanguageProvider initialLanguage="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="min-h-screen">
        <Header />
        <main id="main-content">
          <section id="home">
            <Hero />
          </section>
          <section id="services">
            <Services />
          </section>
          <TrustBadges />
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <ProjectsGallery />
          </section>
          <section id="why-choose">
            <WhyChooseUs />
            <Testimonials />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
