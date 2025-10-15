"use client"
// Porto-style construction footer
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-bn-dark text-bn-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/icons/balenet-logo-512x512.png" 
                alt="BaleNet Group Logo" 
                width={40} 
                height={40} 
                className="h-10 w-10" 
              />
              <div>
                <h3 className="text-xl font-bold text-bn-white">BaleNet Group</h3>
                <p className="text-sm text-bn-light-gray">Construction & Cleanup Services</p>
              </div>
            </div>
            <p className="text-bn-light-gray mb-6">
              Professional construction and cleanup services across Ottawa, Gatineau, and surrounding areas. 
              Your trusted partner for quality results.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-bn-primary/20 rounded-full hover:bg-bn-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-bn-primary/20 rounded-full hover:bg-bn-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-bn-primary/20 rounded-full hover:bg-bn-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-bn-primary/20 rounded-full hover:bg-bn-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-bn-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-bn-light-gray hover:text-bn-orange transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="/clean" className="text-bn-light-gray hover:text-bn-orange transition-colors">
                  Clean Services
                </a>
              </li>
              <li>
                <a href="/restore" className="text-bn-light-gray hover:text-bn-orange transition-colors">
                  Restore Services
                </a>
              </li>
              <li>
                <a href="/construct" className="text-bn-light-gray hover:text-bn-orange transition-colors">
                  Construct Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-bn-light-gray hover:text-bn-orange transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-bn-light-gray hover:text-bn-orange transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-bn-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/clean" className="text-bn-light-gray hover:text-bn-orange transition-colors">
                  Daily Janitorial Services
                </a>
              </li>
              <li>
                <a href="/clean" className="text-bn-light-gray hover:text-bn-orange transition-colors">
                  Post-Construction Cleanup
                </a>
              </li>
              <li>
                <a href="/restore" className="text-bn-light-gray hover:text-bn-orange transition-colors">
                  Disaster Recovery
                </a>
              </li>
              <li>
                <a href="/restore" className="text-bn-light-gray hover:text-bn-orange transition-colors">
                  Water Damage Cleanup
                </a>
              </li>
              <li>
                <a href="/construct" className="text-bn-light-gray hover:text-bn-orange transition-colors">
                  Demolition Services
                </a>
              </li>
              <li>
                <a href="/construct" className="text-bn-light-gray hover:text-bn-orange transition-colors">
                  Tenant Fit-outs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-bn-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-bn-primary/20 rounded-full">
                  <Phone className="h-4 w-4 text-bn-orange" />
                </div>
                <div>
                  <div className="text-bn-white font-medium">(514) 577-8776</div>
                  <div className="text-sm text-bn-light-gray">24/7 Emergency Service</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-bn-primary/20 rounded-full">
                  <Mail className="h-4 w-4 text-bn-orange" />
                </div>
                <div>
                  <div className="text-bn-white font-medium">info@balenet.ca</div>
                  <div className="text-sm text-bn-light-gray">Email us anytime</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-bn-primary/20 rounded-full">
                  <MapPin className="h-4 w-4 text-bn-orange" />
                </div>
                <div>
                  <div className="text-bn-white font-medium">Ottawa, Gatineau</div>
                  <div className="text-sm text-bn-light-gray">Serving surrounding areas</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-bn-primary/20 rounded-full">
                  <Clock className="h-4 w-4 text-bn-orange" />
                </div>
                <div>
                  <div className="text-bn-white font-medium">Mon - Sun</div>
                  <div className="text-sm text-bn-light-gray">24/7 Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-bn-gray/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-bn-light-gray text-sm">
              © 2024 BaleNet Group. All rights reserved. | 
              <a href="/privacy" className="hover:text-bn-orange transition-colors ml-1">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-bn-orange transition-colors ml-1">Terms of Service</a>
            </div>
            <div className="text-bn-light-gray text-sm">
              Built with ❤️ for the Ottawa-Gatineau community
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}