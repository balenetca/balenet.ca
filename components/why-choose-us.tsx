"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Sparkles, DollarSign } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function WhyChooseUs() {
  const { t } = useLanguage()
  
  const features = [
    {
      icon: Users,
      title: t("whyChoose.contractor.title"),
      description: t("whyChoose.contractor.description"),
    },
    {
      icon: Award,
      title: t("whyChoose.team.title"),
      description: t("whyChoose.team.description"),
    },
    {
      icon: Clock,
      title: t("whyChoose.budget.title"),
      description: t("whyChoose.budget.description"),
    },
    {
      icon: Sparkles,
      title: t("whyChoose.quality.title"),
      description: t("whyChoose.quality.description"),
    },
    {
      icon: DollarSign,
      title: t("whyChoose.pricing.title"),
      description: t("whyChoose.pricing.description"),
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("whyChoose.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("whyChoose.subtitle")}
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
