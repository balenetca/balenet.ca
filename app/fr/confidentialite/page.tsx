import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Politique de Confidentialité - BaleNet Group Inc",
  description: "Politique de confidentialité pour BaleNet Group Inc. Apprenez comment nous collectons, utilisons et protégeons vos informations personnelles.",
  robots: "noindex, nofollow",
  alternates: {
    canonical: "https://www.balenet.ca/fr/confidentialite",
    languages: {
      'en': 'https://www.balenet.ca/privacy',
      'fr': 'https://www.balenet.ca/fr/confidentialite',
    },
  },
}

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-lg text-muted-foreground">
              Dernière mise à jour : Décembre 2024
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">1. Informations que nous collectons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Nous collectons les informations que vous nous fournissez directement, par exemple lorsque vous :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remplissez notre formulaire de contact ou demandez une soumission</li>
                <li>Nous appelez ou communiquez avec nous par courriel</li>
                <li>Planifiez une visite de site ou consultation</li>
                <li>Utilisez nos services</li>
              </ul>
              <p>
                Ces informations peuvent inclure votre nom, adresse courriel, numéro de téléphone, 
                adresse de propriété, détails du projet, et toute autre information que vous choisissez de fournir.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">2. Comment nous utilisons vos informations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Nous utilisons les informations collectées pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fournir, maintenir et améliorer nos services</li>
                <li>Traiter et répondre à vos demandes et demandes de soumission</li>
                <li>Planifier et effectuer des visites de site et consultations</li>
                <li>Communiquer avec vous sur nos services et projets</li>
                <li>Vous envoyer des avis techniques, mises à jour et messages de support</li>
                <li>Respecter les obligations légales et protéger nos droits</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">3. Partage d'informations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Nous ne vendons, n'échangeons, ni ne transférons vos informations personnelles à des tiers 
                sauf dans les circonstances suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Avec votre consentement explicite</li>
                <li>Pour respecter les obligations légales ou ordonnances judiciaires</li>
                <li>Pour protéger nos droits, propriété ou sécurité, ou celle de nos clients ou d'autres</li>
                <li>En relation avec un transfert commercial, fusion ou acquisition</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">4. Sécurité des données</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos informations 
                personnelles contre l'accès non autorisé, l'altération, la divulgation ou la destruction. Cependant, 
                aucune méthode de transmission sur internet ou de stockage électronique n'est sécurisée à 100%.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">5. Cookies et suivi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Notre site web peut utiliser des cookies et technologies de suivi similaires pour améliorer votre expérience 
                de navigation et analyser le trafic du site web. Vous pouvez contrôler les paramètres de cookies via vos 
                préférences de navigateur.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">6. Vos droits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Vous avez le droit de :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Accéder et mettre à jour vos informations personnelles</li>
                <li>Demander la suppression de vos informations personnelles</li>
                <li>Vous désabonner des communications marketing</li>
                <li>Demander une copie de vos données</li>
              </ul>
              <p>
                Pour exercer ces droits, veuillez nous contacter à info@balenet.ca ou appeler (514) 577-8776.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">7. Modifications de cette politique</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Nous vous informerons de tout changement 
                en publiant la nouvelle Politique de Confidentialité sur cette page et en mettant à jour la date "Dernière mise à jour".
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">8. Nous contacter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Si vous avez des questions sur cette Politique de Confidentialité, veuillez nous contacter :
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>BaleNet Group Inc</strong></p>
                <p>Courriel : info@balenet.ca</p>
                <p>Téléphone : (514) 577-8776</p>
                <p>Site web : www.balenet.ca</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
