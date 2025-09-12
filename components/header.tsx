"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { language, setLanguage, t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/images/balenet-logo.png" alt="BALE•NET Logo" width={80} height={80} className="h-20 w-20" />
          <span className="text-3xl font-bold text-gray-900">BALE•NET</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
          >
            {t("nav.home")}
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
          >
            {t("nav.services")}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
          >
            {t("nav.about")}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
          >
            {t("nav.contact")}
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border border-gray-300 rounded-md p-1">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                language === "en" ? "bg-orange-500 text-white" : "text-gray-600 hover:text-orange-500"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                language === "fr" ? "bg-orange-500 text-white" : "text-gray-600 hover:text-orange-500"
              }`}
            >
              FR
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-orange-500 text-white hover:bg-orange-600 font-semibold px-6 py-2"
          >
            {t("nav.getQuote")}
          </Button>
        </div>
      </div>
    </header>
  )
}
