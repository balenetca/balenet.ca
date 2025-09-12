"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("about.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">{t("about.description")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-background border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">{t("about.mission.title")}</h3>
              <p className="text-muted-foreground text-pretty">{t("about.mission")}</p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">{t("about.vision.title")}</h3>
              <p className="text-muted-foreground text-pretty">
                {t("about.vision.description")}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("about.values.title")}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">{t("about.values.professionalism.title")}</span>
                    <p className="text-sm text-muted-foreground">{t("about.values.professionalism.description")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">{t("about.values.safety.title")}</span>
                    <p className="text-sm text-muted-foreground">{t("about.values.safety.description")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">{t("about.values.reliability.title")}</span>
                    <p className="text-sm text-muted-foreground">{t("about.values.reliability.description")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">{t("about.values.detail.title")}</span>
                    <p className="text-sm text-muted-foreground">{t("about.values.detail.description")}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
