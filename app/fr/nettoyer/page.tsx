import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Shield, Clock, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services de Nettoyage Professionnel | BaleNet Group Inc",
  description: "La vision devient réalité grâce à des espaces immaculés et innovants. Services de nettoyage professionnel incluant entretien ménager quotidien, nettoyage en profondeur, entretien de planchers et nettoyage post-construction.",
  keywords: [
    "services de nettoyage professionnel",
    "services d'entretien ménager",
    "nettoyage en profondeur",
    "entretien de planchers",
    "nettoyage post-construction",
    "nettoyage de vitres",
    "services de désinfection",
    "nettoyage de poussière en hauteur",
    "services de nettoyage Ottawa",
    "nettoyage Gatineau"
  ],
  alternates: {
    canonical: "https://www.balenet.ca/fr/nettoyer",
    languages: {
      'en': 'https://www.balenet.ca/clean',
      'fr': 'https://www.balenet.ca/fr/nettoyer',
    },
  },
}

export default function NettoyerPage() {
  const cleanServices = [
    {
      title: "Entretien Ménager Quotidien et Nocturne",
      description: "Services de nettoyage quotidiens complets pour maintenir vos espaces impeccables et professionnels.",
      features: ["Nettoyage de bureaux", "Sanitisation des toilettes", "Enlèvement des déchets", "Désinfection des surfaces"]
    },
    {
      title: "Nettoyage en Profondeur et Sanitisation",
      description: "Services de nettoyage en profondeur pour emménagements, nettoyage saisonnier ou événements spéciaux.",
      features: ["Sanitisation complète", "Nettoyage CVCA", "Travail de détail", "Élimination des odeurs"]
    },
    {
      title: "Entretien et Soins des Planchers",
      description: "Soins professionnels des planchers incluant décapage, cirage, polissage et nettoyage de tapis.",
      features: ["Restauration de planchers durs", "Nettoyage de tapis", "Nettoyage de carrelage et joints", "Revêtements protecteurs"]
    },
    {
      title: "Nettoyage Post-Construction",
      description: "Nettoyage complet après projets de construction, enlèvement de poussière, débris et préparation des espaces pour occupation.",
      features: ["Enlèvement de poussière", "Nettoyage de débris de construction", "Finition détaillée", "Inspection de qualité"]
    },
    {
      title: "Nettoyage de Vitres et Verre",
      description: "Services de nettoyage de vitres professionnels pour propriétés résidentielles et commerciales.",
      features: ["Vitres intérieures et extérieures", "Nettoyage en hauteur", "Restauration de verre", "Nettoyage d'écrans"]
    },
    {
      title: "Nettoyage Spécialisé",
      description: "Services de nettoyage spécialisés incluant nettoyage en hauteur, lavage à pression et désinfection.",
      features: ["Services de nettoyage en hauteur", "Lavage à pression", "Protocoles de désinfection", "Nettoyage d'urgence"]
    }
  ]

  const whyChoose = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Innovation d'Abord",
      description: "Technologie de nettoyage de pointe et pratiques durables pour des résultats supérieurs."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Qualité Garantie",
      description: "Garantie de satisfaction à 100% avec inspections de qualité détaillées sur chaque projet."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horaire Flexible",
      description: "Disponibilité 24/7 pour s'adapter à votre horaire et besoins de nettoyage urgents."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Professionnels Formés",
      description: "Personnel vérifié, assuré avec formation continue dans les dernières techniques de nettoyage."
    }
  ]

  const faqData = [
    {
      question: "Quels produits de nettoyage utilisez-vous?",
      answer: "Nous utilisons des produits de nettoyage professionnels écologiques, sûrs pour les personnes, animaux et environnement tout en offrant des résultats de nettoyage supérieurs."
    },
    {
      question: "Fournissez-vous les fournitures et équipements de nettoyage?",
      answer: "Oui, nous apportons toutes les fournitures, équipements et matériaux de nettoyage nécessaires. Nous utilisons des outils et produits de qualité professionnelle pour des résultats optimaux."
    },
    {
      question: "Comment assurez-vous la qualité sur les projets de nettoyage?",
      answer: "Chaque projet de nettoyage inclut des inspections de qualité détaillées, visites avec clients et services de suivi pour assurer une satisfaction complète."
    },
    {
      question: "Pouvez-vous travailler selon mes heures d'affaires?",
      answer: "Absolument. Nous offrons des horaires flexibles incluant nuits, fins de semaine et jours fériés pour minimiser les perturbations à vos opérations commerciales."
    },
    {
      question: "Quelles régions servez-vous pour les services de nettoyage?",
      answer: "Nous servons Ottawa, Gatineau, Carleton, Hull, Aylmer, Orléans, Kanata, Nepean, Gloucester, Ottawa Sud, Barrhaven, Stittsville et régions environnantes."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-bg-bn-clean/10 to-bg-bn-glacier">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-8 w-8 text-bn-clean" />
              <Badge className="bg-bn-clean text-white px-4 py-2 text-lg font-semibold">
                Services de Nettoyage
              </Badge>
              <Sparkles className="h-8 w-8 text-bn-clean" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-bn-steel mb-6 text-balance">
              La vision devient réalité grâce à des espaces immaculés et innovants
            </h1>
            <p className="text-xl text-bn-graphite mb-8 text-pretty leading-relaxed">
              Menant l'avenir grâce à des solutions de nettoyage d'innovation d'abord. De l'entretien ménager quotidien au nettoyage en profondeur, 
              nous transformons les espaces avec une technologie de pointe et des pratiques durables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-bn-clean hover:bg-bn-clean/90 text-white px-8 py-4 text-lg"
                asChild
              >
                <Link href="/fr#contact">
                  Réserver un Nettoyage
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-bn-clean text-bn-clean hover:bg-bn-clean hover:text-white px-8 py-4 text-lg"
                asChild
              >
                <a href="tel:+15145778776">
                  Appeler: (514) 577-8776
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bn-steel mb-4">
              Nos Services de Nettoyage
            </h2>
            <p className="text-lg text-bn-graphite max-w-2xl mx-auto">
              Solutions de nettoyage complètes conçues pour dépasser les attentes et créer des environnements impeccables et sains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cleanServices.map((service, index) => (
              <Card key={index} className="bg-bn-glacier border-bn-clean overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-bn-steel mb-2">{service.title}</CardTitle>
                  <p className="text-bn-graphite">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-bn-graphite">
                        <CheckCircle className="h-4 w-4 text-bn-clean flex-shrink-0" />
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

      {/* Why Choose Us */}
      <section className="py-20 bg-bn-steel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bn-white mb-4">
              Pourquoi Choisir Nos Services de Nettoyage?
            </h2>
            <p className="text-lg text-bn-glacier max-w-2xl mx-auto">
              Approche d'innovation d'abord avec technologie de pointe et pratiques durables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-bn-clean/20 p-4 rounded-full">
                    <div className="text-bn-clean">
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
              Tout ce que vous devez savoir sur nos services de nettoyage professionnel.
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

      {/* CTA Section */}
      <section className="py-20 bg-bn-clean">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à Transformer Votre Espace?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Laissez nos solutions de nettoyage d'innovation d'abord faire de votre vision une réalité. 
            Obtenez une soumission gratuite aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-bn-clean hover:bg-bn-glacier px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/fr#contact">
                Obtenir Soumission Gratuite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-bn-clean px-8 py-4 text-lg"
              asChild
            >
              <a href="tel:+15145778776">
                Appeler (514) 577-8776
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
