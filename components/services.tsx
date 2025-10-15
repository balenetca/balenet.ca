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
          <h2 className="text-3xl md:text-4xl font-bold text-bn-steel mb-4 text-balance">{t("services.title")}</h2>
          <p className="text-lg text-bn-graphite max-w-2xl mx-auto text-pretty">{t("services.subtitle")}</p>
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
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl">
            {/* Clean Pillar */}
            <Card className="bg-bn-glacier border-bn-clean overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-bn-clean/10">
                <Image
                  src="/images/floor-cleaning.jpg"
                  alt="Clean services - professional floor cleaning"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-bn-clean/20"></div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-8 w-8 text-bn-clean" />
                  <CardTitle className="text-xl text-bn-steel">{t("services.clean.title")}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-bn-graphite mb-4">{t("services.clean.description")}</p>
                <ul className="space-y-3 text-bn-graphite">
                  <li className="flex items-start gap-2">
                    <span className="text-bn-clean mt-1">•</span>
                    {t("services.clean.bullet1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bn-clean mt-1">•</span>
                    {t("services.clean.bullet2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bn-clean mt-1">•</span>
                    {t("services.clean.bullet3")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bn-clean mt-1">•</span>
                    {t("services.clean.bullet4")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bn-clean mt-1">•</span>
                    {t("services.clean.bullet5")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Restore Pillar */}
            <Card className="bg-bn-glacier border-bn-restore overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-bn-restore/10">
                <Image
                  src="/images/disaster-recovery-cleaning-emergency-response-team.jpg"
                  alt="Restore services - disaster recovery cleaning"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-bn-restore/20"></div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-8 w-8 text-bn-restore" />
                  <CardTitle className="text-xl text-bn-steel">{t("services.restore.title")}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-bn-graphite mb-4">{t("services.restore.description")}</p>
                <ul className="space-y-3 text-bn-graphite">
                  <li className="flex items-start gap-2">
                    <span className="text-bn-restore mt-1">•</span>
                    {t("services.restore.bullet1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bn-restore mt-1">•</span>
                    {t("services.restore.bullet2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bn-restore mt-1">•</span>
                    {t("services.restore.bullet3")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bn-restore mt-1">•</span>
                    {t("services.restore.bullet4")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bn-restore mt-1">•</span>
                    {t("services.restore.bullet5")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Construct Pillar */}
            <Card className="bg-bn-glacier border-bn-construct overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-bn-construct/10">
                <Image
                  src="/images/demolition-service.jpg"
                  alt="Construct services - professional demolition and construction"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-bn-construct/20"></div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Wrench className="h-8 w-8 text-bn-construct" />
                  <CardTitle className="text-xl text-bn-steel">{t("services.construct.title")}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-bn-graphite mb-4">{t("services.construct.description")}</p>
                <ul className="space-y-3 text-bn-graphite">
                  <li className="flex items-start gap-2">
                    <span className="text-bn-construct mt-1">•</span>
                    {t("services.construct.bullet1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bn-construct mt-1">•</span>
                    {t("services.construct.bullet2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bn-construct mt-1">•</span>
                    {t("services.construct.bullet3")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bn-construct mt-1">•</span>
                    {t("services.construct.bullet4")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bn-construct mt-1">•</span>
                    {t("services.construct.bullet5")}
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
