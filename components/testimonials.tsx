"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Testimonials() {
  const { t } = useLanguage()
  
  const testimonials = [
    {
      quote: t("testimonials.new.client1.text"),
      author: t("testimonials.new.client1.author"),
      rating: 5,
    },
    {
      quote: t("testimonials.new.client2.text"),
      author: t("testimonials.new.client2.author"),
      rating: 5,
    },
    {
      quote: t("testimonials.new.client3.text"),
      author: t("testimonials.new.client3.author"),
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("testimonials.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 text-pretty">"{testimonial.quote}"</blockquote>
                <cite className="text-sm font-medium text-foreground">{testimonial.author}</cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
