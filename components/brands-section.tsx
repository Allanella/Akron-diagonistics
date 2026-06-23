'use client'

import { motion } from 'framer-motion'

const brands = [
  'Siemens Healthcare',
  'Roche Diagnostics',
  'Abbott Laboratories',
  'Philips Healthcare',
  'GE Healthcare',
  'Hitachi Medical',
  'Mindray Medical',
  'Bio-Rad Laboratories',
]

export function BrandsSection() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 bg-muted/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Trusted Partners</h2>
          <p className="text-muted-foreground">We partner with leading global medical manufacturers and technology brands</p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center p-4 bg-white rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-2 group-hover:from-primary/40 group-hover:to-accent/40 transition-colors">
                  <span className="text-sm font-bold text-primary group-hover:scale-110 transition-transform">{brand.substring(0, 1)}</span>
                </div>
                <p className="text-xs font-semibold text-foreground line-clamp-2">{brand}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scrolling Marquee for Mobile */}
        <div className="mt-8 overflow-hidden">
          <motion.div
            className="flex gap-4 whitespace-nowrap"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 bg-white rounded-lg border border-border text-sm font-medium text-foreground"
              >
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
