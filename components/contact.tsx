"use client"

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
      const submissionDate = new Date().toLocaleString('en-CA', {
        timeZone: 'America/Toronto',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })

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
          subject: `New Quote Request from BALE•NET Website - ${formData.name}`,
          from_name: 'BALE•NET Website',
          replyto: formData.email,
          to_email: 'info@balenet.com',
          
          // Professional email template
          template: 'html',
          form_name: 'BALE•NET Contact Form',
          form_url: 'https://www.balenet.ca',
          submission_date: submissionDate,
          
          // Rich HTML formatting for better email appearance
          message_html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
              <div style="background: linear-gradient(135deg, #f97316, #ea580c); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
                <h2 style="margin: 0; font-size: 24px;">🏗️ BALE•NET</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">New Quote Request</p>
              </div>
              
              <div style="padding: 25px; background: #fafafa;">
                <h3 style="color: #f97316; margin-top: 0; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Contact Information</h3>
                
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                    <td style="padding: 8px 0; color: #111827;">${formData.name}</td>
                  </tr>
                  <tr style="background: #f9fafb;">
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                    <td style="padding: 8px 0; color: #111827;"><a href="mailto:${formData.email}" style="color: #f97316; text-decoration: none;">${formData.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                    <td style="padding: 8px 0; color: #111827;"><a href="tel:${formData.phone}" style="color: #f97316; text-decoration: none;">${formData.phone}</a></td>
                  </tr>
                  <tr style="background: #f9fafb;">
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Submitted:</td>
                    <td style="padding: 8px 0; color: #111827;">${submissionDate}</td>
                  </tr>
                </table>
                
                <h3 style="color: #f97316; margin: 20px 0 10px 0; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Project Details</h3>
                <div style="background: white; padding: 15px; border-left: 4px solid #f97316; border-radius: 4px; margin-bottom: 20px;">
                  <p style="margin: 0; line-height: 1.6; color: #111827;">${formData.message.replace(/\n/g, '<br>')}</p>
                </div>
                
                <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 6px; padding: 15px; margin-top: 20px;">
                  <p style="margin: 0; color: #92400e; font-weight: bold;">📞 Quick Response Required</p>
                  <p style="margin: 5px 0 0 0; color: #92400e; font-size: 14px;">This is a potential customer inquiry. Please respond within 24 hours for best results.</p>
                </div>
              </div>
              
              <div style="background: #374151; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px;">
                <p style="margin: 0;">Submitted from <a href="https://www.balenet.ca" style="color: #f97316; text-decoration: none;">www.balenet.ca</a></p>
                <p style="margin: 5px 0 0 0; opacity: 0.8;">BALE•NET Professional Construction Cleaning & Debris Removal</p>
              </div>
            </div>
          `,
          
          // Auto-reply to customer
          auto_reply: true,
          auto_reply_subject: 'Thank you for contacting BALE•NET - We\'ll respond within 24 hours',
          auto_reply_message: `
            Hi ${formData.name},

            Thank you for reaching out to BALE•NET! We've received your quote request and appreciate your interest in our professional construction cleaning and debris removal services.

            Our team will review your project details and get back to you within 24 hours with a personalized quote.

            In the meantime, feel free to visit our website at www.balenet.ca to learn more about our services.

            Best regards,
            The BALE•NET Team

            📞 (514) 577-8776
            ✉️ info@balenet.com
            🌐 www.balenet.ca

            ---
            BALE•NET Professional Construction Cleaning & Debris Removal
            Serving Ottawa, Carleton, Gatineau, and surrounding areas
          `
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
                      <p className="text-muted-foreground">info@balenet.com</p>
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
