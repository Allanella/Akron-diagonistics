'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="relative w-full h-screen min-h-screen overflow-hidden pt-16">
      {/* Background Image */}
      <Image
        src="/hero-laboratory.png"
        alt="Modern Laboratory Environment"
        fill
        className="object-cover absolute inset-0"
        priority
        quality={100}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6 border border-accent/40">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <p className="text-sm font-medium text-accent">Leading Healthcare Solutions Provider</p>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Transforming Healthcare Through Advanced Medical & Laboratory Solutions
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl text-balance"
        >
          Providing world-class medical equipment, laboratory supplies, diagnostics solutions, hospital design, and healthcare infrastructure services across Uganda and East Africa.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold gap-2 px-8">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold gap-2 px-8">
            <Phone className="w-5 h-5" />
            Contact Us
          </Button>
        </motion.div>

        {/* WhatsApp Quick Link */}
        <motion.div variants={itemVariants} className="mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors group"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm">Chat with us on WhatsApp</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}
