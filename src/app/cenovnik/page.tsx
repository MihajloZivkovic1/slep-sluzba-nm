import { Metadata } from 'next'
import PriceCalculator from '@/components/PriceCalculator'

export const metadata: Metadata = {
  title: 'Cenovnik Šlep Službe | Transparentne Cene | Šlep Služba NM Beograd',
  description: 'Pogledajte naš transparentni cenovnik šlep službe. Cene od 2.500 RSD. Kalkulator za brzo izračunavanje troškova šlepanja u Beogradu.',
  keywords: 'šlep služba cena, cenovnik šlepanja, koliko košta šlep služba beograd'
}

export default function CenovnikPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cenovnik
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bez skrivenih troškova. Fer cene za sve naše usluge šlep službe u Beogradu i okolini.
          </p>
        </div>

        <PriceCalculator />
      </div>
    </div>
  )
}
