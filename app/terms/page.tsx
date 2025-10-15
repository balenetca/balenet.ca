import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service - BaleNet Group Inc",
  description: "Terms of Service for BaleNet Group Inc. Read our terms and conditions for using our services.",
  robots: "noindex, nofollow",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                By accessing and using the services of BaleNet Group Inc ("we," "our," or "us"), 
                you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">2. Services Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                BaleNet Group Inc provides professional construction cleaning, restoration, and construction services including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Clean: Professional cleaning, janitorial, and maintenance services</li>
                <li>Restore: Disaster recovery, water damage cleanup, and restoration services</li>
                <li>Construct: Demolition, renovations, and construction services</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">3. Service Agreements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                All services are provided subject to separate written agreements that will specify:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Scope of work and project details</li>
                <li>Pricing and payment terms</li>
                <li>Timeline and completion dates</li>
                <li>Warranties and guarantees</li>
                <li>Liability and insurance coverage</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">4. Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Quotes are valid for 30 days from issue date</li>
                <li>Payment is due according to the schedule in your service agreement</li>
                <li>Late payments may incur additional charges</li>
                <li>We accept various payment methods as specified in agreements</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">5. Cancellation Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Cancellation terms vary by service type:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Regular cleaning services: 24-hour notice required</li>
                <li>Emergency restoration: Cancellation may incur emergency response charges</li>
                <li>Construction projects: Cancellation terms specified in project agreements</li>
                <li>Refunds subject to work completed and materials used</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">6. Warranties and Guarantees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We stand behind our work with comprehensive warranties:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Quality guarantee on all services performed</li>
                <li>Warranty periods vary by service type as specified in agreements</li>
                <li>Prompt response to warranty claims and service issues</li>
                <li>Additional warranties may apply to specific services</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">7. Insurance and Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                BaleNet Group Inc maintains comprehensive insurance coverage including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>General liability insurance</li>
                <li>Workers' compensation insurance</li>
                <li>Professional liability coverage</li>
                <li>Bonding where required</li>
              </ul>
              <p>
                Our liability is limited as specified in individual service agreements.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">8. Safety and Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We are committed to safety and compliance:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All employees are trained in safety protocols</li>
                <li>We comply with all applicable regulations and standards</li>
                <li>Proper safety equipment and procedures are used</li>
                <li>Background checks performed on all staff</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">9. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                To the maximum extent permitted by law, BaleNet Group Inc's liability for any claims 
                arising from our services is limited to the amount paid for the specific services in question.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">10. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                These terms are governed by the laws of Ontario, Canada. Any disputes will be resolved 
                in the courts of Ontario.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">11. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We reserve the right to modify these terms at any time. Changes will be posted on this page 
                with an updated revision date.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">12. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>BaleNet Group Inc</strong></p>
                <p>Email: info@balenet.ca</p>
                <p>Phone: (514) 577-8776</p>
                <p>Website: www.balenet.ca</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
