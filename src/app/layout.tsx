import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallButton from '@/components/StickyCallButton'
import UrgencyBar from '@/components/UrgencyBar'
import StructuredData from '@/components/StructuredData'
import Script from "next/script"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Šlep Služba Pančevo 0-24 | Stižemo za 10 min | Pozovite Odmah',
  description: 'Šlep služba Pančevo i okolina — dostupni 0-24. Stižemo za 10 minuta. Slepovanje svih vozila, pomoc na putu. Povoljne cene od 3000 RSD. ☎ 060 049 0036',
  keywords: 'šlep služba pančevo, slep sluzba pancevo, šlep pančevo, pomoć na putu pančevo, šlep služba cena, šlep 0-24, slep sluzba',
  openGraph: {
    title: 'Šlep Služba Pančevo 0-24 | Stižemo za 10 min',
    description: 'Profesionalna šlep služba u Pančevu i okolini. Stižemo za 10 minuta. Povoljne cene. Pozovite odmah!',
    type: 'website',
    locale: 'sr_RS',
  },
  icons: {
    icon: '/slep-sluzba-logo.png',
    shortcut: '/slep-sluzba-logo.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/slep-sluzba-logo.png',
      }
    ],
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
      <head>
        <StructuredData />
        {/* Google Tag Manager - Place as high in head as possible */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PQL4XKKF');`,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) - Immediately after opening body tag */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQL4XKKF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <UrgencyBar />
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