import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, AlertTriangle, Clock, Users, CheckCircle, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services de Restauration et Récupération | BaleNet Group Inc",
  description: "La vision devient réalité grâce à une restauration complète et améliorée par la technologie. Récupération d'urgence, nettoyage de dégâts d'eau, restauration d'incendie et assainissement de moisissures.",
  keywords: [
    "récupération de catastrophe",
    "nettoyage dégâts d'eau",
    "restauration incendie",
    "assainissement moisissures",
    "nettoyage d'urgence",
    "nettoyage inondation",
    "restauration dégâts de fumée",
    "élimination odeurs",
    "restauration assurance",
    "récupération d'urgence Ottawa",
    "nettoyage d'urgence Gatineau"
  ],
  alternates: {
    canonical: "https://www.balenet.ca/fr/restaurer",
    languages: {
      'en': 'https://www.balenet.ca/restore',
      'fr': 'https://www.balenet.ca/fr/restaurer',
    },
  },
}

export default function RestaurerPage() {
  const restoreServices = [
    {
      title: "Nettoyage Dé 데s d'Eau et Inondation",
      description: "Restauration rapide des dégâts d'eau avec équipement de séchage avancé et prévention de moisissures.",
      features: ["Réponse d'urgence 24/7", "Extraction d'eau", "Séchage structural", "Prévention moisissures"]
    },
    {
      title: "Restauration Incendie et Dégâts de Fumée",
      description: "Restauration complète des dégâts d'incendie incluant élimination d'odeurs de fumée et réparations structurales.",
      features: ["Nettoyage dégâts fumée", "Élimination odeurs", "Enlèvement suie", "Restauration structurale"]
    },
    {
      title: "Évaluation et Assainissement de Moisissures",
      description: "Inspection professionnelle de moisissures, tests et assainissement sécuritaire avec protocoles de confinement.",
      features: ["Inspection moisissures", "Tests qualité air", "Enlèvement sécuritaire", "Stratégies prévention"]
    },
    {
      title: "Élimination Odeurs et Décontamination",
      description: "Élimination avancée d'odeurs utilisant traitement ozone, brouillard thermique et purification d'air.",
      features: ["Traitement ozone", "Brouillard thermique", "Purification air", "Neutralisation odeurs"]
    },
    {
      title: "Restauration Gypse et Peinture",
      description: "Réparations complètes de gypse, rapiéçage et services de peinture professionnels pour espaces restaurés.",
      features: ["Réparation gypse", "Texturage", "Apprêt", "Peinture professionnelle"]
    },
    {
      title: "Coordination Assurance",
      description: "Assistance experte avec réclamations d'assurance, documentation et développement de portée.",
      features: ["Documentation réclamations", "Développement portée", "Liaison assurance", "Rapports progrès"]
    }
  ]

  const emergencyFeatures = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Réponse d'Urgence 24/7",
      description: "Disponibilité 24/7 pour réponse immédiate aux catastrophes et atténuation des dégâts."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Techniciens Certifiés",
      description: "Techniciens certifiés IICRC avec formation spécialisée en restauration de catastrophes."
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Réponse Rapide",
      description: "Temps de réponse rapides pour minimiser les dégâts et prévenir les problèmes secondaires."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Experts Assurance",
      description: "Équipe expérimentée pour aider à naviguer les réclamations d'assurance et maximiser la couverture."
    }
  ]

  const faqData = [
    {
      question: "À quelle rapidité pouvez-vous répondre aux urgences de dégâts d'eau?",
      answer: "Nous fournissons une réponse d'urgence 24/7 et arrivons typiquement dans les 2 heures de votre appel. Une réponse rapide est cruciale pour prévenir la croissance de moisissures et les dégâts structuraux."
    },
    {
      question: "Travaillez-vous avec les compagnies d'assurance?",
      answer: "Oui, nous travaillons directement avec les compagnies d'assurance et pouvons aider à documenter les dégâts, développer les portées de restauration et coordonner le processus de réclamations pour vous."
    },
    {
      question: "Quelles certifications ont vos techniciens?",
      answer: "Nos techniciens sont certifiés IICRC en restauration de dégâts d'eau, restauration de dégâts d'incendie et assainissement de moisissures, assurant un travail de restauration professionnel et sécuritaire."
    },
    {
      question: "Pouvez-vous prévenir les moisissures après dégâts d'eau?",
      answer: "Oui, nous utilisons un équipement de séchage avancé et des traitements antimicrobiens pour prévenir la croissance de moisissures. L'extraction rapide d'eau et le séchage structural sont clés pour la prévention de moisissures."
    },
    {
      question: "Combien de temps prend la restauration de dégâts d'incendie?",
      answer: "Le calendrier dépend de la sévérité des dégâts, mais nous complétons typiquement la restauration d'incendie en 2-4 semaines. Nous fournissons des calendriers détaillés et des mises à jour de progrès régulières."
    },
    {
      question: "Quelles régions servez-vous pour la restauration d'urgence?",
      answer: "Nous servons Ottawa, Gatineau, Carleton, Hull, Aylmer, Orléans, Kanata, Nepean, Gloucester, Ottawa Sud, Barrhaven, Stittsville et régions environnantes avec réponse d'urgence 24/7."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-bg-bn-restore/10 to-bg-bn-glacier">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-bn-restore" />
              <Badge className="bg-bn-restore text-white px-4 py-2 text-lg font-semibold">
                Services de Restauration
              </Badge>
              <Shield className="h-8 w-8 text-bn-restore" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-bn-steel mb-6 text-balance">
              La vision devient réalité grâce à une restauration complète et améliorée par la technologie
            </h1>
            <p className="text-xl text-bn-graphite mb-8 text-pretty leading-relaxed">
              Menant l'avenir grâce à des solutions de restauration d'innovation d'abord. De la récupération de catastrophe à l'assainissement de moisissures, 
              nous restaurons les espaces avec technologie avancée et protocoles de réponse rapide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-bn-restore hover:bg-bn-restore/90 text-white px-8 py-4 text-lg"
                asChild
              >
                <Link href="/fr#contact">
                  Demander Aide d'Urgence
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-bn-restore text-bn-restore hover:bg-bn-restore hover:text-white px-8 py-4 text-lg flex items-center gap-2"
                asChild
              >
                <a href="tel:+15145778776">
                  <Phone className="h-4 w-4" />
                  Urgence: (514) 577-8776
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-bn-restore py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-lg font-semibold">
            🚨 Réponse d'Urgence 24/7 Disponible | Appelez (514) 577-8776 pour Assistance Immédiate
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bn-steel mb-4">
              Nos Services de Restauration
            </h2>
            <p className="text-lg text-bn-graphite max-w-2xl mx-auto">
              Solutions de restauration complètes utilisant technologie avancée pour redonner vie à votre espace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restoreServices.map((service, index) => (
              <Card key={index} className="bg-bn-glacier border-bn-restore overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-bn-steel mb-2">{service.title}</CardTitle>
                  <p className="text-bn-graphite">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-bn-graphite">
                        <CheckCircle className="h-4 w-4 text-bn-restore flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Features */}
      <section className="py-20 bg-bn-steel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bn-white mb-4">
              Pourquoi Choisir Notre Restauration d'Urgence?
            </h2>
            <p className="text-lg text-bn-glacier max-w-2xl mx-auto">
              Restauration améliorée par technologie avec réponse rapide et expertise certifiée.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyFeatures.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-bn-restore/20 p-4 rounded-full">
                    <div className="text-bn-restore">
                      {item.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-bn-white mb-3">{item.title}</h3>
                <p className="text-bn-glacier">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bn-steel mb-4">
              Questions Fréquemment Posées
            </h2>
            <p className="text-lg text-bn-graphite max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur nos services de restauration d'urgence.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-bn-steel">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-bn-graphite">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-20 bg-bn-restore">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin de Restauration d'Urgence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            N'attendez pas - une réponse rapide est cruciale pour la prévention de dégâts. 
            Appelez maintenant pour assistance immédiate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-bn-restore hover:bg-bn-glacier px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/fr#contact">
                Obtenir Soumission Urgence
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-bn-restore px-8 py-4 text-lg flex items-center gap-2"
              asChild
            >
              <a href="tel:+15145778776">
                <Phone className="h-4 w-4" />
                Appeler Ligne Urgence
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
