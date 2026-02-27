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
        alt="Šlep služba Pančevo - 0-24 dostupni"
        fill
        priority
        fetchPriority="high"
        quality={90}
        sizes="100vw"
        className="object-cover"
        unoptimized
      />
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

      <div className="container-custom relative z-10 py-14 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs md:text-sm font-medium flex items-center">
              <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-accent-400" />
              0-24 Dostupni
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs md:text-sm font-medium flex items-center">
              <Star className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-accent-400" />
              7 Godina Iskustva
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs md:text-sm font-medium flex items-center">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 text-accent-400" />
              Licencirani
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-8 leading-tight">
            Šlep Služba Pančevo
            <span className="block text-accent-400 mt-1">0-24</span>
          </h1>

          {/* Emotional subtitle */}
          <p className="text-lg md:text-2xl text-gray-100 mb-4 md:mb-6 max-w-3xl mx-auto px-4 font-medium">
            Auto vam stao? Ne brinite — stižemo za 10 minuta.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Profesionalna pomoć na putu u Pančevu i okolini. Povoljne cene, bez skrivenih troškova.
          </p>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
            <Link
              href="tel:+381600490036"
              className="btn-yellow text-white font-bold py-4 md:py-5 px-8 md:px-10 rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25 text-lg md:text-xl flex items-center justify-center w-full sm:w-auto animate-cta-pulse"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'phone_call', {
                    event_category: 'engagement',
                    event_label: 'hero_main_cta'
                  });
                }
              }}
            >
              <Phone className="w-6 h-6 md:w-7 md:h-7 mr-3 animate-pulse" />
              <div className="flex flex-col items-start">
                <span className="text-sm md:text-base">POZOVITE ODMAH</span>
                <span className="text-base md:text-lg font-normal">060 049 0036</span>
              </div>
            </Link>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 text-center px-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-5">
              <div className="text-accent-400 text-xl md:text-3xl font-bold mb-1 md:mb-2">10min</div>
              <div className="text-gray-200 text-xs md:text-base">Prosečno vreme dolaska</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-5">
              <div className="text-accent-400 text-xl md:text-3xl font-bold mb-1 md:mb-2">1170+</div>
              <div className="text-gray-200 text-xs md:text-base">Prevezenih vozila</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-5">
              <div className="text-accent-400 text-xl md:text-3xl font-bold mb-1 md:mb-2">⭐ 4.9</div>
              <div className="text-gray-200 text-xs md:text-base">Google ocena</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
