'use client'

import Link from 'next/link'
import { Menu, X, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold text-primary">AKRON</h1>
            <p className="text-xs text-muted-foreground">Diagnostics & Lab</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <Link href="#services" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#products" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="#projects" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#about" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#contact" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex gap-2">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              href="#services"
              className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#products"
              className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 space-y-2">
              <Button variant="outline" className="w-full gap-2" size="sm">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
