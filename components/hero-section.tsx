'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, MessageCircle, Shield, Award, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const whatsappClass =
  'inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 hover:bg-green-500/30 hover:text-green-200 transition-all duration-300 group backdrop-blur-sm'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const stats = [
    { icon: Shield, value: '10+', label: 'Years Experience' },
    { icon: Award, value: '500+', label: 'Projects Done' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
  ]

  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-16">
      {/* Background Image */}
      <Image
        src="/hero-laboratory.png"
        alt="Modern Laboratory Environment"
        fill
        className="object-cover absolute inset-0 scale-105"
        priority
        quality={100}
      />

      {/* Layered Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/40 via-transparent to-blue-950/30" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline pill */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 border border-white/20 bg-white/10 backdrop-blur-md shadow-lg"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <p className="text-sm font-semibold text-green-300 tracking-wide uppercase">
            Leading Healthcare Solutions Provider
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.08] tracking-tight text-balance"
        >
          Transforming{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #4ade80, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Healthcare
          </span>{' '}
          Through Advanced{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Lab Solutions
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/75 mb-10 max-w-2xl leading-relaxed text-balance"
        >
          World-class medical equipment, laboratory supplies, diagnostics, hospital design,
          and healthcare infrastructure across{' '}
          <span className="text-green-300 font-semibold">Uganda & East Africa.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold gap-2 px-8 py-6 text-base shadow-xl shadow-green-900/40 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 font-bold gap-2 px-8 py-6 text-base rounded-xl transition-all duration-300 hover:scale-105 hover:border-white/60"
          >
            <Phone className="w-5 h-5" />
            Contact Us
          </Button>
        </motion.div>

        {/* WhatsApp */}
        <motion.div variants={itemVariants} className="mb-14">
          <a href="#" className={whatsappClass}>
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Chat with us on WhatsApp</span>
          </a>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-3 sm:gap-5 w-full max-w-lg"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 px-3 py-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-lg hover:bg-white/15 transition-all duration-300"
            >
              <Icon className="w-5 h-5 text-green-400" />
              <span className="text-2xl font-black text-white">{value}</span>
              <span className="text-xs text-white/60 font-medium text-center leading-tight">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-2.5 bg-gradient-to-b from-green-400 to-blue-400 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  )
}