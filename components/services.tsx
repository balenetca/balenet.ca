"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Hammer, Sparkles, Plus, Shield, Wrench } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("services.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t("services.subtitle")}</p>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative">
              <Image
                src="/images/before-after.jpg"
                alt="Before and after construction cleaning comparison"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                {t("services.beforeAfter")}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/team-cleaning.jpg"
                alt="BALE•NET professional cleaning team at work"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                {t("services.professionalTeam")}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            <Card className="bg-card border-border overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/debris-containers.jpg"
                  alt="BALE•NET branded roll-off dumpster at residential construction site"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Hammer className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{t("services.debrisRemoval.title")}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4">{t("services.debrisRemoval.description")}</p>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.debrisRemoval.bullet1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.debrisRemoval.bullet2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.debrisRemoval.bullet3")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.debrisRemoval.bullet4")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.debrisRemoval.bullet5")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/floor-cleaning.jpg"
                  alt="Professional floor cleaning service"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{t("services.postConstruction.title")}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4">{t("services.postConstruction.description")}</p>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.postConstruction.bullet1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.postConstruction.bullet2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.postConstruction.bullet3")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.postConstruction.bullet4")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.postConstruction.bullet5")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/worker-cleaning.jpg"
                  alt="Deep cleaning and debris removal"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Plus className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{t("services.deepCleaning.title")}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4">{t("services.deepCleaning.description")}</p>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.deepCleaning.bullet1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.deepCleaning.bullet2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.deepCleaning.bullet3")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.deepCleaning.bullet4")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.deepCleaning.bullet5")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/disaster-recovery-cleaning-emergency-response-team.jpg"
                  alt="Disaster recovery cleaning services"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{t("services.disasterRecovery.title")}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4">{t("services.disasterRecovery.description")}</p>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.disasterRecovery.bullet1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.disasterRecovery.bullet2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.disasterRecovery.bullet3")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.disasterRecovery.bullet4")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.disasterRecovery.bullet5")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/demolition-service.jpg"
                  alt="Professional demolition services"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Wrench className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{t("services.demolition.title")}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4">{t("services.demolition.description")}</p>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.demolition.bullet1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.demolition.bullet2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.demolition.bullet3")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.demolition.bullet4")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {t("services.demolition.bullet5")}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
