import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy - BaleNet Group Inc",
  description: "Privacy Policy for BaleNet Group Inc. Learn how we collect, use, and protect your personal information.",
  robots: "noindex, nofollow",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fill out our contact form or request a quote</li>
                <li>Call us or communicate with us via email</li>
                <li>Schedule a site visit or consultation</li>
                <li>Use our services</li>
              </ul>
              <p>
                This information may include your name, email address, phone number, 
                property address, project details, and any other information you choose to provide.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and respond to your inquiries and quote requests</li>
                <li>Schedule and conduct site visits and consultations</li>
                <li>Communicate with you about our services and projects</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">3. Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety, or that of our customers or others</li>
                <li>In connection with a business transfer, merger, or acquisition</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">5. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing 
                experience and analyze website traffic. You can control cookie settings through your browser preferences.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">6. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
              <p>
                To exercise these rights, please contact us at info@balenet.ca or call (514) 577-8776.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">7. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">8. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                If you have any questions about this Privacy Policy, please contact us:
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
