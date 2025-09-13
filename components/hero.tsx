"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/construction-site-bg.jpg"
          alt="Construction site background"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="flex-shrink-0 order-2 lg:order-1">
            <Image
              src="/images/balenet-logo.png"
              alt="BALE•NET Logo"
              width={200}
              height={200}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
            />
          </div>

          <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" />
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-foreground text-balance tracking-tight">
                {t("hero.title")}
              </h1>
              <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" />
            </div>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 lg:mb-8 text-pretty font-light leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-12">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-md"
                asChild
              >
                <a href="#contact">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-md border-border bg-white/80"
                asChild
              >
                <a href="tel:+15145778776">
                  {t("hero.phone")}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mt-12 lg:mt-16 bg-white/90 rounded-lg p-6 md:p-8">
          <div className="text-center">
            <h3 className="text-base md:text-lg font-medium text-foreground mb-2">{t("hero.service2")}</h3>
            <p className="text-sm md:text-base text-muted-foreground font-light">{t("hero.service2.desc")}</p>
          </div>
          <div className="text-center">
            <h3 className="text-base md:text-lg font-medium text-foreground mb-2">{t("hero.service3")}</h3>
            <p className="text-sm md:text-base text-muted-foreground font-light">{t("hero.service3.desc")}</p>
          </div>
          <div className="text-center">
            <h3 className="text-base md:text-lg font-medium text-foreground mb-2">{t("hero.service1")}</h3>
            <p className="text-sm md:text-base text-muted-foreground font-light">{t("hero.service1.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
