// components/Trust.tsx
import { Star, Shield, Clock, Users } from 'lucide-react'

const stats = [
  {
    icon: Users,
    number: '1170+',
    label: 'Uspešno prevezenih vozila',
    color: 'text-primary-600'
  },
  {
    icon: Star,
    number: '4.9',
    label: 'Prosečna ocena',
    color: 'text-accent-600'
  },
  {
    icon: Clock,
    number: '7',
    label: 'Godina iskustva',
    color: 'text-green-600'
  },
  {
    icon: Shield,
    number: '100%',
    label: 'Licencirano i osigurano',
    color: 'text-purple-600'
  }
]

const reviews = [
  {
    name: 'Marko Petrović',
    rating: 5,
    text: 'Stigli su za 15 minuta u 2 ujutru. Profesionalno i brzo rešili problem.',
    location: 'Novi Beograd'
  },
  {
    name: 'Ana Jovanović',
    rating: 5,
    text: 'Odličan servis, pristojni ljudi. Preporučujem svima!',
    location: 'Zemun'
  },
  {
    name: 'Stefan Nikolić',
    rating: 5,
    text: 'Fer cena, brza usluga. Definitivno pozivam ponovo ako zatreba.',
    location: 'Vračar'
  }
]

export default function Trust() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      <div className="container-custom">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Zašto nas biraju
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-12">
            Godinama smo lideri u pružanju usluga šlep službe u Beogradu
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                    <IconComponent className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-primary-200 text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Šta kažu naši klijenti
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                  ))}
                </div>
                <p className="text-primary-100 mb-4 italic">
                  &quot;{review.text}&quot;
                </p>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-primary-300 text-sm">{review.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}