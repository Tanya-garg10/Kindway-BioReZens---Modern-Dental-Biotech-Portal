import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactWidget from '@/components/ContactWidget'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand'
})

export const metadata: Metadata = {
  title: 'Kindway BioReZens - Dental Implants & Biotech Solutions',
  description: 'Leading dental manufacturing startup offering advanced dental implants, biomaterials, training programs, and mobile dental clinic services. Innovation, Quality & Precision.',
  keywords: 'dental implants, bone graft materials, dental training, implant workshops, mobile dental clinic, dental outreach programs, biorezens, kindway',
  authors: [{ name: 'Kindway BioReZens' }],
  openGraph: {
    title: 'Kindway BioReZens - Dental Implants & Biotech Solutions',
    description: 'Advanced dental implants, biomaterials, and training programs',
    url: 'https://kindwaybiorezens.com',
    siteName: 'Kindway BioReZens',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kindway BioReZens',
    description: 'Innovation, Quality & Precision in Dental Care',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${quicksand.variable} font-sans antialiased`} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ContactWidget />
      </body>
    </html>
  )
}
