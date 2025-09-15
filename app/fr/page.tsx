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
  title: "BALE•NET - Services de Nettoyage de Construction | Ottawa, Gatineau",
  description: "Services professionnels de nettoyage de construction et d'enlèvement de débris à Ottawa, Gatineau, Carleton, Hull, Aylmer, Orléans, Kanata, Nepean, Gloucester, Ottawa Sud, Barrhaven et Stittsville. Devis gratuits disponibles 24h/24.",
  alternates: {
    canonical: "/fr",
    languages: {
      "en-CA": "/en",
      "x-default": "/",
    },
  },
}

export default function FrenchPage() {
  return (
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
  )
}
