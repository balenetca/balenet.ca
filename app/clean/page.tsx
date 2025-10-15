import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Shield, Clock, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Clean Services - Professional Cleaning & Janitorial | BaleNet Group Inc",
  description: "Vision becomes reality through pristine, innovation-driven spaces. Professional cleaning services including daily janitorial, deep cleaning, floor care, and post-construction cleanup.",
  keywords: [
    "professional cleaning services",
    "janitorial services",
    "deep cleaning",
    "floor care",
    "post construction cleaning",
    "window cleaning",
    "disinfection services",
    "high dusting",
    "Ottawa cleaning services",
    "Gatineau cleaning"
  ],
}

export default function CleanPage() {
  const cleanServices = [
    {
      title: "Daily & Nightly Janitorial",
      description: "Comprehensive daily cleaning services to keep your spaces pristine and professional.",
      features: ["Office cleaning", "Restroom sanitization", "Trash removal", "Surface disinfection"]
    },
    {
      title: "Deep Cleaning & Sanitation",
      description: "Thorough deep cleaning services for move-ins, seasonal cleaning, or special events.",
      features: ["Complete sanitization", "HVAC cleaning", "Detail work", "Odor elimination"]
    },
    {
      title: "Floor Care & Maintenance",
      description: "Professional floor care including stripping, waxing, polishing, and carpet cleaning.",
      features: ["Hard floor restoration", "Carpet cleaning", "Tile & grout cleaning", "Protective coatings"]
    },
    {
      title: "Post-Construction Cleanup",
      description: "Complete cleanup after construction projects, removing dust, debris, and preparing spaces for occupancy.",
      features: ["Dust removal", "Construction debris cleanup", "Final detailing", "Quality inspection"]
    },
    {
      title: "Window & Glass Cleaning",
      description: "Professional window cleaning services for residential and commercial properties.",
      features: ["Interior & exterior windows", "High-rise cleaning", "Glass restoration", "Screen cleaning"]
    },
    {
      title: "Specialty Cleaning",
      description: "Specialized cleaning services including high-dusting, pressure washing, and disinfection.",
      features: ["High-dusting services", "Pressure washing", "Disinfection protocols", "Emergency cleaning"]
    }
  ]

  const whyChoose = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Innovation First",
      description: "Cutting-edge cleaning technology and sustainable practices for superior results."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee with detailed quality inspections on every project."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "24/7 availability to accommodate your schedule and urgent cleaning needs."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Trained Professionals",
      description: "Background-checked, insured staff with ongoing training in latest cleaning techniques."
    }
  ]

  const faqData = [
    {
      question: "What cleaning products do you use?",
      answer: "We use eco-friendly, professional-grade cleaning products that are safe for people, pets, and the environment while delivering superior cleaning results."
    },
    {
      question: "Do you provide cleaning supplies and equipment?",
      answer: "Yes, we bring all necessary cleaning supplies, equipment, and materials. We use professional-grade tools and products for optimal results."
    },
    {
      question: "How do you ensure quality on cleaning projects?",
      answer: "Every cleaning project includes detailed quality inspections, client walkthroughs, and follow-up services to ensure complete satisfaction."
    },
    {
      question: "Can you work around my business hours?",
      answer: "Absolutely. We offer flexible scheduling including nights, weekends, and holidays to minimize disruption to your business operations."
    },
    {
      question: "What areas do you serve for cleaning services?",
      answer: "We serve Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, Stittsville, and surrounding areas."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-bg-bn-clean/10 to-bg-bn-glacier">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-8 w-8 text-bn-clean" />
              <Badge className="bg-bn-clean text-white px-4 py-2 text-lg font-semibold">
                Clean Services
              </Badge>
              <Sparkles className="h-8 w-8 text-bn-clean" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-bn-steel mb-6 text-balance">
              Vision becomes reality through pristine, innovation-driven spaces
            </h1>
            <p className="text-xl text-bn-graphite mb-8 text-pretty leading-relaxed">
              Leading the future through innovation-first cleaning solutions. From daily janitorial to deep cleaning, 
              we transform spaces with cutting-edge technology and sustainable practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-bn-clean hover:bg-bn-clean/90 text-white px-8 py-4 text-lg"
                asChild
              >
                <Link href="/en#contact">
                  Book a Cleaning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-bn-clean text-bn-clean hover:bg-bn-clean hover:text-white px-8 py-4 text-lg"
                asChild
              >
                <a href="tel:+15145778776">
                  Call Now: (514) 577-8776
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bn-steel mb-4">
              Our Clean Services
            </h2>
            <p className="text-lg text-bn-graphite max-w-2xl mx-auto">
              Comprehensive cleaning solutions designed to exceed expectations and create pristine, healthy environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cleanServices.map((service, index) => (
              <Card key={index} className="bg-bn-glacier border-bn-clean overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-bn-steel mb-2">{service.title}</CardTitle>
                  <p className="text-bn-graphite">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-bn-graphite">
                        <CheckCircle className="h-4 w-4 text-bn-clean flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-bn-steel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bn-white mb-4">
              Why Choose Our Clean Services?
            </h2>
            <p className="text-lg text-bn-glacier max-w-2xl mx-auto">
              Innovation-first approach with cutting-edge technology and sustainable practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-bn-clean/20 p-4 rounded-full">
                    <div className="text-bn-clean">
                      {item.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-bn-white mb-3">{item.title}</h3>
                <p className="text-bn-glacier">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bn-steel mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-bn-graphite max-w-2xl mx-auto">
              Everything you need to know about our professional cleaning services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-bn-steel">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-bn-graphite">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bn-clean">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our innovation-first cleaning solutions make your vision a reality. 
            Get a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-bn-clean hover:bg-bn-glacier px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/en#contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-bn-clean px-8 py-4 text-lg"
              asChild
            >
              <a href="tel:+15145778776">
                Call (514) 577-8776
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
