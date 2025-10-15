import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Wrench, HardHat, Clock, Users, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services de Construction et Rénovation | BaleNet Group",
  description: "La vision devient réalité grâce à des constructions innovantes et des solutions intelligentes. Démolition professionnelle, aménagements locataires, rénovations et améliorations d'installations avec méthodes de construction de pointe.",
  keywords: [
    "services de démolition",
    "aménagements locataires",
    "rénovations",
    "améliorations d'installations",
    "services de construction",
    "rénovation de bâtiments",
    "aménagements de bureaux",
    "mises à jour conformité",
    "fermetures liste de finition",
    "construction Ottawa",
    "rénovations Gatineau"
  ],
  alternates: {
    canonical: "https://www.balenet.ca/fr/construire",
    languages: {
      'en': 'https://www.balenet.ca/construct',
      'fr': 'https://www.balenet.ca/fr/construire',
    },
  },
}

export default function ConstruirePage() {
  const constructServices = [
    {
      title: "Démolition et Préparation de Site",
      description: "Services de démolition sécuritaires et efficaces avec élimination appropriée des déchets et préparation de site pour nouvelle construction.",
      features: ["Démolition intérieure", "Enlèvement sélectif", "Nettoyage de site", "Élimination déchets"]
    },
    {
      title: "Améliorations Locataires et Aménagements",
      description: "Projets complets d'amélioration locataires incluant aménagements de bureaux, espaces commerciaux et rénovations commerciales.",
      features: ["Design de bureaux", "Aménagements commerciaux", "Planification d'espace", "Finition personnalisée"]
    },
    {
      title: "Rénovations et Reconfigurations",
      description: "Services de rénovation professionnels pour propriétés résidentielles et commerciales avec solutions de design modernes.",
      features: ["Rénovations cuisine", "Remodelage salle de bain", "Reconfigurations bureaux", "Redesign intérieur"]
    },
  ]

  const whyChoose = [
    {
      icon: <HardHat className="h-6 w-6" />,
      title: "Licencié et Assuré",
      description: "Contracteurs entièrement licenciés avec couverture d'assurance complète pour tranquillité d'esprit."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Artisanat de Qualité",
      description: "Artisans qualifiés avec attention aux détails et engagement envers un travail supérieur."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Livraison à Temps",
      description: "Expertise en gestion de projet assure complétion en temps opportun dans les contraintes budgétaires."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Équipe Expérimentée",
      description: "Équipe professionnelle avec années d'expérience en projets de construction et rénovation."
    }
  ]

  const faqData = [
    {
      question: "Fournissez-vous des estimations gratuites pour projets de construction?",
      answer: "Oui, nous fournissons des estimations détaillées et gratuites pour tous projets de construction et rénovation. Nos estimations incluent matériaux, main-d'œuvre et projections de calendrier."
    },
    {
      question: "Êtes-vous licenciés et assurés pour travaux de construction?",
      answer: "Oui, nous sommes des contracteurs entièrement licenciés avec couverture complète d'assurance responsabilité et d'indemnisation des travailleurs."
    },
    {
      question: "Combien de temps prennent typiquement les projets de construction?",
      answer: "Les calendriers de projet varient selon portée et complexité. Nous fournissons des calendriers détaillés pendant le processus d'estimation et vous tenons informés tout au long du projet."
    },
    {
      question: "Gérez-vous les permis et inspections?",
      answer: "Oui, nous pouvons assister avec applications de permis et coordonner inspections avec autorités locales dans le cadre de nos services de construction."
    },
    {
      question: "Quels types de projets de construction gérez-vous?",
      answer: "Nous gérons projets résidentiels et commerciaux incluant démolitions, rénovations et aménagements locataires."
    },
    {
      question: "Fournissez-vous des garanties sur travaux de construction?",
      answer: "Oui, nous fournissons des garanties complètes sur tous travaux de construction et matériaux, avec termes spécifiques décrits dans nos contrats."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-bg-bn-construct/10 to-bg-bn-glacier">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Wrench className="h-8 w-8 text-bn-construct" />
              <Badge className="bg-bn-construct text-white px-4 py-2 text-lg font-semibold">
                Services de Construction
              </Badge>
              <Wrench className="h-8 w-8 text-bn-construct" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-bn-steel mb-6 text-balance">
              La vision devient réalité grâce à des constructions innovantes et des solutions intelligentes
            </h1>
            <p className="text-xl text-bn-graphite mb-8 text-pretty leading-relaxed">
              Menant l'avenir grâce à des solutions de construction d'innovation d'abord. De la démolition aux rénovations, 
              nous construisons avec méthodes de pointe et pratiques durables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-bn-construct hover:bg-bn-construct/90 text-white px-8 py-4 text-lg"
                asChild
              >
                <Link href="/fr#contact">
                  Commencer Votre Projet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-bn-construct text-bn-construct hover:bg-bn-construct hover:text-white px-8 py-4 text-lg"
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
              Nos Services de Construction
            </h2>
            <p className="text-lg text-bn-graphite max-w-2xl mx-auto">
              Solutions de construction complètes conçues pour donner vie à votre vision avec méthodes innovantes et artisanat de qualité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constructServices.map((service, index) => (
              <Card key={index} className="bg-bn-glacier border-bn-construct overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-bn-steel mb-2">{service.title}</CardTitle>
                  <p className="text-bn-graphite">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-bn-graphite">
                        <CheckCircle className="h-4 w-4 text-bn-construct flex-shrink-0" />
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
              Pourquoi Choisir Nos Services de Construction?
            </h2>
            <p className="text-lg text-bn-glacier max-w-2xl mx-auto">
              Approche d'innovation d'abord avec professionnels licenciés et artisanat de qualité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-bn-construct/20 p-4 rounded-full">
                    <div className="text-bn-construct">
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
              Tout ce que vous devez savoir sur nos services de construction et rénovation.
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
      <section className="py-20 bg-bn-construct">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à Construire Votre Vision?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Laissez nos solutions de construction d'innovation d'abord faire de votre vision une réalité. 
            Commencez votre projet aujourd'hui avec une estimation gratuite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-bn-construct hover:bg-bn-glacier px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/fr#contact">
                Obtenir Estimation Gratuite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-bn-construct px-8 py-4 text-lg"
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
