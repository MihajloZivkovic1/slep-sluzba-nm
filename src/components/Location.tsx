// components/Locations.tsx
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { municipalities } from '../data/municipalities'

export default function Locations() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Pokrivamo ceo Beograd i okolinu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Brza šlep služba dostupna u svim beogradskim opštinama. Prosečno vreme dolaska 15-30 minuta.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {municipalities.map((municipality) => (
            <Link
              key={municipality.slug}
              href={`/slep-sluzba/${municipality.slug}`}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary-200 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary-100 p-3 rounded-full mb-4 group-hover:bg-primary-200 transition-colors">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                  {municipality.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {municipality.description}
                </p>
                <p className="text-xs text-blue-600 mt-1 font-medium">
                  {municipality.info.arrivalTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}