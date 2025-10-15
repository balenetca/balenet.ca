"use client"

import { Sparkles, Phone, Mail, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    // Updated footer component
    <footer className="bg-bn-steel border-t border-bn-graphite py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-bn-gold" />
              <span className="text-xl font-bold text-bn-white">BaleNet Group Inc</span>
            </div>
            <p className="text-bn-glacier mb-4 text-pretty">{t("footer.description")}</p>
            <p className="text-sm text-bn-glacier">© 2024 BaleNet Group Inc. {t("footer.rights")}</p>
          </div>

          <div>
            <h4 className="font-semibold text-bn-white mb-4">{t("footer.links.title")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/en#home" className="text-bn-glacier hover:text-bn-gold transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="/clean" className="text-bn-glacier hover:text-bn-clean transition-colors">
                  Clean
                </a>
              </li>
              <li>
                <a href="/restore" className="text-bn-glacier hover:text-bn-restore transition-colors">
                  Restore
                </a>
              </li>
              <li>
                <a href="/construct" className="text-bn-glacier hover:text-bn-construct transition-colors">
                  Construct
                </a>
              </li>
              <li>
                <a href="/en#about" className="text-bn-glacier hover:text-bn-gold transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="/en#contact" className="text-bn-glacier hover:text-bn-construct transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-bn-white mb-4">{t("footer.services.title")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/clean" className="text-bn-glacier hover:text-bn-clean transition-colors">
                  {t("services.clean.title")}
                </a>
              </li>
              <li>
                <a href="/restore" className="text-bn-glacier hover:text-bn-restore transition-colors">
                  {t("services.restore.title")}
                </a>
              </li>
              <li>
                <a href="/construct" className="text-bn-glacier hover:text-bn-construct transition-colors">
                  {t("services.construct.title")}
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-bn-glacier hover:text-bn-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-bn-glacier hover:text-bn-gold transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-bn-white mb-4">{t("footer.contact.title")}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-bn-gold" />
                <a href="tel:+15145778776" className="text-bn-glacier hover:text-bn-gold transition-colors">(514) 577-8776</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-bn-gold" />
                <a href="mailto:info@balenet.ca" className="text-bn-glacier hover:text-bn-gold transition-colors">info@balenet.ca</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-bn-gold" />
                <span className="text-bn-glacier">{t("contact.info.locationValue")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-bn-gold" />
                <span className="text-bn-glacier">{t("contact.info.availability")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
