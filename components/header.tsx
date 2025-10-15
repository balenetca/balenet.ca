"use client"
// Porto-style construction header
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"

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
    <header className="bg-bn-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-bn-primary text-bn-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(514) 577-8776</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@balenet.ca</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                language === "en" ? "bg-bn-white text-bn-primary" : "hover:bg-bn-secondary"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                language === "fr" ? "bg-bn-white text-bn-primary" : "hover:bg-bn-secondary"
              }`}
            >
              FR
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image 
            src="/icons/balenet-logo-512x512.png" 
            alt="BaleNet Group Logo" 
            width={50} 
            height={50} 
            className="h-12 w-12" 
          />
          <div>
            <h1 className="text-2xl font-bold text-bn-primary">BaleNet Group</h1>
            <p className="text-sm text-bn-gray">Construction & Cleanup Services</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-bn-dark hover:text-bn-primary transition-colors font-medium"
          >
            {t("nav.home")}
          </button>
          <a
            href="/clean"
            className="text-bn-dark hover:text-bn-primary transition-colors font-medium"
          >
            Clean
          </a>
          <a
            href="/restore"
            className="text-bn-dark hover:text-bn-primary transition-colors font-medium"
          >
            Restore
          </a>
          <a
            href="/construct"
            className="text-bn-dark hover:text-bn-primary transition-colors font-medium"
          >
            Construct
          </a>
          <button
            onClick={() => scrollToSection("about")}
            className="text-bn-dark hover:text-bn-primary transition-colors font-medium"
          >
            {t("nav.about")}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-bn-dark hover:text-bn-primary transition-colors font-medium"
          >
            {t("nav.contact")}
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-bn-orange hover:bg-bn-orange/90 text-bn-white font-semibold px-6 py-2"
          >
            {t("nav.getQuote")}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6 text-bn-dark" /> : <Menu className="h-6 w-6 text-bn-dark" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-bn-light border-t border-bn-light-gray">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-bn-dark hover:text-bn-primary transition-colors font-medium py-2"
            >
              {t("nav.home")}
            </button>
            <a
              href="/clean"
              className="block w-full text-left text-bn-dark hover:text-bn-primary transition-colors font-medium py-2"
            >
              Clean
            </a>
            <a
              href="/restore"
              className="block w-full text-left text-bn-dark hover:text-bn-primary transition-colors font-medium py-2"
            >
              Restore
            </a>
            <a
              href="/construct"
              className="block w-full text-left text-bn-dark hover:text-bn-primary transition-colors font-medium py-2"
            >
              Construct
            </a>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-bn-dark hover:text-bn-primary transition-colors font-medium py-2"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-bn-dark hover:text-bn-primary transition-colors font-medium py-2"
            >
              {t("nav.contact")}
            </button>

            {/* Mobile CTA Button */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-bn-orange hover:bg-bn-orange/90 text-bn-white font-semibold py-3 mt-4"
            >
              {t("nav.getQuote")}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}