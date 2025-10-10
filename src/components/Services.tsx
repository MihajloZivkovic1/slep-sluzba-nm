import { Truck, Wrench, Car, Phone } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: Car,
    title: 'Šlepovanje automobila',
    description: 'Do 2.5t nosivosti',
    features: ['Putnička vozila', 'Teretna vozila', 'Motocikli', 'Kvadovi'],
    image: '/slep-2.webp'
  },
  {
    icon: Wrench,
    title: 'Pomoć na putu',
    description: 'Startovanje, gume, goriva',
    features: ['Paljenje motora', 'Zamena gume', 'Dovoz goriva', 'Popravke'],
    image: '/slep-sneg.webp'
  },
  {
    icon: Truck,
    title: 'Šlepovanje kombija',
    description: 'Komercijalna vozila',
    features: ['Do 3.5t', 'Dostava robe', 'Servisni kombiji', 'Hladnjače'],
    image: '/slep-kombi.webp'
  },
  {
    icon: Phone,
    title: 'Hitna intervencija',
    description: '24/7 dostupnost',
    features: ['Bez čekanja', 'Brz odziv', 'Profesionalni tim', 'Moderno vozilo'],
    image: '/slep-3.webp'
  }
]

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Naše usluge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kompletne usluge šlep službe i pomoći na putu za sve tipove vozila
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-primary-600 p-4 rounded-xl inline-block mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">
                  {service.description}
                </p>

                {/* Service Image */}
                <div className="mb-4 overflow-hidden rounded-lg h-48 w-full">
                  <Image
                    width={400}
                    height={300}
                    src={service.image}
                    alt={service.title}
                    loading="lazy"  // or omit, as this is default
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>

                <ul className="space-y-2 text-center">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center justify-center text-gray-600"
                    >
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}