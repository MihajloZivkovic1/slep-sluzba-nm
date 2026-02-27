import { Metadata } from 'next'
import PriceCalculator from '@/components/PriceCalculator'

export const metadata: Metadata = {
  title: 'Cenovnik Šlep Službe Pančevo | Povoljne Cene 0-24 | Šlep Služba NM',
  description: 'Transparentan cenovnik šlep službe u Pančevu. Cene od 3.000 RSD. Kalkulator za brzo izračunavanje troškova šlepanja. ☎ 060/049-0036',
  keywords: 'šlep služba cena pančevo, cenovnik šlepanja pančevo, koliko košta šlep služba pančevo'
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
            Bez skrivenih troškova. Fer cene za sve naše usluge šlep službe u Pančevu i okolini.
          </p>
        </div>

        <PriceCalculator />
      </div>
    </div>
  )
}
