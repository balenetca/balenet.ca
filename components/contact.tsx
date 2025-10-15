"use client"
// Updated contact component
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '0bef34c2-5b63-4a13-bf2c-84a499b71a4b',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `New Message from BaleNet Group Inc Website - Quote Request from ${formData.name}`,
          from_name: 'BaleNet Group Inc Website',
          replyto: formData.email,
          to_email: 'info@balenet.ca',
          
          // Auto-reply to customer
          auto_reply: true,
          auto_reply_subject: 'Thank you for contacting BaleNet Group Inc - We\'ll respond within 24 hours',
          auto_reply_message: `Hi ${formData.name},

Thank you for reaching out to BaleNet Group Inc! We've received your quote request and appreciate your interest in our Clean, Restore, and Construct services.

Our team will review your project details and get back to you within 24 hours with a personalized quote.

In the meantime, feel free to visit our website at www.balenet.ca to learn more about how Vision becomes reality through our three pillars.

Best regards,
The BaleNet Group Inc Team

📞 (514) 577-8776
✉️ info@balenet.ca
🌐 www.balenet.ca

---
BaleNet Group Inc - Where Vision Becomes Reality
Clean | Restore | Construct
Serving Ottawa, Gatineau, and surrounding areas`
        }),
      })

      const result = await response.json()
      console.log('Web3Forms response:', result) // Debug log

      if (result.success) {
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        })
        alert(t("contact.form.success") || "Thank you! Your message has been sent successfully. We'll respond within 24 hours!")
      } else {
        throw new Error(result.message || 'Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert(t("contact.form.error") || "Sorry, there was an error sending your message. Please try again.")
    }
  }

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
                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.name")} 
                      className="bg-input border-border" 
                      required 
                    />
                    <Input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.phone")} 
                      className="bg-input border-border" 
                    />
                  </div>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("contact.form.email")} 
                    className="bg-input border-border" 
                    required 
                  />
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t("contact.form.message")} 
                    className="bg-input border-border flex-1 min-h-[120px]" 
                    required 
                  />
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-auto">
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
                      <p className="text-muted-foreground">info@balenet.ca</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Clock className="h-8 w-8 text-primary" />
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
