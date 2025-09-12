import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas does BALE•NET serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BALE•NET serves Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, Stittsville, and surrounding areas in the National Capital Region."
        }
      },
      {
        "@type": "Question",
        "name": "What services does BALE•NET offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BALE•NET offers comprehensive construction cleaning services including debris removal, post-construction cleanup, deep cleaning, final cleaning, demolition services, and disaster recovery cleaning."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get a free quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get a free quote by calling (514) 577-8776, emailing info@balenet.com, or filling out our online contact form. We provide detailed estimates for all construction cleaning projects."
        }
      },
      {
        "@type": "Question",
        "name": "What are BALE•NET's operating hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BALE•NET operates Monday through Friday from 7:00 AM to 6:00 PM. Emergency services may be available outside regular hours for urgent construction cleaning needs."
        }
      },
      {
        "@type": "Question",
        "name": "Does BALE•NET provide quality guarantees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, BALE•NET provides comprehensive quality guarantees on all services. We ensure every construction site is cleaned to the highest standards with attention to detail and professional expertise."
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
