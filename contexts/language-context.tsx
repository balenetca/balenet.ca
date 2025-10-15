"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "fr"

type TranslationKey = string

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.getQuote": "Get Quote",

    // Hero
    "hero.title": "Vision becomes reality",
    "hero.subtitle": "Clean. Restore. Construct. Leading the future through innovation-first solutions.",
    "hero.cta": "Get a Quote",
    "hero.siteVisit": "Book a Site Visit",
    "hero.phone": "Call Now",
    "hero.pillar1": "Clean",
    "hero.pillar2": "Restore", 
    "hero.pillar3": "Construct",
    "hero.pillar1.desc": "Vision becomes reality through pristine, innovation-driven spaces",
    "hero.pillar2.desc": "Vision becomes reality through complete, technology-enhanced restoration",
    "hero.pillar3.desc": "Vision becomes reality through innovative builds and smart solutions",

    // About
    "about.title": "About BaleNet Group Inc",
    "about.description":
      "BaleNet Group Inc is more than a service provider — we are a partner in the life cycle of your property and assets. With expertise spanning Clean, Restore, and Construct, we help our clients build, manage, and sustain their investments where vision becomes reality.",
    "about.mission":
      "Our mission is to be Canada's innovation leader in facility services, transforming spaces through our three pillars while pioneering sustainable, technology-driven solutions that exceed expectations.",
    "about.mission.title": "Our Mission",
    "about.vision.title": "Where Vision Becomes Reality",
    "about.vision.description": "We lead the future by turning innovative ideas into tangible results. Through our three pillars of Clean, Restore, and Construct, we transform spaces and exceed expectations while pioneering sustainable, technology-driven solutions.",
    "about.values.title": "Our Core Values",
    "about.values.innovation.title": "Innovation First",
    "about.values.innovation.description": "Leading the future through technology-driven solutions",
    "about.values.integrity.title": "Integrity",
    "about.values.integrity.description": "Delivering what we promise with transparency",
    "about.values.quality.title": "Quality",
    "about.values.quality.description": "Holding every project to the highest standard",
    "about.values.sustainability.title": "Sustainability",
    "about.values.sustainability.description": "Building and maintaining with tomorrow in mind",
    "about.coverage.title": "Service Coverage",
    "about.coverage.description": "We proudly serve Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, Stittsville, and surrounding areas with reliable, professional construction cleaning services. Our local expertise ensures timely response and comprehensive coverage throughout the National Capital Region.",
    "about.serviceAreas.title": "Service Areas",
    "about.serviceAreas.description": "Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, Stittsville",

    // Services - Three Pillars
    "services.title": "Our Three Pillars",
    "services.subtitle": "Clean. Restore. Construct. Vision becomes reality through our comprehensive service offerings.",
    "services.beforeAfter": "Before & After Results",
    "services.professionalTeam": "Professional Team",
    
    // Clean Pillar
    "services.clean.title": "Clean",
    "services.clean.description": "Vision becomes reality through pristine, innovation-driven spaces. Daily janitorial, deep cleans, floor care, post-construction cleans, disinfection, high-dusting, window cleaning.",
    "services.clean.bullet1": "Daily and nightly janitorial",
    "services.clean.bullet2": "Deep cleaning and sanitation",
    "services.clean.bullet3": "Post-construction cleaning",
    "services.clean.bullet4": "Floor care and carpet maintenance",
    "services.clean.bullet5": "Windows, high-dusting, pressure washing",
    "services.clean.bullet6": "Scheduled supplies and restocking",
    
    // Restore Pillar  
    "services.restore.title": "Restore",
    "services.restore.description": "Vision becomes reality through complete, technology-enhanced restoration. Water and flood cleanup, fire and smoke cleanup, mold assessment and remediation, odor removal and decontamination.",
    "services.restore.bullet1": "Water and flood cleanup",
    "services.restore.bullet2": "Fire and smoke cleanup",
    "services.restore.bullet3": "Mold assessment and remediation",
    "services.restore.bullet4": "Odor removal and decontamination",
    "services.restore.bullet5": "Drywall, patch, paint, finish repairs",
    "services.restore.bullet6": "Insurance coordination and scopes",
    
    // Construct Pillar
    "services.construct.title": "Construct",
    "services.construct.description": "Vision becomes reality through innovative builds and smart solutions. Tenant improvements and fit-outs, renovations and reconfigurations, minor builds and facility upgrades.",
    "services.construct.bullet1": "Tenant improvements and fit-outs",
    "services.construct.bullet2": "Renovations and reconfigurations",
    "services.construct.bullet3": "Minor builds and facility upgrades",
    "services.construct.bullet4": "Accessibility and compliance updates",
    "services.construct.bullet5": "Exterior repairs and light civil works",
    "services.construct.bullet6": "Closeout, commissioning, warranties",

    // Why Choose Us
    "whyChoose.title": "Why Choose BaleNet Group Inc?",
    "whyChoose.subtitle": "Vision becomes reality through our innovation-first approach and comprehensive three-pillar expertise",
    "whyChoose.vision.title": "Vision Becomes Reality",
    "whyChoose.vision.description": "Leading the future through innovation-first approaches that exceed expectations",
    "whyChoose.innovation.title": "Innovation First",
    "whyChoose.innovation.description": "Technology-driven solutions and sustainable practices",
    "whyChoose.reliability.title": "Reliable Service",
    "whyChoose.reliability.description": "We show up on time and complete projects efficiently, keeping your timeline on track",
    "whyChoose.quality.title": "Quality Guaranteed",
    "whyChoose.quality.description": "We don't just deliver services; we make your vision shine",
    "whyChoose.oneContract.title": "One Contract, Three Service Lines",
    "whyChoose.oneContract.description": "Clean, Restore, Construct - all under one roof",
    "whyChoose.safety.title": "Safety First",
    "whyChoose.safety.description": "WSIB insured, background-checked staff, CSA and WHMIS trained",
    "whyChoose.support.title": "24/7 Support",
    "whyChoose.support.description": "Fast response and round-the-clock support for mission-critical facilities",
    "whyChoose.pricing.title": "Transparent Pricing",
    "whyChoose.pricing.description": "Clear quotes, no surprises, competitive rates",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Don't just take our word for it, hear from contractors and homeowners who trust BALE•NET",
    "testimonials.client1.text":
      "BALE•NET did an amazing job cleaning up after our office renovation. They were thorough, professional, and left everything spotless.",
    "testimonials.client1.name": "Sarah Johnson",
    "testimonials.client1.company": "Johnson Construction",
    "testimonials.client2.text":
      "Reliable and efficient service. They handled all the debris removal and final cleaning for our residential project perfectly.",
    "testimonials.client2.name": "Mike Chen",
    "testimonials.client2.company": "Chen Builders",
    "testimonials.client3.text":
      "Professional team that understands construction cleanup. They made our job site ready for the final walkthrough.",
    "testimonials.client3.name": "Lisa Rodriguez",
    "testimonials.client3.company": "Rodriguez Contracting",
    "testimonials.new.client1.text": "BALE•NET left our condo project spotless. Our clients walked in impressed and happy, exactly how we wanted them to feel.",
    "testimonials.new.client1.author": "General Contractor",
    "testimonials.new.client2.text": "We renovated our kitchen and the team at BALE•NET took care of every speck of dust. It was like stepping into a brand-new home.",
    "testimonials.new.client2.author": "Homeowner",
    "testimonials.new.client3.text": "Professional, reliable, and thorough. BALE•NET has become our go-to cleaning partner for all our construction projects.",
    "testimonials.new.client3.author": "Construction Manager",

    // Contact
    "contact.title": "Get Your Free Quote Today",
    "contact.subtitle": "Ready to see where vision becomes reality? Contact us for a free, no-obligation quote.",
    "contact.form.title": "Get Your Free Quote",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.service": "Service Needed",
    "contact.form.message": "Project Details",
    "contact.form.submit": "Get Free Quote",
    "contact.form.success": "Thank you! Your message has been sent successfully.",
    "contact.form.error": "Sorry, there was an error sending your message. Please try again.",
    "contact.info.title": "Contact Information",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Business Hours",
    "contact.info.hoursValue": "7 days/week 24/7",
    "contact.info.location": "Location",
    "contact.info.locationValue": "Ottawa - Gatineau",
    "contact.info.availability": "7 days/week 24/7",

    // Breadcrumb
    "breadcrumb.home": "Home",

    // Footer
    "footer.description": "BaleNet Group Inc - Where Vision Becomes Reality. Clean. Restore. Construct. Leading the future through innovation-first solutions.",
    "footer.services.title": "Services",
    "footer.contact.title": "Contact",
    "footer.links.title": "Quick Links",
    "footer.rights": "All rights reserved.",
  },
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.getQuote": "Devis gratuit",

    // Hero
    "hero.title": "La vision devient réalité",
    "hero.subtitle": "Nettoyer. Restaurer. Construire. Menant l'avenir grâce à des solutions d'innovation d'abord.",
    "hero.cta": "Obtenir une soumission",
    "hero.siteVisit": "Planifier une visite",
    "hero.phone": "Appeler maintenant",
    "hero.pillar1": "Nettoyer",
    "hero.pillar2": "Restaurer",
    "hero.pillar3": "Construire",
    "hero.pillar1.desc": "La vision devient réalité dans des espaces immaculés et innovants",
    "hero.pillar2.desc": "La vision devient réalité grâce à une restauration complète et améliorée par la technologie",
    "hero.pillar3.desc": "La vision devient réalité grâce à des constructions innovantes et des solutions intelligentes",

    // About
    "about.title": "À propos de BaleNet Group Inc",
    "about.description":
      "BaleNet Group Inc est plus qu'un fournisseur de services — nous sommes un partenaire dans le cycle de vie de vos propriétés et actifs. Avec une expertise couvrant Nettoyer, Restaurer et Construire, nous aidons nos clients à construire, gérer et maintenir leurs investissements où la vision devient réalité.",
    "about.mission":
      "Notre mission est d'être le leader canadien de l'innovation en services d'installation, transformant les espaces à travers nos trois piliers tout en pionnier des solutions durables et axées sur la technologie qui dépassent les attentes.",
    "about.mission.title": "Notre Mission",
    "about.vision.title": "Où la Vision Devient Réalité",
    "about.vision.description": "Nous menons l'avenir en transformant des idées innovantes en résultats tangibles. À travers nos trois piliers de Nettoyer, Restaurer et Construire, nous transformons les espaces et dépassons les attentes tout en pionnier des solutions durables et axées sur la technologie.",
    "about.values.title": "Nos Valeurs Fondamentales",
    "about.values.professionalism.title": "Professionnalisme",
    "about.values.professionalism.description": "Nous traitons chaque projet avec soin et respect",
    "about.values.safety.title": "Sécurité d'abord",
    "about.values.safety.description": "Respecter toutes les normes de sécurité sur les chantiers",
    "about.values.reliability.title": "Fiabilité",
    "about.values.reliability.description": "Arriver à l'heure et terminer selon l'horaire",
    "about.values.detail.title": "Attention aux détails",
    "about.values.detail.description": "De la poussière de cloison sèche au verre étincelant",
    "about.coverage.title": "Couverture de service",
    "about.coverage.description": "Nous servons fièrement Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, Stittsville et les environs avec des services de nettoyage de construction fiables et professionnels. Notre expertise locale garantit une réponse rapide et une couverture complète dans la région de la capitale nationale.",
    "about.serviceAreas.title": "Zones de service",
    "about.serviceAreas.description": "Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, Stittsville",

    // Services
    "services.title": "Nos Services",
    "services.subtitle": "Solutions de nettoyage complètes pour chaque étape de votre projet de construction",
    "services.beforeAfter": "Résultats Avant & Après",
    "services.professionalTeam": "Équipe Professionnelle",
    "services.postConstruction.title": "Nettoyage post-construction",
    "services.postConstruction.description":
      "Nettoyage complet après les projets de construction, enlèvement de la poussière, des débris et préparation des espaces pour l'occupation.",
    "services.postConstruction.bullet1": "Enlèvement complet de poussière et débris",
    "services.postConstruction.bullet2": "Nettoyage des fenêtres et surfaces vitrées",
    "services.postConstruction.bullet3": "Récurage et polissage des planchers",
    "services.postConstruction.bullet4": "Détaillage des installations et appareils",
    "services.postConstruction.bullet5": "Inspection finale et retouches",
    "services.debrisRemoval.title": "Enlèvement de débris",
    "services.debrisRemoval.description":
      "Enlèvement sécuritaire et efficace des déchets de construction, matériaux et débris de votre chantier. Nous offrons des solutions complètes de gestion des débris pour maintenir votre zone de construction propre et organisée tout au long de votre projet.",
    "services.debrisRemoval.bullet1": "Enlèvement de débris et déchets sur site",
    "services.debrisRemoval.bullet2": "Location et placement de bennes",
    "services.debrisRemoval.bullet3": "Élimination de matières dangereuses",
    "services.debrisRemoval.bullet4": "Recyclage et pratiques écologiques",
    "services.debrisRemoval.bullet5": "Nettoyage et organisation du site",
    "services.deepCleaning.title": "Nettoyage en profondeur",
    "services.deepCleaning.description":
      "Nettoyage minutieux de toutes les surfaces, installations et zones pour assurer une finition impeccable. Notre processus de nettoyage en profondeur élimine la saleté cachée, la poussière et les débris que les méthodes de nettoyage standard manquent souvent.",
    "services.deepCleaning.bullet1": "Essuyage complet et désinfection des surfaces",
    "services.deepCleaning.bullet2": "Nettoyage système CVC et remplacement filtres",
    "services.deepCleaning.bullet3": "Nettoyage en profondeur salles de bain et cuisine",
    "services.deepCleaning.bullet4": "Nettoyage tapis et traitement planchers",
    "services.deepCleaning.bullet5": "Nettoyage luminaires et ventilateurs de plafond",
    "services.finalCleaning.title": "Nettoyage final",
    "services.finalCleaning.description":
      "La touche finale qui rend votre espace prêt à emménager avec attention à chaque détail. Ce service de nettoyage final complet assure que votre espace nouvellement construit ou rénové est impeccable et prêt pour l'occupation ou la vente.",
    "services.disasterRecovery.title": "Nettoyage de récupération après sinistre",
    "services.disasterRecovery.description":
      "Quand l'inattendu arrive: incendie, inondation, tempête ou autres urgences, BALE•NET fournit un nettoyage de récupération rapide axé sur la sécurité, la rapidité et les détails.",
    "services.disasterRecovery.bullet1": "Nettoyage des dégâts d'eau et d'inondation",
    "services.disasterRecovery.bullet2": "Enlèvement des résidus de feu et fumée",
    "services.disasterRecovery.bullet3": "Déblaiement de matières dangereuses",
    "services.disasterRecovery.bullet4": "Intervention d'urgence et restauration",
    "services.disasterRecovery.bullet5": "Élimination d'odeurs et purification d'air",
    "services.demolition.title": "Services de démolition",
    "services.demolition.description":
      "Services professionnels de démolition et préparation de site pour projets résidentiels et commerciaux. Notre équipe expérimentée gère l'enlèvement structurel sécuritaire, le déblaiement de site et la préparation pour nouvelle construction avec élimination appropriée des déchets et conformité environnementale.",
    "services.demolition.bullet1": "Démolition intérieure et extérieure",
    "services.demolition.bullet2": "Enlèvement structurel sélectif",
    "services.demolition.bullet3": "Préparation et déblaiement de site",
    "services.demolition.bullet4": "Manipulation et élimination sécuritaires des matériaux",
    "services.demolition.bullet5": "Assistance aux permis et conformité",

    // Why Choose Us
    "whyChoose.title": "Pourquoi choisir BALE•NET?",
    "whyChoose.subtitle": "Nous sommes plus qu'un simple service de nettoyage, nous sommes votre partenaire de construction de confiance",
    "whyChoose.experienced.title": "Équipe expérimentée",
    "whyChoose.experienced.description":
      "Nos professionnels qualifiés ont des années d'expérience dans le nettoyage de construction et l'enlèvement de débris.",
    "whyChoose.reliable.title": "Service fiable",
    "whyChoose.reliable.description":
      "Nous arrivons à l'heure et terminons les projets efficacement, respectant votre calendrier.",
    "whyChoose.equipment.title": "Équipement professionnel",
    "whyChoose.equipment.description":
      "Nous utilisons des outils et équipements standards de l'industrie pour assurer un nettoyage minutieux et sécuritaire.",
    "whyChoose.insured.title": "Entièrement assuré",
    "whyChoose.insured.description":
      "Une couverture d'assurance complète vous donne la tranquillité d'esprit pour chaque projet.",
    "whyChoose.contractor.title": "Adapté aux entrepreneurs",
    "whyChoose.contractor.description": "Nous travaillons de manière transparente avec les constructeurs et gestionnaires de chantier",
    "whyChoose.team.title": "Équipes expérimentées",
    "whyChoose.team.description": "Personnel qualifié, assuré et orienté vers les détails",
    "whyChoose.budget.title": "À l'heure et dans le budget",
    "whyChoose.budget.description": "Nous savons que les échéances de construction sont critiques",
    "whyChoose.quality.title": "Qualité garantie",
    "whyChoose.quality.description": "Nous ne nous contentons pas de nettoyer; nous faisons briller votre projet",
    "whyChoose.pricing.title": "Tarification transparente",
    "whyChoose.pricing.description": "Tarifs compétitifs, aucun coût caché",

    // Testimonials
    "testimonials.title": "Ce que disent nos clients",
    "testimonials.subtitle": "Ne prenez pas seulement notre parole, écoutez les entrepreneurs et propriétaires qui font confiance à BALE•NET",
    "testimonials.client1.text":
      "BALE•NET a fait un travail formidable pour nettoyer après notre rénovation de bureau. Ils étaient minutieux, professionnels et ont tout laissé impeccable.",
    "testimonials.client1.name": "Sarah Johnson",
    "testimonials.client1.company": "Johnson Construction",
    "testimonials.client2.text":
      "Service fiable et efficace. Ils ont géré parfaitement tout l'enlèvement de débris et le nettoyage final pour notre projet résidentiel.",
    "testimonials.client2.name": "Mike Chen",
    "testimonials.client2.company": "Chen Builders",
    "testimonials.client3.text":
      "Équipe professionnelle qui comprend le nettoyage de construction. Ils ont rendu notre chantier prêt pour l'inspection finale.",
    "testimonials.client3.name": "Lisa Rodriguez",
    "testimonials.client3.company": "Rodriguez Contracting",
    "testimonials.new.client1.text": "BALE•NET a laissé notre projet de condominium impeccable. Nos clients sont entrés impressionnés et heureux, exactement comme nous le voulions.",
    "testimonials.new.client1.author": "Entrepreneur général",
    "testimonials.new.client2.text": "Nous avons rénové notre cuisine et l'équipe de BALE•NET s'est occupée de chaque grain de poussière. C'était comme entrer dans une maison toute neuve.",
    "testimonials.new.client2.author": "Propriétaire",
    "testimonials.new.client3.text": "Professionnel, fiable et minutieux. BALE•NET est devenu notre partenaire de nettoyage pour tous nos projets de construction.",
    "testimonials.new.client3.author": "Gestionnaire de construction",

    // Contact
    "contact.title": "Obtenez votre devis gratuit aujourd'hui",
    "contact.subtitle":
      "Prêt à nettoyer votre chantier de construction? Contactez-nous pour un devis gratuit et sans obligation.",
    "contact.form.title": "Obtenez votre devis gratuit",
    "contact.form.name": "Nom complet",
    "contact.form.email": "Adresse courriel",
    "contact.form.phone": "Numéro de téléphone",
    "contact.form.service": "Service requis",
    "contact.form.message": "Détails du projet",
    "contact.form.submit": "Devis gratuit",
    "contact.form.success": "Merci! Votre message a été envoyé avec succès.",
    "contact.form.error": "Désolé, une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",
    "contact.info.title": "Informations de contact",
    "contact.info.phone": "Téléphone",
    "contact.info.email": "Courriel",
    "contact.info.hours": "Heures d'ouverture",
    "contact.info.hoursValue": "7 jours/semaine 24/7",
    "contact.info.location": "Emplacement",
    "contact.info.locationValue": "Ottawa - Gatineau",
    "contact.info.availability": "7 jours/semaine 24/7",

    // Breadcrumb
    "breadcrumb.home": "Accueil",

    // Footer
    "footer.description":
      "Services professionnels de nettoyage de construction et d'enlèvement de débris. Rendant votre chantier impeccable et prêt.",
    "footer.services.title": "Services",
    "footer.contact.title": "Contact",
    "footer.links.title": "Liens rapides",
    "footer.rights": "Tous droits réservés.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: TranslationKey): string => {
    const translation = translations[language] as Record<string, string>
    return translation[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
