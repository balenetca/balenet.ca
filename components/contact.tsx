"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-foreground mb-6">{t("contact.form.title")}</h3>
            <Card className="bg-card border-border flex-1">
              <CardContent className="p-6 flex flex-col h-full">
                <form className="space-y-4 flex-1 flex flex-col">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder={t("contact.form.name")} className="bg-input border-border" />
                    <Input placeholder={t("contact.form.phone")} className="bg-input border-border" />
                  </div>
                  <Input placeholder={t("contact.form.email")} className="bg-input border-border" />
                  <Textarea placeholder={t("contact.form.message")} className="bg-input border-border flex-1 min-h-[120px]" />
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-auto">
                    {t("contact.form.submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-foreground mb-6">{t("contact.info.title")}</h3>
            <div className="space-y-4 flex-1">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Phone className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">{t("contact.info.phone")}</h4>
                      <p className="text-muted-foreground">(514) 577-8776</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Mail className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">{t("contact.info.email")}</h4>
                      <p className="text-muted-foreground">info@balenet.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <MapPin className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">{t("contact.info.hours")}</h4>
                      <p className="text-muted-foreground">{t("contact.info.hoursValue")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
