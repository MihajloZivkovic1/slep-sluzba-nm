import Image from 'next/image'
import Link from 'next/link'
import { Instagram } from 'lucide-react'

const posts = [
  {
    image: '/slep-2.webp',
    alt: 'Šlep služba Pančevo - šlepovanje automobila',
  },
  {
    image: '/slep-sneg.webp',
    alt: 'Pomoć na putu zimi - šlep služba Pančevo',
  },
  {
    image: '/slep-kombi.webp',
    alt: 'Šlepovanje kombija - šlep služba NM',
  },
  {
    image: '/slep-3.webp',
    alt: 'Hitna intervencija - šlep služba Pančevo 0-24',
  },
]

export default function InstagramFeed() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-7 h-7 text-pink-500" />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Pratite nas na Instagramu
            </h2>
          </div>
          <p className="text-gray-600 text-lg">
            @nm_slepsluzba — slike sa terena iz Pančeva i okoline
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {posts.map((post, index) => (
            <Link
              key={index}
              href="https://www.instagram.com/nm_slepsluzba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                unoptimized
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <Instagram className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="https://www.instagram.com/nm_slepsluzba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Instagram className="w-5 h-5" />
            Zapratite @nm_slepsluzba
          </Link>
        </div>
      </div>
    </section>
  )
}
