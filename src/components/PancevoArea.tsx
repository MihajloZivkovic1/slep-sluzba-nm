import { MapPin, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const surroundingAreas = [
  {
    name: 'Starčevo',
    description: 'Najbliže mesto, brz pristup',
    arrivalTime: '5-10 min',
  },
  {
    name: 'Omoljica',
    description: 'Južno od Pančeva',
    arrivalTime: '10-15 min',
  },
  {
    name: 'Kačarevo',
    description: 'Industrijska zona',
    arrivalTime: '10-15 min',
  },
  {
    name: 'Borča',
    description: 'Preko pančevačkog mosta',
    arrivalTime: '15-20 min',
  },
  {
    name: 'Ovča',
    description: 'Blizu Borče i Pančeva',
    arrivalTime: '15-20 min',
  },
  {
    name: 'Padinska Skela',
    description: 'Severno od Borče',
    arrivalTime: '18-25 min',
  },
  {
    name: 'Opovo',
    description: 'Jugoistočno od Pančeva',
    arrivalTime: '15-20 min',
  },
  {
    name: 'Kovin',
    description: 'Put ka Smederevskoj Palanci',
    arrivalTime: '20-30 min',
  },
]

export default function PancevoArea() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Pokrivamo Pančevo i okolinu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naša baza je u Pančevu. Stižemo za 10-20 minuta u celu okolinu.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {surroundingAreas.map((area) => (
            <div
              key={area.name}
              className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-accent-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary-100 p-3 rounded-full mb-3 md:mb-4">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-base md:text-lg">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {area.description}
                </p>
                <div className="flex items-center text-accent-600 font-medium text-sm">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  {area.arrivalTime}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Belgrade pages */}
        <div className="text-center mt-10">
          <Link
            href="/slep-sluzba/novi-beograd"
            className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium text-lg transition-colors"
          >
            Pokrivamo i ceo Beograd — pogledajte lokacije
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
