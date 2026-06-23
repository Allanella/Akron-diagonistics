'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface StatItem {
  number: number
  label: string
  suffix?: string
}

const stats: StatItem[] = [
  { number: 500, label: 'Healthcare Facilities Served', suffix: '+' },
  { number: 1000, label: 'Medical Equipment Supplied', suffix: '+' },
  { number: 25, label: 'Years of Experience', suffix: '+' },
  { number: 99.8, label: 'Customer Satisfaction Rate', suffix: '%' },
]

function AnimatedCounter({ number, suffix = '' }: { number: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 100
    const stepDuration = duration / steps
    const increment = number / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [inView, number])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
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
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Our Impact in Healthcare</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serving healthcare institutions across Uganda and East Africa with world-class solutions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center p-8 rounded-xl bg-white border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                <AnimatedCounter number={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-sm sm:text-base text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
