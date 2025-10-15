import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { TrustBadges } from "@/components/trust-badges"
import { About } from "@/components/about"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "BaleNet Group - Where Vision Becomes Reality | Clean, Restore, Construct",
  description: "BaleNet Group delivers Clean, Restore, and Construct services across Ottawa, Gatineau, and surrounding areas. Vision becomes reality through innovation-first solutions. Free quotes available 24/7.",
  alternates: {
    canonical: "https://balenet.ca/en",
    languages: {
      "fr-CA": "https://balenet.ca/fr",
      "x-default": "https://balenet.ca",
    },
  },
}

export default function EnglishPage() {
  return (
    <LanguageProvider initialLanguage="en">
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
