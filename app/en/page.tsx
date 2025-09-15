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
  title: "BALE•NET - Construction Cleaning Services | Ottawa, Gatineau",
  description: "Professional construction cleaning and debris removal services in Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, and Stittsville. Free quotes available 24/7.",
  alternates: {
    canonical: "/en",
    languages: {
      "fr-CA": "/fr",
      "x-default": "/",
    },
  },
}

export default function EnglishPage() {
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
