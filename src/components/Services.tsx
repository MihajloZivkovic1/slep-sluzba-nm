import { Truck, Wrench, Car, Phone, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Car,
    title: 'Šlepovanje automobila',
    description: 'Do 2.5t nosivosti',
    features: ['Putnička vozila', 'Teretna vozila', 'Motocikli', 'Kvadovi'],
    color: 'bg-primary-600',
  },
  {
    icon: Wrench,
    title: 'Pomoć na putu',
    description: 'Startovanje, gume, goriva',
    features: ['Paljenje motora', 'Zamena gume', 'Dovoz goriva', 'Popravke'],
    color: 'bg-green-600',
  },
  {
    icon: Truck,
    title: 'Šlepovanje kombija',
    description: 'Komercijalna vozila',
    features: ['Do 3.5t', 'Dostava robe', 'Servisni kombiji', 'Hladnjače'],
    color: 'bg-purple-600',
  },
  {
    icon: Phone,
    title: 'Hitna intervencija',
    description: '0-24 dostupnost',
    features: ['Bez čekanja', 'Brz odziv', 'Profesionalni tim', 'Moderno vozilo'],
    color: 'bg-red-600',
  }
]

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Naše usluge
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Kompletne usluge šlep službe i pomoći na putu za sve tipove vozila
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-primary-600 font-semibold text-sm mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-600 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="tel:+381600490036"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Phone className="w-6 h-6 mr-2" />
            Trebate pomoć? Pozovite 060 049 0036
          </Link>
        </div>
      </div>
    </section>
  )
}
