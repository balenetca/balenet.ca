"use client"

import { Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">BALE•NET</span>
            </div>
            <p className="text-muted-foreground mb-4 text-pretty">{t("footer.description")}</p>
            <p className="text-sm text-muted-foreground">© 2024 BALE•NET. {t("footer.rights")}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.links.title")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.services.title")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("services.postConstruction.title")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("services.debrisRemoval.title")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("services.deepCleaning.title")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("services.demolition.title")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.contact.title")}</h4>
            <div className="space-y-3">
              <div>
                <p className="text-muted-foreground font-medium mb-1">{t("contact.info.phone")}</p>
                <a href="tel:+15145778776" className="text-muted-foreground hover:text-primary transition-colors">(514) 577-8776</a>
              </div>
              <div>
                <p className="text-muted-foreground font-medium mb-1">{t("contact.info.email")}</p>
                <a href="mailto:info@balenet.com" className="text-muted-foreground hover:text-primary transition-colors">info@balenet.com</a>
              </div>
              <div>
                <p className="text-muted-foreground font-medium mb-1">{t("contact.info.hours")}</p>
                <p className="text-muted-foreground">{t("contact.info.hoursValue")}</p>
              </div>
              <div>
                <p className="text-muted-foreground font-medium mb-1">{t("contact.info.location")}</p>
                <p className="text-muted-foreground">{t("contact.info.locationValue")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
