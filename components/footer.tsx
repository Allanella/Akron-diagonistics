'use client'

import Link from 'next/link'
import { Share2, Share, Network, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">A</span>
              </div>
              <h3 className="text-lg font-bold">AKRON</h3>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Leading provider of world-class medical equipment, laboratory supplies, and healthcare infrastructure solutions in Uganda and East Africa.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors" aria-label="Facebook">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors" aria-label="Twitter">
                <Share className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors" aria-label="LinkedIn">
                <Network className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-white/80 hover:text-white transition-colors">
                  Laboratory Solutions
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-white transition-colors">
                  Diagnostics Solutions
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-white transition-colors">
                  Hospital Design
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-white transition-colors">
                  Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#products" className="text-white/80 hover:text-white transition-colors">
                  Medical Equipment
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-white/80 hover:text-white transition-colors">
                  Laboratory Supplies
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-white/80 hover:text-white transition-colors">
                  Diagnostic Equipment
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-white/80 hover:text-white transition-colors">
                  Medical Furniture
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm">
                  London Chambers, Johnston Street
                  <br />
                  Kampala, Uganda
                </p>
              </div>
              <div className="flex gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+256" className="text-white/80 hover:text-white transition-colors text-sm">
                  Available 24/7
                </a>
              </div>
              <div className="flex gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@akrondiagnostics.ug" className="text-white/80 hover:text-white transition-colors text-sm">
                  info@akrondiagnostics.ug
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Akron Diagnostics & Laboratory Supplies Uganda Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
