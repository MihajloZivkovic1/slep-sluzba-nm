import { Phone, Truck, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    number: '1',
    title: 'Pozovite nas',
    description: 'Javite nam lokaciju i tip problema',
    color: 'bg-accent-400 text-gray-900',
  },
  {
    icon: Truck,
    number: '2',
    title: 'Stižemo za 10 min',
    description: 'Naše vozilo kreće odmah ka vama',
    color: 'bg-primary-600 text-white',
  },
  {
    icon: CheckCircle,
    number: '3',
    title: 'Problem rešen',
    description: 'Bezbedno vas prevozimo gde treba',
    color: 'bg-green-600 text-white',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Kako funkcioniše?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="text-center relative">
                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gray-300" />
                )}

                <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg`}>
                  <IconComponent className="w-9 h-9" />
                </div>

                <div className="text-sm font-bold text-gray-400 mb-1">KORAK {step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
