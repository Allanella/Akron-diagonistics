'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Users, Building2 } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface Project {
  id: string
  name: string
  location: string
  description: string
  type: string
  team: number
  image: string
  stats: string[]
}

const projects: Project[] = [
  {
    id: '1',
    name: 'Modern Diagnostic Center',
    location: 'Kampala, Uganda',
    description: 'Complete diagnostic facility with state-of-the-art imaging equipment and laboratory',
    type: 'Facility Design & Construction',
    team: 15,
    image: '/diagnostic-equipment.png',
    stats: ['50,000 sq ft', '200+ Bed Capacity', '€5M Investment'],
  },
  {
    id: '2',
    name: 'Regional Hospital Complex',
    location: 'Nairobi, Kenya',
    description: 'Large-scale hospital construction with integrated laboratory and diagnostic services',
    type: 'Hospital Infrastructure',
    team: 25,
    image: '/hospital-facility.png',
    stats: ['150,000 sq ft', '500+ Bed Capacity', '€12M Investment'],
  },
  {
    id: '3',
    name: 'Laboratory Modernization',
    location: 'Dar es Salaam, Tanzania',
    description: 'Upgrade of existing laboratory with new automated analyzers and quality systems',
    type: 'Laboratory Upgrade',
    team: 10,
    image: '/laboratory-analyzers.png',
    stats: ['New Equipment', '2x Capacity', '€2M Investment'],
  },
  {
    id: '4',
    name: 'Primary Health Center Expansion',
    location: 'Gulu, Uganda',
    description: 'Expansion and equipment supply for rural health center serving 100,000+ population',
    type: 'Rural Healthcare',
    team: 12,
    image: '/medical-supplies.png',
    stats: ['20,000 sq ft', '100+ Services', '€1.5M Investment'],
  },
  {
    id: '5',
    name: 'Private Clinic Development',
    location: 'Kampala, Uganda',
    description: 'Modern private healthcare clinic with complete medical furniture and equipment',
    type: 'Private Healthcare',
    team: 8,
    image: '/medical-furniture.png',
    stats: ['10,000 sq ft', '50+ Bed Capacity', '€800K Investment'],
  },
  {
    id: '6',
    name: 'Healthcare Construction Project',
    location: 'Mulago, Uganda',
    description: 'Advanced hospital construction with modern infrastructure and medical systems',
    type: 'Major Infrastructure',
    team: 20,
    image: '/healthcare-construction.png',
    stats: ['100,000 sq ft', '400+ Capacity', '€8M Investment'],
  },
]

export function ProjectsSection() {
  const [selectedType, setSelectedType] = useState('All Projects')
  
  const types = ['All Projects', ...new Set(projects.map((p) => p.type))]
  
  const filteredProjects = selectedType === 'All Projects' ? projects : projects.filter((p) => p.type === selectedType)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing successful healthcare facility projects across Uganda and East Africa
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedType === type
                  ? 'bg-primary text-white'
                  : 'bg-muted text-foreground hover:bg-muted/80 border border-border'
              }`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Type Badge */}
                <span className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-xs font-bold rounded-lg">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Location */}
                <div className="flex items-center gap-2 text-accent text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-primary mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-y border-border">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-xs text-muted-foreground font-medium">{stat}</p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{project.team} Team Members</span>
                  </div>
                  <Button size="sm" variant="outline" className="hover:bg-primary hover:text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
