import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Wrench, HardHat, Clock, Users, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Construct Services - Demolition & Renovations | BaleNet Group",
  description: "Vision becomes reality through innovative builds and smart solutions. Professional demolition, tenant fit-outs, renovations, and facility upgrades with cutting-edge construction methods.",
  keywords: [
    "demolition services",
    "tenant fit-outs",
    "renovations",
    "facility upgrades",
    "construction services",
    "building renovation",
    "office fit-outs",
    "compliance updates",
    "punch list closeouts",
    "Ottawa construction",
    "Gatineau renovations"
  ],
  alternates: {
    canonical: "https://www.balenet.ca/construct",
    languages: {
      'en': 'https://www.balenet.ca/construct',
      'fr': 'https://www.balenet.ca/fr/construire',
    },
  },
}

export default function ConstructPage() {
  const constructServices = [
    {
      title: "Demolition & Site Preparation",
      description: "Safe, efficient demolition services with proper waste disposal and site preparation for new construction.",
      features: ["Interior demolition", "Selective removal", "Site clearing", "Waste disposal"]
    },
    {
      title: "Tenant Improvements & Fit-outs",
      description: "Complete tenant improvement projects including office fit-outs, retail spaces, and commercial renovations.",
      features: ["Office design", "Retail fit-outs", "Space planning", "Custom finishes"]
    },
    {
      title: "Renovations & Reconfigurations",
      description: "Professional renovation services for residential and commercial properties with modern design solutions.",
      features: ["Kitchen renovations", "Bathroom remodels", "Office reconfigurations", "Interior redesign"]
    },
  ]

  const whyChoose = [
    {
      icon: <HardHat className="h-6 w-6" />,
      title: "Licensed & Insured",
      description: "Fully licensed contractors with comprehensive insurance coverage for peace of mind."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Quality Craftsmanship",
      description: "Skilled craftsmen with attention to detail and commitment to superior workmanship."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On-Time Delivery",
      description: "Project management expertise ensures timely completion within budget constraints."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Experienced Team",
      description: "Professional team with years of experience in construction and renovation projects."
    }
  ]

  const faqData = [
    {
      question: "Do you provide free estimates for construction projects?",
      answer: "Yes, we provide detailed, free estimates for all construction and renovation projects. Our estimates include materials, labor, and timeline projections."
    },
    {
      question: "Are you licensed and insured for construction work?",
      answer: "Yes, we are fully licensed contractors with comprehensive liability and workers' compensation insurance coverage."
    },
    {
      question: "How long do construction projects typically take?",
      answer: "Project timelines vary based on scope and complexity. We provide detailed timelines during the estimate process and keep you updated throughout the project."
    },
    {
      question: "Do you handle permits and inspections?",
      answer: "Yes, we can assist with permit applications and coordinate inspections with local authorities as part of our construction services."
    },
    {
      question: "What types of construction projects do you handle?",
      answer: "We handle residential and commercial projects including demolitions, renovations, and tenant fit-outs."
    },
    {
      question: "Do you provide warranties on construction work?",
      answer: "Yes, we provide comprehensive warranties on all construction work and materials, with specific terms outlined in our contracts."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-bg-bn-construct/10 to-bg-bn-glacier">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Wrench className="h-8 w-8 text-bn-construct" />
              <Badge className="bg-bn-construct text-white px-4 py-2 text-lg font-semibold">
                Construct Services
              </Badge>
              <Wrench className="h-8 w-8 text-bn-construct" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-bn-steel mb-6 text-balance">
              Vision becomes reality through innovative builds and smart solutions
            </h1>
            <p className="text-xl text-bn-graphite mb-8 text-pretty leading-relaxed">
              Leading the future through innovation-first construction solutions. From demolition to renovations, 
              we build with cutting-edge methods and sustainable practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-bn-construct hover:bg-bn-construct/90 text-white px-8 py-4 text-lg"
                asChild
              >
                <Link href="/en#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-bn-construct text-bn-construct hover:bg-bn-construct hover:text-white px-8 py-4 text-lg"
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
              Our Construct Services
            </h2>
            <p className="text-lg text-bn-graphite max-w-2xl mx-auto">
              Comprehensive construction solutions designed to bring your vision to life with innovative methods and quality craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constructServices.map((service, index) => (
              <Card key={index} className="bg-bn-glacier border-bn-construct overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-bn-steel mb-2">{service.title}</CardTitle>
                  <p className="text-bn-graphite">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-bn-graphite">
                        <CheckCircle className="h-4 w-4 text-bn-construct flex-shrink-0" />
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
              Why Choose Our Construction Services?
            </h2>
            <p className="text-lg text-bn-glacier max-w-2xl mx-auto">
              Innovation-first approach with licensed professionals and quality craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-bn-construct/20 p-4 rounded-full">
                    <div className="text-bn-construct">
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
              Everything you need to know about our construction and renovation services.
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
      <section className="py-20 bg-bn-construct">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Vision?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our innovation-first construction solutions make your vision a reality. 
            Start your project today with a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-bn-construct hover:bg-bn-glacier px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/en#contact">
                Get Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-bn-construct px-8 py-4 text-lg"
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
