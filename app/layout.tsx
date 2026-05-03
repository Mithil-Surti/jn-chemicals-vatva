import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  icons: { icon: '/images/Screenshot 2026-05-03 151733.png' },
  title: { default: 'J.N. Chemicals – Premium Disinfectant & Chemical Solutions', template: '%s | J.N. Chemicals' },
  description: 'J.N. Chemicals, Vatva GIDC Ahmedabad – manufacturer of premium disinfectants and industrial chemicals since 1983. Every product tested before delivery.',
  keywords: ['disinfectant', 'chemical manufacturer', 'Ahmedabad', 'GIDC', 'industrial chemicals', 'ALCOCID', 'HANDICIDE'],
  openGraph: {
    siteName: 'J.N. Chemicals',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
