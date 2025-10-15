"use client"
// Porto-style construction hero section
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Award } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative bg-bn-dark text-bn-white py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/construction-site-bg.jpg"
          alt="Construction site background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-bn-dark/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-bn-orange/20 border border-bn-orange/30 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-bn-orange" />
              <span className="text-sm font-medium text-bn-orange">Professional Construction Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-bn-white">Professional</span>
              <br />
              <span className="text-bn-orange">Construction & Cleanup</span>
              <br />
              <span className="text-bn-white">Services</span>
            </h1>

            <p className="text-lg md:text-xl text-bn-light mb-8 max-w-2xl mx-auto lg:mx-0">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-bn-orange hover:bg-bn-orange/90 text-bn-white font-semibold px-8 py-4 text-lg"
                asChild
              >
                <a href="#contact">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-bn-white text-bn-white hover:bg-bn-white hover:text-bn-dark font-semibold px-8 py-4 text-lg"
                asChild
              >
                <a href="tel:+15145778776">
                  {t("hero.phone")}
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-bn-orange mb-1">15+</div>
                <div className="text-sm text-bn-light">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bn-orange mb-1">500+</div>
                <div className="text-sm text-bn-light">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bn-orange mb-1">100%</div>
                <div className="text-sm text-bn-light">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/team-cleaning.jpg"
                alt="BaleNet Group professional team"
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-bn-primary/20"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-bn-white rounded-lg shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-bn-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-bn-primary" />
                </div>
                <div>
                  <div className="font-semibold text-bn-dark">Expert Team</div>
                  <div className="text-sm text-bn-gray">Professional & Certified</div>
                </div>
              </div>
              <p className="text-sm text-bn-gray">
                Our skilled professionals deliver quality construction and cleanup services with attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}