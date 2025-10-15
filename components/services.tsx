"use client"
// Porto-style construction services section
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Shield, Wrench, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Sparkles className="h-8 w-8 text-bn-primary" />,
      title: "Clean Services",
      description: "Professional cleaning services including daily janitorial, deep cleaning, floor care, and post-construction cleanup.",
      image: "/images/floor-cleaning.jpg",
      features: [
        "Daily & nightly janitorial services",
        "Deep cleaning & sanitization", 
        "Floor care & carpet maintenance",
        "Post-construction cleanup",
        "Window cleaning & high dusting"
      ],
      color: "border-l-bn-primary"
    },
    {
      icon: <Shield className="h-8 w-8 text-bn-blue" />,
      title: "Restore Services", 
      description: "Emergency disaster recovery, water damage cleanup, fire restoration, and mold remediation services.",
      image: "/images/disaster-recovery-cleaning-emergency-response-team.jpg",
      features: [
        "Water & flood damage cleanup",
        "Fire & smoke damage restoration",
        "Mold remediation & prevention",
        "Odor control & air purification",
        "Insurance scope & documentation"
      ],
      color: "border-l-bn-blue"
    },
    {
      icon: <Wrench className="h-8 w-8 text-bn-orange" />,
      title: "Construct Services",
      description: "Professional demolition, tenant fit-outs, and renovations with cutting-edge construction methods.",
      image: "/images/demolition-service.jpg", 
      features: [
        "Demolition & site preparation",
        "Tenant fit-outs & renovations",
        "Small builds & renovations",
        "Custom finishes & design",
        "Project management & coordination"
      ],
      color: "border-l-bn-orange"
    }
  ]

  return (
    <section id="services" className="py-20 bg-bn-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bn-dark mb-4">
            Our <span className="text-bn-primary">Services</span>
          </h2>
          <p className="text-lg text-bn-gray max-w-3xl mx-auto">
            We provide comprehensive construction and cleanup services to meet all your project needs. 
            From initial cleanup to final construction, we deliver quality results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-bn-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={service.image}
                  alt={`${service.title} services`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-bn-dark/40"></div>
                <div className="absolute top-4 left-4">
                  {service.icon}
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-bn-dark">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-bn-gray mb-6">{service.description}</p>
                
                <div className={`border-l-4 pl-4 ${service.color}`}>
                  <h4 className="font-semibold text-bn-dark mb-3">What We Offer:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-bn-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-bn-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-bn-primary rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-bn-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-bn-light mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We're here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-bn-orange hover:bg-bn-orange/90 text-bn-white font-semibold px-8 py-3"
              asChild
            >
              <a href="#contact">Get Free Quote</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-bn-white text-bn-white hover:bg-bn-white hover:text-bn-primary font-semibold px-8 py-3"
              asChild
            >
              <a href="tel:+15145778776">Call (514) 577-8776</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}