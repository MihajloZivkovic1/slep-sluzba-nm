import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Camera } from 'lucide-react'

const galleryImages = [
  {
    src: '/galerija/ig-01.jpg',
    alt: 'Slep sluzba Pancevo - slepovanje automobila zimi u gradu',
  },
  {
    src: '/galerija/ig-02.jpg',
    alt: 'Šlep služba NM - prevoz Range Rovera na snegu',
  },
  {
    src: '/galerija/ig-03.jpg',
    alt: 'Slepovanje crvenog Golfa - slep služba Pančevo',
  },
  {
    src: '/galerija/ig-04.jpg',
    alt: 'Transport klasičnog automobila - šlep služba NM Pančevo',
  },
  {
    src: '/galerija/ig-05.jpg',
    alt: 'Slep sluzba - prevoz Škode na platformi',
  },
  {
    src: '/galerija/ig-06.jpg',
    alt: 'Šlepovanje vozila Mercedes platformom - pomoć na putu',
  },
  {
    src: '/galerija/ig-07.jpg',
    alt: 'Slep sluzba Pancevo - transport vozila planinskim putem',
  },
  {
    src: '/galerija/ig-08.jpg',
    alt: 'Noćna intervencija - šlep služba pomoć na putu 0-24',
  },
  {
    src: '/galerija/ig-09.jpg',
    alt: 'Transport tereta i materijala - slep služba NM Pančevo',
  },
  {
    src: '/galerija/ig-10.jpg',
    alt: 'Slepovanje automobila - šlep služba pomoć na putu Pančevo',
  },
]

export default function Gallery() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-7 h-7 text-primary-600" />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Galerija sa Terena
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pogledajte naše intervencije iz Pančeva i okoline — slepovanje, prevoz vozila i pomoć na putu 0-24.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {galleryImages.map((image, index) => (
            <Link
              key={index}
              href="https://www.instagram.com/nm_slepsluzba"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-8">
          <Link
            href="https://www.instagram.com/nm_slepsluzba"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Instagram className="w-5 h-5" />
            Zapratite @nm_slepsluzba
          </Link>
        </div>

        {/* SEO support text */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-gray-500 text-sm leading-relaxed">
            Slep sluzba Pancevo — NM tim pruža profesionalno slepovanje i pomoć na putu u Pančevu i široj okolini.
            Bilo da vam je potreban prevoz neispravnog vozila, hitna intervencija nakon udesa, ili transport automobila na servis — tu smo 0-24, svakog dana u godini.
            Pozovite nas na <strong>060 049 0036</strong> i stižemo za 10 minuta.
          </p>
        </div>
      </div>
    </section>
  )
}
