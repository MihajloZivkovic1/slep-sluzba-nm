import type { Metadata } from 'next'
import Gallery from '@/components/Gallery'

export const metadata: Metadata = {
  title: 'Galerija | Šlep Služba Pančevo - Slike sa Terena',
  description: 'Pogledajte galeriju naših intervencija — slep sluzba Pancevo u akciji. Slepovanje automobila, pomoć na putu, transport vozila. Pozovite 060 049 0036.',
}

export default function GalerijaPage() {
  return (
    <div className="pt-8">
      <Gallery />
    </div>
  )
}
