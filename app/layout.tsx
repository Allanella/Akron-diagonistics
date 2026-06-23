import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Akron Diagnostics & Laboratory Supplies Uganda Ltd | Medical Equipment & Laboratory Solutions',
  description: 'Leading provider of world-class medical equipment, laboratory supplies, diagnostics solutions, hospital design, and healthcare infrastructure services across Uganda and East Africa.',
  keywords: 'medical equipment, laboratory supplies, diagnostics solutions, hospital design, healthcare infrastructure, Uganda, East Africa',
  generator: 'v0.app',
  openGraph: {
    title: 'Akron Diagnostics & Laboratory Supplies Uganda Ltd',
    description: 'Premium healthcare and laboratory solutions provider in Uganda and East Africa',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1b4f72' },
    { media: '(prefers-color-scheme: dark)', color: '#94d3e8' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
