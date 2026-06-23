import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'
import { ServicesSection } from '@/components/services-section'
import { ProductsSection } from '@/components/products-section'
import { ProjectsSection } from '@/components/projects-section'
import { BrandsSection } from '@/components/brands-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProductsSection />
      <ProjectsSection />
      <BrandsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
