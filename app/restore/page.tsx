import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, AlertTriangle, Clock, Users, CheckCircle, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Restore Services - Disaster Recovery & Remediation | BaleNet Group Inc",
  description: "Vision becomes reality through complete, technology-enhanced restoration. Emergency disaster recovery, water damage cleanup, fire restoration, and mold remediation services.",
  keywords: [
    "disaster recovery",
    "water damage cleanup",
    "fire restoration",
    "mold remediation",
    "emergency cleanup",
    "flood cleanup",
    "smoke damage restoration",
    "odor removal",
    "insurance restoration",
    "Ottawa disaster recovery",
    "Gatineau emergency cleanup"
  ],
}

export default function RestorePage() {
  const restoreServices = [
    {
      title: "Water & Flood Damage Cleanup",
      description: "Rapid response water damage restoration with advanced drying equipment and mold prevention.",
      features: ["24/7 emergency response", "Water extraction", "Structural drying", "Mold prevention"]
    },
    {
      title: "Fire & Smoke Damage Restoration",
      description: "Complete fire damage restoration including smoke odor removal and structural repairs.",
      features: ["Smoke damage cleanup", "Odor elimination", "Soot removal", "Structural restoration"]
    },
    {
      title: "Mold Assessment & Remediation",
      description: "Professional mold inspection, testing, and safe remediation with containment protocols.",
      features: ["Mold inspection", "Air quality testing", "Safe removal", "Prevention strategies"]
    },
    {
      title: "Odor Removal & Decontamination",
      description: "Advanced odor elimination using ozone treatment, thermal fogging, and air purification.",
      features: ["Ozone treatment", "Thermal fogging", "Air purification", "Odor neutralization"]
    },
    {
      title: "Drywall & Paint Restoration",
      description: "Complete drywall repair, patching, and professional painting services for restored spaces.",
      features: ["Drywall repair", "Texturing", "Priming", "Professional painting"]
    },
    {
      title: "Insurance Coordination",
      description: "Expert assistance with insurance claims, documentation, and scope development.",
      features: ["Claim documentation", "Scope development", "Insurance liaison", "Progress reporting"]
    }
  ]

  const emergencyFeatures = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Emergency Response",
      description: "Round-the-clock availability for immediate disaster response and damage mitigation."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Certified Technicians",
      description: "IICRC certified technicians with specialized training in disaster restoration."
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Rapid Response",
      description: "Quick response times to minimize damage and prevent secondary issues."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Insurance Experts",
      description: "Experienced team to help navigate insurance claims and maximize coverage."
    }
  ]

  const faqData = [
    {
      question: "How quickly can you respond to water damage emergencies?",
      answer: "We provide 24/7 emergency response and typically arrive within 2 hours of your call. Rapid response is crucial to prevent mold growth and structural damage."
    },
    {
      question: "Do you work with insurance companies?",
      answer: "Yes, we work directly with insurance companies and can help document damage, develop restoration scopes, and coordinate the claims process for you."
    },
    {
      question: "What certifications do your technicians have?",
      answer: "Our technicians are IICRC certified in water damage restoration, fire damage restoration, and mold remediation, ensuring professional, safe restoration work."
    },
    {
      question: "Can you prevent mold after water damage?",
      answer: "Yes, we use advanced drying equipment and antimicrobial treatments to prevent mold growth. Rapid water extraction and structural drying are key to mold prevention."
    },
    {
      question: "How long does fire damage restoration take?",
      answer: "Timeline depends on damage severity, but we typically complete fire restoration in 2-4 weeks. We provide detailed timelines and regular progress updates."
    },
    {
      question: "What areas do you serve for emergency restoration?",
      answer: "We serve Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, Stittsville, and surrounding areas with 24/7 emergency response."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-bg-bn-restore/10 to-bg-bn-glacier">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-bn-restore" />
              <Badge className="bg-bn-restore text-white px-4 py-2 text-lg font-semibold">
                Restore Services
              </Badge>
              <Shield className="h-8 w-8 text-bn-restore" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-bn-steel mb-6 text-balance">
              Vision becomes reality through complete, technology-enhanced restoration
            </h1>
            <p className="text-xl text-bn-graphite mb-8 text-pretty leading-relaxed">
              Leading the future through innovation-first restoration solutions. From disaster recovery to mold remediation, 
              we restore spaces with advanced technology and rapid response protocols.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-bn-restore hover:bg-bn-restore/90 text-white px-8 py-4 text-lg"
                asChild
              >
                <Link href="/en#contact">
                  Request Emergency Help
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-bn-restore text-bn-restore hover:bg-bn-restore hover:text-white px-8 py-4 text-lg flex items-center gap-2"
                asChild
              >
                <a href="tel:+15145778776">
                  <Phone className="h-4 w-4" />
                  Emergency: (514) 577-8776
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-bn-restore py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-lg font-semibold">
            🚨 24/7 Emergency Response Available | Call (514) 577-8776 for Immediate Assistance
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bn-steel mb-4">
              Our Restore Services
            </h2>
            <p className="text-lg text-bn-graphite max-w-2xl mx-auto">
              Complete restoration solutions using advanced technology to bring your space back to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restoreServices.map((service, index) => (
              <Card key={index} className="bg-bn-glacier border-bn-restore overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-bn-steel mb-2">{service.title}</CardTitle>
                  <p className="text-bn-graphite">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-bn-graphite">
                        <CheckCircle className="h-4 w-4 text-bn-restore flex-shrink-0" />
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

      {/* Emergency Features */}
      <section className="py-20 bg-bn-steel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bn-white mb-4">
              Why Choose Our Emergency Restoration?
            </h2>
            <p className="text-lg text-bn-glacier max-w-2xl mx-auto">
              Technology-enhanced restoration with rapid response and certified expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyFeatures.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-bn-restore/20 p-4 rounded-full">
                    <div className="text-bn-restore">
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
              Everything you need to know about our emergency restoration services.
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

      {/* Emergency CTA Section */}
      <section className="py-20 bg-bn-restore">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Emergency Restoration?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait - rapid response is crucial for damage prevention. 
            Call now for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-bn-restore hover:bg-bn-glacier px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/en#contact">
                Get Emergency Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-bn-restore px-8 py-4 text-lg flex items-center gap-2"
              asChild
            >
              <a href="tel:+15145778776">
                <Phone className="h-4 w-4" />
                Call Emergency Line
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
