"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Image 
            src="/images/balenet-logo.png" 
            alt="BALE•NET Logo" 
            width={60} 
            height={60} 
            className="h-12 w-12 md:h-20 md:w-20" 
          />
          <span className="text-xl md:text-3xl font-bold text-gray-900">BALE•NET</span>
        </div>

        {/* Desktop Navigation */}
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

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 border border-gray-300 rounded-md p-1">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                language === "en" ? "bg-primary text-primary-foreground" : "text-gray-600 hover:text-primary"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                language === "fr" ? "bg-primary text-primary-foreground" : "text-gray-600 hover:text-primary"
              }`}
            >
              FR
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-4 py-2"
          >
            {t("nav.getQuote")}
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <div className="flex items-center gap-1 border border-gray-300 rounded-md p-1">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                language === "en" ? "bg-primary text-primary-foreground" : "text-gray-600 hover:text-primary"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                language === "fr" ? "bg-primary text-primary-foreground" : "text-gray-600 hover:text-primary"
              }`}
            >
              FR
            </button>
          </div>

          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variant="ghost"
            size="sm"
            className="p-2"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-left py-2"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-left py-2"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-left py-2"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-left py-2"
            >
              {t("nav.contact")}
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-4 py-2 mt-2"
            >
              {t("nav.getQuote")}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
