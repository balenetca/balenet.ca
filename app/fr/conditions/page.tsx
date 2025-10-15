import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Conditions de Service - BaleNet Group",
  description: "Conditions de service pour BaleNet Group. Lisez nos termes et conditions pour utiliser nos services.",
  robots: "noindex, nofollow",
  alternates: {
    canonical: "https://www.balenet.ca/fr/conditions",
    languages: {
      'en': 'https://www.balenet.ca/terms',
      'fr': 'https://www.balenet.ca/fr/conditions',
    },
  },
}

export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Conditions de Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Dernière mise à jour : Décembre 2024
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">1. Acceptation des conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                En accédant et utilisant les services de BaleNet Group Inc (« nous », « notre » ou « nos »), 
                vous acceptez et convenez d'être lié par les termes et dispositions de cet accord.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">2. Description des services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                BaleNet Group Inc fournit des services professionnels de nettoyage de construction, restauration et construction incluant :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nettoyer : Services de nettoyage, entretien ménager et maintenance professionnels</li>
                <li>Restaurer : Récupération de catastrophe, nettoyage de dégâts d'eau et services de restauration</li>
                <li>Construire : Démolition, rénovations et services de construction</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">3. Accords de service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Tous les services sont fournis sous réserve d'accords écrits séparés qui spécifieront :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Portée du travail et détails du projet</li>
                <li>Tarification et conditions de paiement</li>
                <li>Calendrier et dates de completion</li>
                <li>Garanties et assurances</li>
                <li>Responsabilité et couverture d'assurance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">4. Conditions de paiement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Les conditions de paiement seront spécifiées dans les accords de service individuels. Généralement :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Les soumissions sont valides 30 jours à partir de la date d'émission</li>
                <li>Le paiement est dû selon l'échéancier dans votre accord de service</li>
                <li>Les paiements en retard peuvent entraîner des frais supplémentaires</li>
                <li>Nous acceptons diverses méthodes de paiement comme spécifié dans les accords</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">5. Politique d'annulation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Les conditions d'annulation varient selon le type de service :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Services de nettoyage réguliers : Avis de 24 heures requis</li>
                <li>Restauration d'urgence : L'annulation peut entraîner des frais de réponse d'urgence</li>
                <li>Projets de construction : Conditions d'annulation spécifiées dans les accords de projet</li>
                <li>Remboursements sujets au travail complété et matériaux utilisés</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">6. Garanties et assurances</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Nous soutenons notre travail avec des garanties complètes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Garantie de qualité sur tous les services effectués</li>
                <li>Périodes de garantie varient selon le type de service comme spécifié dans les accords</li>
                <li>Réponse rapide aux réclamations de garantie et problèmes de service</li>
                <li>Garanties supplémentaires peuvent s'appliquer à des services spécifiques</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">7. Assurance et responsabilité</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                BaleNet Group Inc maintient une couverture d'assurance complète incluant :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Assurance responsabilité générale</li>
                <li>Assurance indemnisation des travailleurs</li>
                <li>Couverture responsabilité professionnelle</li>
                <li>Cautionnement où requis</li>
              </ul>
              <p>
                Notre responsabilité est limitée comme spécifié dans les accords de service individuels.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">8. Sécurité et conformité</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Nous nous engageons envers la sécurité et la conformité :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Tous les employés sont formés aux protocoles de sécurité</li>
                <li>Nous respectons toutes les réglementations et normes applicables</li>
                <li>Équipement et procédures de sécurité appropriés sont utilisés</li>
                <li>Vérifications d'antécédents effectuées sur tout le personnel</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">9. Limitation de responsabilité</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Dans la mesure maximale permise par la loi, la responsabilité de BaleNet Group Inc pour toute réclamation 
                découlant de nos services est limitée au montant payé pour les services spécifiques en question.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">10. Loi applicable</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Ces conditions sont régies par les lois de l'Ontario, Canada. Tout litige sera résolu 
                dans les tribunaux de l'Ontario.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">11. Modifications des conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les changements seront publiés sur cette page 
                avec une date de révision mise à jour.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">12. Informations de contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Pour des questions sur ces Conditions de Service, veuillez nous contacter :
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
