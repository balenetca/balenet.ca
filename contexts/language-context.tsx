"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
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
    "hero.title": "BALE•NET - Professional Construction Cleanup",
    "hero.subtitle": "From debris to spotless, we handle the mess so you enjoy the results.",
    "hero.cta": "Get Free Quote",
    "hero.phone": "Call Now",
    "hero.service1": "Post-Construction Cleanup",
    "hero.service2": "Debris Removal",
    "hero.service3": "Deep Cleaning",
    "hero.service1.desc": "Complete site cleanup and debris hauling",
    "hero.service2.desc": "Thorough post-construction cleaning",
    "hero.service3.desc": "Reliable partner for contractors",

    // About
    "about.title": "About BALE•NET",
    "about.description":
      "BALE•NET specializes in comprehensive construction cleaning and debris removal services. With years of experience in the industry, we understand the unique challenges that come with post-construction cleanup.",
    "about.mission":
      "Our mission is to transform construction sites into pristine, move-in ready spaces. We handle everything from heavy debris removal to detailed final cleaning, ensuring your project is completed to the highest standards.",
    "about.mission.title": "Our Mission",
    "about.vision.title": "Our Vision",
    "about.vision.description": "To be the most trusted cleaning partner for builders, contractors, and property owners across the region. We are committed to delivering exceptional service that exceeds expectations while maintaining the highest standards of professionalism and reliability.",
    "about.values.title": "Our Core Values",
    "about.values.professionalism.title": "Professionalism",
    "about.values.professionalism.description": "We treat every project with care and respect",
    "about.values.safety.title": "Safety First",
    "about.values.safety.description": "Complying with all job site safety standards",
    "about.values.reliability.title": "Reliability",
    "about.values.reliability.description": "Showing up on time and finishing on schedule",
    "about.values.detail.title": "Attention to Detail",
    "about.values.detail.description": "From drywall dust to sparkling glass",
    "about.coverage.title": "Service Coverage",
    "about.coverage.description": "We proudly serve Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, Stittsville, and surrounding areas with reliable, professional construction cleaning services. Our local expertise ensures timely response and comprehensive coverage throughout the National Capital Region.",
    "about.serviceAreas.title": "Service Areas",
    "about.serviceAreas.description": "Ottawa, Gatineau, Carleton, Hull, Aylmer, Orleans, Kanata, Nepean, Gloucester, Ottawa South, Barrhaven, Stittsville",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive cleaning solutions for every stage of your construction project",
    "services.beforeAfter": "Before & After Results",
    "services.professionalTeam": "Professional Team",
    "services.postConstruction.title": "Post-Construction Cleaning",
    "services.postConstruction.description":
      "Complete cleanup after construction projects, removing dust, debris, and preparing spaces for occupancy.",
    "services.postConstruction.bullet1": "Complete dust & debris removal",
    "services.postConstruction.bullet2": "Window & glass surface cleaning",
    "services.postConstruction.bullet3": "Floor scrubbing & polishing",
    "services.postConstruction.bullet4": "Fixture & appliance detailing",
    "services.postConstruction.bullet5": "Final inspection & touch-ups",
    "services.debrisRemoval.title": "Debris Removal",
    "services.debrisRemoval.description":
      "Safe and efficient removal of construction waste, materials, and debris from your job site. We provide comprehensive debris management solutions to keep your construction area clean and organized throughout your project.",
    "services.debrisRemoval.bullet1": "On-site debris & waste removal",
    "services.debrisRemoval.bullet2": "Dumpster rental & placement",
    "services.debrisRemoval.bullet3": "Hazardous material disposal",
    "services.debrisRemoval.bullet4": "Recycling & eco-friendly practices",
    "services.debrisRemoval.bullet5": "Site cleanup & organization",
    "services.deepCleaning.title": "Deep Cleaning",
    "services.deepCleaning.description":
      "Thorough cleaning of all surfaces, fixtures, and areas to ensure a spotless finish. Our comprehensive deep cleaning process eliminates hidden dirt, dust, and debris that standard cleaning methods often miss.",
    "services.deepCleaning.bullet1": "Full surface wipe-down & sanitization",
    "services.deepCleaning.bullet2": "HVAC system cleaning & filter replacement",
    "services.deepCleaning.bullet3": "Bathroom & kitchen deep cleaning",
    "services.deepCleaning.bullet4": "Carpet cleaning & floor treatment",
    "services.deepCleaning.bullet5": "Light fixture & ceiling fan cleaning",
    "services.finalCleaning.title": "Final Cleaning",
    "services.finalCleaning.description":
      "The finishing touch that makes your space move-in ready with attention to every detail. This comprehensive final cleaning service ensures your newly constructed or renovated space is pristine and ready for occupancy or sale.",
    "services.disasterRecovery.title": "Disaster Recovery Cleaning",
    "services.disasterRecovery.description":
      "When the unexpected happens: fire, flood, storm, or other emergencies, BALE•NET provides rapid disaster recovery cleaning focused on safety, speed, and detail.",
    "services.disasterRecovery.bullet1": "Water & flood damage cleanup",
    "services.disasterRecovery.bullet2": "Fire & smoke residue removal",
    "services.disasterRecovery.bullet3": "Hazardous material clearing",
    "services.disasterRecovery.bullet4": "Emergency response & restoration",
    "services.disasterRecovery.bullet5": "Odor removal & air purification",
    "services.demolition.title": "Demolition Services",
    "services.demolition.description":
      "Professional demolition and site preparation services for residential and commercial projects. Our experienced team handles safe structural removal, site clearing, and preparation for new construction with proper waste disposal and environmental compliance.",
    "services.demolition.bullet1": "Interior & exterior demolition",
    "services.demolition.bullet2": "Selective structural removal",
    "services.demolition.bullet3": "Site preparation & clearing",
    "services.demolition.bullet4": "Safe material handling & disposal",
    "services.demolition.bullet5": "Permit assistance & compliance",

    // Why Choose Us
    "whyChoose.title": "Why Choose BALE•NET?",
    "whyChoose.subtitle": "We're more than just a cleaning service, we're your trusted construction partner",
    "whyChoose.experienced.title": "Experienced Team",
    "whyChoose.experienced.description":
      "Our skilled professionals have years of experience in construction cleanup and debris removal.",
    "whyChoose.reliable.title": "Reliable Service",
    "whyChoose.reliable.description":
      "We show up on time and complete projects efficiently, keeping your timeline on track.",
    "whyChoose.equipment.title": "Professional Equipment",
    "whyChoose.equipment.description":
      "We use industry-standard tools and equipment to ensure thorough and safe cleaning.",
    "whyChoose.insured.title": "Fully Insured",
    "whyChoose.insured.description": "Complete insurance coverage gives you peace of mind for every project.",
    "whyChoose.contractor.title": "Contractor-Friendly",
    "whyChoose.contractor.description": "We work seamlessly with builders and site managers",
    "whyChoose.team.title": "Experienced Teams",
    "whyChoose.team.description": "Skilled, insured, and detail-oriented staff",
    "whyChoose.budget.title": "On-Time & On-Budget",
    "whyChoose.budget.description": "We know construction deadlines are critical",
    "whyChoose.quality.title": "Quality Guaranteed",
    "whyChoose.quality.description": "We don't just clean; we make your project shine",
    "whyChoose.pricing.title": "Transparent Pricing",
    "whyChoose.pricing.description": "Competitive rates, no hidden costs",

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
    "contact.subtitle": "Ready to clean up your construction site? Contact us for a free, no-obligation quote.",
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
    "footer.description":
      "Professional construction cleaning and debris removal services. Making your project site spotless and ready.",
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
    "hero.title": "BALE•NET - Nettoyage professionnel de construction",
    "hero.subtitle": "Des débris à l'impeccable, nous nous occupons du désordre pour que vous profitiez des résultats.",
    "hero.cta": "Devis gratuit",
    "hero.phone": "Appelez maintenant",
    "hero.service1": "Nettoyage post-construction",
    "hero.service2": "Enlèvement de débris",
    "hero.service3": "Nettoyage en profondeur",
    "hero.service1.desc": "Nettoyage complet de site et transport de débris",
    "hero.service2.desc": "Nettoyage minutieux post-construction",
    "hero.service3.desc": "Partenaire fiable pour entrepreneurs",

    // About
    "about.title": "À propos de BALE•NET",
    "about.description":
      "BALE•NET se spécialise dans les services complets de nettoyage de construction et d'enlèvement de débris. Avec des années d'expérience dans l'industrie, nous comprenons les défis uniques du nettoyage post-construction.",
    "about.mission":
      "Notre mission est de transformer les chantiers de construction en espaces impeccables et prêts à emménager. Nous nous occupons de tout, de l'enlèvement des gros débris au nettoyage final détaillé, en veillant à ce que votre projet soit terminé selon les plus hauts standards.",
    "about.mission.title": "Notre Mission",
    "about.vision.title": "Notre Vision",
    "about.vision.description": "Être le partenaire de nettoyage le plus fiable pour les constructeurs, entrepreneurs et propriétaires de la région. Nous nous engageons à offrir un service exceptionnel qui dépasse les attentes tout en maintenant les plus hauts standards de professionnalisme et de fiabilité.",
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

  const t = (key: string): string => {
    return translations[language][key] || key
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
