"use client"
// Porto-style projects gallery section
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function ProjectsGallery() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      title: "Office Complex Cleanup",
      category: "Post-Construction",
      location: "Ottawa, ON",
      duration: "3 Days",
      team: "8 Specialists",
      image: "/images/before-after.jpg",
      description: "Complete post-construction cleanup of a 50,000 sq ft office complex including floor finishing, window cleaning, and debris removal."
    },
    {
      id: 2,
      title: "Residential Renovation",
      category: "Construction",
      location: "Gatineau, QC",
      duration: "2 Weeks",
      team: "5 Contractors",
      image: "/images/worker-cleaning.jpg",
      description: "Full kitchen and bathroom renovation including demolition, construction, and final cleanup for a residential property."
    },
    {
      id: 3,
      title: "Flood Damage Restoration",
      category: "Emergency",
      location: "Orleans, ON",
      duration: "5 Days",
      team: "6 Technicians",
      image: "/images/disaster-recovery-cleaning-emergency-response-team.jpg",
      description: "Emergency water damage restoration and cleanup following a basement flood, including mold remediation and structural drying."
    },
    {
      id: 4,
      title: "Commercial Fit-out",
      category: "Construction",
      location: "Kanata, ON",
      duration: "3 Weeks",
      team: "12 Specialists",
      image: "/images/team-cleaning.jpg",
      description: "Complete tenant fit-out for a new medical office including construction, electrical work, and final cleaning."
    },
    {
      id: 5,
      title: "Industrial Deep Clean",
      category: "Cleaning",
      location: "Nepean, ON",
      duration: "1 Week",
      team: "10 Cleaners",
      image: "/images/floor-cleaning.jpg",
      description: "Comprehensive deep cleaning of a manufacturing facility including high-dusting, floor refinishing, and equipment cleaning."
    },
    {
      id: 6,
      title: "Fire Damage Cleanup",
      category: "Restoration",
      location: "Barrhaven, ON",
      duration: "4 Days",
      team: "7 Technicians",
      image: "/images/debris-pile.jpg",
      description: "Fire damage cleanup and restoration including smoke odor removal, debris disposal, and structural cleaning."
    }
  ]

  const categories = ["All", "Construction", "Cleaning", "Restoration", "Emergency", "Post-Construction"]

  return (
    <section id="projects" className="py-20 bg-bn-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bn-dark mb-4">
            Our <span className="text-bn-primary">Projects</span>
          </h2>
          <p className="text-lg text-bn-gray max-w-3xl mx-auto">
            Take a look at some of our recent projects. From small residential renovations to large commercial cleanups, 
            we deliver quality results that exceed expectations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                index === 0 
                  ? "bg-bn-primary text-bn-white" 
                  : "bg-bn-light text-bn-gray hover:bg-bn-primary hover:text-bn-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="bg-bn-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-bn-orange text-bn-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-bn-dark mb-3">{project.title}</h3>
                <p className="text-bn-gray mb-4 text-sm">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-bn-gray">
                    <MapPin className="h-4 w-4 text-bn-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-bn-gray">
                    <Calendar className="h-4 w-4 text-bn-primary" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-bn-gray">
                    <Users className="h-4 w-4 text-bn-primary" />
                    <span>{project.team}</span>
                  </div>
                </div>
                
                <button className="flex items-center gap-2 text-bn-primary hover:text-bn-orange transition-colors font-medium">
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-bn-dark mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-bn-gray mb-6 max-w-2xl mx-auto">
            Let us help you bring your vision to life. Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-bn-primary hover:bg-bn-primary/90 text-bn-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Get Free Quote
            </button>
            <button className="border-2 border-bn-primary text-bn-primary hover:bg-bn-primary hover:text-bn-white font-semibold px-8 py-3 rounded-lg transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
