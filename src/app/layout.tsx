import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallButton from '@/components/StickyCallButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Šlep Služba NM Beograd 24/7 | Hitna Pomoć na Putu | 011/XXX-XXXX',
  description: 'Profesionalna šlep služba u Beogradu i okolini. ⭐ 24/7 dostupnost ⭐ Stižemo za 20 min ⭐ Transparentne cene. Pozovite odmah: 011/XXX-XXXX',
  keywords: 'šlep služba beograd, slep sluzba, pomoć na putu beograd, šlep služba cena, šlep 24h',
  openGraph: {
    title: 'Šlep Služba NM - Hitna Pomoć 24/7 Beograd',
    description: 'Brza šlep služba u Beogradu. Stižemo za 20 minuta. Pozovite odmah!',
    type: 'website',
    locale: 'sr_RS',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  )
}