'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingCart, Filter, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  category: string
  price: string
  image: string
  description: string
  specs: string[]
}

const products: Product[] = [
  {
    id: '1',
    name: 'Automated Blood Analyzer',
    category: 'Laboratory Equipment',
    price: 'Contact for Quote',
    image: '/laboratory-analyzers.png',
    description: 'High-throughput automated hematology analyzer',
    specs: ['Samples/Hour: 120', 'Accuracy: 99.8%', 'CE Certified'],
  },
  {
    id: '2',
    name: 'Digital Ultrasound System',
    category: 'Diagnostic Equipment',
    price: 'Contact for Quote',
    image: '/diagnostic-equipment.png',
    description: 'Advanced portable ultrasound imaging system',
    specs: ['4D Imaging', 'Wireless Probe', 'Cloud Integration'],
  },
  {
    id: '3',
    name: 'Chemistry Analyzer',
    category: 'Laboratory Equipment',
    price: 'Contact for Quote',
    image: '/laboratory-analyzers.png',
    description: 'Clinical chemistry analyzer with full automation',
    specs: ['Tests/Hour: 600', 'Reagent Management', 'Auto Calibration'],
  },
  {
    id: '4',
    name: 'Medical Furniture Suite',
    category: 'Healthcare Furniture',
    price: 'Contact for Quote',
    image: '/medical-furniture.png',
    description: 'Complete medical examination and operation furniture',
    specs: ['Ergonomic Design', 'Infection Control', 'Easy Cleaning'],
  },
  {
    id: '5',
    name: 'Laboratory Consumables Package',
    category: 'Supplies',
    price: 'Contact for Quote',
    image: '/medical-supplies.png',
    description: 'Complete package of sterile laboratory consumables',
    specs: ['ISO Certified', 'Sterile Packaging', 'Volume Discount'],
  },
  {
    id: '6',
    name: 'Hospital Grade Equipment Bundle',
    category: 'Equipment Bundle',
    price: 'Contact for Quote',
    image: '/hospital-facility.png',
    description: 'Comprehensive hospital equipment and supply package',
    specs: ['Custom Selection', 'Installation Support', 'Training Included'],
  },
]

const categories = ['All Products', 'Laboratory Equipment', 'Diagnostic Equipment', 'Healthcare Furniture', 'Supplies', 'Equipment Bundle']

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
    <section id="products" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Product Catalog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our comprehensive range of medical equipment and laboratory supplies
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="mb-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary border border-primary hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-2">
                  {product.category}
                </span>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

                {/* Specs */}
                <div className="space-y-1 mb-6">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-foreground">
                      <span className="w-1 h-1 bg-accent rounded-full" />
                      {spec}
                    </div>
                  ))}
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <Button size="sm" className="gap-2 bg-accent hover:bg-accent/90">
                    <ShoppingCart className="w-4 h-4" />
                    Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            View Complete Catalog
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
