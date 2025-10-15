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
  title: "BaleNet Group - Où la Vision Devient Réalité | Nettoyer, Restaurer, Construire",
  description: "BaleNet Group offre des services Nettoyer, Restaurer et Construire à travers Ottawa, Gatineau et les régions environnantes. La vision devient réalité grâce à des solutions axées sur l'innovation. Devis gratuits disponibles 24h/24.",
  alternates: {
    canonical: "https://balenet.ca/fr",
    languages: {
      "en-CA": "https://balenet.ca/en",
      "x-default": "https://balenet.ca",
    },
  },
}

export default function FrenchPage() {
  return (
    <LanguageProvider initialLanguage="fr">
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
