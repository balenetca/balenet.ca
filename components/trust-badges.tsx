"use client"

import { Shield, Award, Clock, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function TrustBadges() {
  const { t } = useLanguage()

  const badges = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "WSIB Insured",
      description: "Fully insured and bonded for your protection",
      color: "text-bn-success"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "CSA/WHMIS Certified",
      description: "Certified safety standards compliance",
      color: "text-bn-info"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Response",
      description: "Round-the-clock emergency services",
      color: "text-bn-amber"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Innovation First",
      description: "Future-ready solutions and technology",
      color: "text-bn-gold"
    }
  ]

  return (
    <section className="py-12 bg-bn-glacier">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-bn-steel mb-2">Trusted & Certified</h3>
          <p className="text-bn-graphite">Vision becomes reality through certified expertise and innovation-first solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="bg-bn-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className={`${badge.color} mb-4 flex justify-center`}>
                {badge.icon}
              </div>
              <h4 className="text-lg font-semibold text-bn-steel mb-2">{badge.title}</h4>
              <p className="text-sm text-bn-graphite">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
