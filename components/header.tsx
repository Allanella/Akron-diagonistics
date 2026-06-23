'use client'

import Link from 'next/link'
import { Menu, X, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-slate-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm" />
            <Image
              src="/logo.jpeg"
              alt="Akron Diagnostics & Lab"
              width={52}
              height={52}
              className="relative rounded-xl object-contain border border-slate-100 shadow-md"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className="text-[1.25rem] font-black tracking-widest uppercase"
              style={{
                background: 'linear-gradient(90deg, #16a34a, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AKRON
            </span>
            <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-slate-400 uppercase">
              Diagnostics & Lab
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {['Services', 'Products', 'Projects', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-green-600 transition-colors group"
            >
              {item}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 group-hover:w-4/5 transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-green-200 text-green-700 hover:bg-green-50 hover:border-green-400 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
          <Button
            size="sm"
            className="gap-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-md hover:shadow-lg transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Gradient accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-green-400 via-blue-400 to-green-400 opacity-60" />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {['Services', 'Products', 'Projects', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="pt-3 space-y-2 border-t border-slate-100 mt-2">
              <Button variant="outline" className="w-full gap-2 border-green-200 text-green-700 hover:bg-green-50" size="sm">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
              <Button
                className="w-full gap-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                size="sm"
              >
                <Phone className="w-3.5 h-3.5" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}