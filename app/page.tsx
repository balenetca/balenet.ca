import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "BaleNet Group Inc - Where Vision Becomes Reality | Clean, Restore, Construct | Ottawa, Gatineau",
  description: "Vision becomes reality through our three pillars: Clean, Restore, Construct. Leading the future through innovation-first solutions in Ottawa, Gatineau, and surrounding areas.",
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
    "BALENET",
    "BALE•NET"
  ],
}

export default function HomePage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas does BaleNet Group Inc serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BaleNet Group Inc serves Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, Stittsville, and surrounding areas in the National Capital Region."
        }
      },
      {
        "@type": "Question",
        "name": "What services does BaleNet Group Inc offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BaleNet Group Inc offers comprehensive three-pillar services: Clean (janitorial, deep cleaning, floor care), Restore (disaster recovery, mold remediation, water damage), and Construct (demolition, fit-outs, renovations)."
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
        "name": "What are BaleNet Group Inc's operating hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BaleNet Group Inc operates 7 days a week, 24 hours a day. We provide round-the-clock Clean, Restore, and Construct services to accommodate urgent project needs and tight deadlines."
        }
      },
      {
        "@type": "Question",
        "name": "Does BaleNet Group Inc provide quality guarantees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, BaleNet Group Inc provides comprehensive quality guarantees on all services. We ensure every project meets the highest standards with innovation-first approaches and professional expertise across Clean, Restore, and Construct services."
        }
      }
    ]
  }

  return (
    <>
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
          <section id="about">
            <About />
            <WhyChooseUs />
            <Testimonials />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
