"use client"
// Porto-style company/about section
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, CheckCircle, TrendingUp, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function About() {
  const { t } = useLanguage()

  const stats = [
    { number: "15+", label: "Years Experience", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "500+", label: "Projects Completed", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "100+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "24/7", label: "Emergency Service", icon: <Clock className="h-6 w-6" /> }
  ]

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-bn-primary" />,
      title: "Quality & Safety",
      description: "We maintain the highest standards of quality and safety in all our projects, ensuring compliance with industry regulations."
    },
    {
      icon: <Users className="h-8 w-8 text-bn-blue" />,
      title: "Professional Team",
      description: "Our experienced and certified professionals bring expertise and dedication to every project we undertake."
    },
    {
      icon: <Award className="h-8 w-8 text-bn-orange" />,
      title: "Proven Results",
      description: "With over 15 years of experience, we have a track record of delivering successful projects on time and within budget."
    }
  ]

  return (
    <section id="about" className="py-20 bg-bn-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bn-dark mb-4">
            About <span className="text-bn-primary">BaleNet Group</span>
          </h2>
          <p className="text-lg text-bn-gray max-w-3xl mx-auto">
            Founded with a commitment to excellence, BaleNet Group has been providing professional 
            construction and cleanup services across Ottawa, Gatineau, and surrounding areas for over 15 years.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-bn-dark mb-6">Who We Are</h3>
            <div className="space-y-4 text-bn-gray">
              <p>
                BaleNet Group is more than a service provider — we are a partner in the life cycle of your property and assets. 
                With expertise spanning Clean, Restore, and Construct services, we help our clients build, manage, and sustain their investments.
              </p>
              <p>
                Our mission is to be Canada's go-to partner for end-to-end asset services, ensuring every build, facility, 
                and property runs smoothly, sustainably, and profitably. Where Vision Becomes Reality - We lead the future 
                by turning innovative ideas into tangible results.
              </p>
              <p>
                We pride ourselves on delivering quality workmanship, exceptional customer service, and innovative solutions 
                that meet the unique needs of each client. Our team of professionals is dedicated to exceeding expectations 
                and building lasting relationships.
              </p>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about/professional-team-portrait.jpg"
              alt="BaleNet Group professional construction and cleanup team"
              width={600}
              height={400}
              className="w-full h-96 object-cover"
            />
              <div className="absolute inset-0 bg-bn-primary/20"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-bn-white rounded-lg shadow-xl p-6 max-w-xs">
              <div className="text-center">
                <div className="text-3xl font-bold text-bn-primary mb-2">15+</div>
                <div className="text-sm text-bn-gray">Years of Excellence</div>
                <div className="text-xs text-bn-gray mt-1">Serving the community since 2009</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bn-primary/10 rounded-full mb-4">
                <div className="text-bn-primary">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-bn-dark mb-2">{stat.number}</div>
              <div className="text-bn-gray">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-bn-light border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-bn-white rounded-full mb-6 shadow-md">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-bn-dark mb-4">{value.title}</h4>
                <p className="text-bn-gray">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}