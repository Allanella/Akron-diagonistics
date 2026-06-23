'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Beaker, Building2, TrendingUp, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  image: string
  features: string[]
}

const services: Service[] = [
  {
    id: 'laboratory',
    title: 'Laboratory Solutions',
    description: 'Comprehensive laboratory equipment and supplies for diagnostics and testing',
    icon: <Beaker className="w-8 h-8" />,
    image: '/laboratory-analyzers.png',
    features: ['Advanced Analyzers', 'Quality Assurance', 'Consumables Supply'],
  },
  {
    id: 'diagnostics',
    title: 'Diagnostics Solutions',
    description: 'State-of-the-art diagnostic equipment and imaging technology',
    icon: <TrendingUp className="w-8 h-8" />,
    image: '/diagnostic-equipment.png',
    features: ['Imaging Technology', 'Point-of-Care Testing', 'System Integration'],
  },
  {
    id: 'hospital',
    title: 'Hospital Design & Construction',
    description: 'Professional hospital design and healthcare facility construction services',
    icon: <Building2 className="w-8 h-8" />,
    image: '/hospital-facility.png',
    features: ['Master Planning', 'Infrastructure Design', 'Regulatory Compliance'],
  },
  {
    id: 'infrastructure',
    title: 'Healthcare Infrastructure',
    description: 'Complete healthcare infrastructure solutions and maintenance services',
    icon: <Zap className="w-8 h-8" />,
    image: '/healthcare-construction.png',
    features: ['Systems Integration', 'Technical Support', 'Maintenance Plans'],
  },
]

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare solutions tailored to meet the needs of modern medical facilities
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
