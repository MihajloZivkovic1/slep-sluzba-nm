'use client'
import Link from 'next/link'
import { Phone, Clock, MapPin, Star } from 'lucide-react'
import Image from 'next/image'
export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Optimized Background Image */}
      <Image
        src="/slep-2.webp"
        alt="Šlep služba Beograd - 24/7 dostupni"
        fill
        priority
        fetchPriority="high"
        quality={90}
        sizes="100vw"
        className="object-cover"
      />
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

      <div className="container-custom relative z-10 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs md:text-sm font-medium flex items-center">
              <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-accent-400" />
              24/7 Dostupni
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs md:text-sm font-medium flex items-center">
              <Star className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-accent-400" />
              15 Godina Iskustva
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs md:text-sm font-medium flex items-center">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-accent-400" />
              Licencirani
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
            Šlep Služba Pančevo
            <span className="block text-accent-400">24/7</span>
            <span className="block text-xl md:text-3xl lg:text-4xl text-gray-200 font-normal mt-1 md:mt-2">
              Stižemo za 10-20 min
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Hitna pomoć na putu. Dostupni non-stop za sve hitne situacije u Beogradu i okolini.
          </p>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-10 px-4">
            <Link
              href="tel:+381600490036"
              className=" btn-yellow text-white font-bold py-4 md:py-5 px-6 md:px-8 rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 text-lg md:text-xl flex items-center justify-center w-full sm:w-auto"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'phone_call', {
                    event_category: 'engagement',
                    event_label: 'hero_main_cta'
                  });
                }
              }}
            >
              <Phone className="w-6 h-6 md:w-7 md:h-7 mr-2 animate-pulse" />
              <div className="flex flex-col items-start">
                <span className="text-sm md:text-base">POZOVITE ODMAH</span>
                <span className="text-base md:text-lg font-normal">060/049-0036</span>
              </div>
            </Link>
            {/* 
            <Link
              href="https://wa.me/3810600490036?text=Potrebna%20mi%20je%20slep%20sluzba"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              WhatsApp Chat
            </Link> */}
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-3 gap-2 md:gap-6 text-center px-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-5">
              <div className="text-accent-400 text-lg md:text-3xl font-bold mb-0.5 md:mb-1">20min</div>
              <div className="text-gray-200 text-[10px] leading-tight md:text-base">Prosečno vreme dolaska</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-5">
              <div className="text-accent-400 text-lg md:text-3xl font-bold mb-0.5 md:mb-1">24/7</div>
              <div className="text-gray-200 text-[10px] leading-tight md:text-base">Dostupni non-stop</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-5">
              <div className="text-accent-400 text-lg md:text-3xl font-bold mb-0.5 md:mb-1">3000din</div>
              <div className="text-gray-200 text-[10px] leading-tight md:text-base">Cena vec od (RSD)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}