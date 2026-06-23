'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products and services? We&apos;re here to help. Contact us today for a consultation.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="p-3 bg-accent/10 text-accent rounded-lg h-fit">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Office Location</h4>
                <p className="text-muted-foreground">
                  Akron Diagnostics & Laboratory Supplies Uganda Ltd
                  <br />
                  London Chambers, Johnston Street
                  <br />
                  Kampala, Uganda
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="p-3 bg-accent/10 text-accent rounded-lg h-fit">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground">Available Monday - Friday, 8:00 AM - 5:00 PM</p>
                <a href="tel:+256" className="text-accent font-semibold hover:underline">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="p-3 bg-accent/10 text-accent rounded-lg h-fit">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">info@akrondiagnostics.ug</p>
                <a href="mailto:info@akrondiagnostics.ug" className="text-accent font-semibold hover:underline">
                  Send Email
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="p-3 bg-accent/10 text-accent rounded-lg h-fit">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                <p className="text-muted-foreground">Chat with us for instant support</p>
                <a href="#" className="text-accent font-semibold hover:underline">
                  Open WhatsApp
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="p-3 bg-accent/10 text-accent rounded-lg h-fit">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                <p className="text-muted-foreground">
                  Monday - Friday: 8:00 AM - 5:00 PM
                  <br />
                  Saturday: 9:00 AM - 1:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-border shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Request a Quote</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  placeholder="+256 7XX XXX XXX"
                />
              </div>

              {/* Organization */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  placeholder="Hospital / Laboratory name"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Inquiry Type</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                >
                  <option value="">Select inquiry type...</option>
                  <option value="equipment">Medical Equipment</option>
                  <option value="supplies">Laboratory Supplies</option>
                  <option value="diagnostics">Diagnostics Solutions</option>
                  <option value="hospital">Hospital Design & Construction</option>
                  <option value="infrastructure">Healthcare Infrastructure</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 font-semibold py-2">
                {submitted ? 'Thank You! We&apos;ll Be in Touch Soon' : 'Send Inquiry'}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
