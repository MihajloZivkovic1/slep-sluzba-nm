'use client'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

const pancevoAreas = [
  'Starčevo', 'Omoljica', 'Kačarevo', 'Borča',
  'Ovča', 'Padinska Skela', 'Opovo', 'Kovin'
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 py-10 md:py-14">
        <div className="container-custom text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Potrebna vam je hitna pomoć?</h3>
          <p className="text-primary-200 text-lg mb-6">Pozovite odmah — dostupni smo 0-24, 365 dana u godini.</p>
          <Link
            href="tel:+381600490036"
            className="inline-flex items-center bg-accent-400 hover:bg-accent-500 text-gray-900 font-bold py-4 px-10 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'phone_call', {
                  event_category: 'engagement',
                  event_label: 'footer_cta'
                });
              }
            }}
          >
            <Phone className="w-6 h-6 mr-3" />
            060 049 0036
          </Link>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Šlep Služba NM</h3>
            <p className="text-gray-400 mb-6">
              Profesionalna šlep služba u Pančevu i okolini. Dostupni 0-24 za sve hitne situacije.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent-400" />
                <Link href="tel:+381600490036" className="hover:text-accent-400 transition-colors">
                  060 049 0036
                </Link>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent-400" />
                <Link href="mailto:slepsluzbanm@gmail.com" className="hover:text-accent-400 transition-colors">
                  slepsluzbanm@gmail.com
                </Link>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-accent-400" />
                <span>Pančevo, Srbija</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-accent-400" />
                <span>0-24 Dostupni</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Pratite nas</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/nm.slep.sluzba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-400 transition-colors group"
                >
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://www.instagram.com/nm_slepsluzba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-400 transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pančevo i okolina */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              <MapPin className="w-4 h-4 inline mr-1 text-accent-400" />
              Pančevo i okolina
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {pancevoAreas.map((area) => (
                <span key={area} className="text-gray-400 text-sm py-1">{area}</span>
              ))}
            </div>
          </div>

          {/* Beograd lokacije */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Beograd</h4>
            <ul className="space-y-2">
              <li><Link href="/slep-sluzba/novi-beograd" className="text-gray-400 hover:text-white transition-colors text-sm">Novi Beograd</Link></li>
              <li><Link href="/slep-sluzba/zemun" className="text-gray-400 hover:text-white transition-colors text-sm">Zemun</Link></li>
              <li><Link href="/slep-sluzba/vozdovac" className="text-gray-400 hover:text-white transition-colors text-sm">Voždovac</Link></li>
              <li><Link href="/slep-sluzba/zvezdara" className="text-gray-400 hover:text-white transition-colors text-sm">Zvezdara</Link></li>
              <li><Link href="/slep-sluzba/palilula" className="text-gray-400 hover:text-white transition-colors text-sm">Palilula</Link></li>
              <li><Link href="/slep-sluzba/cukarica" className="text-gray-400 hover:text-white transition-colors text-sm">Čukarica</Link></li>
            </ul>
          </div>

          {/* Brzi linkovi */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stranice</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Početna</Link></li>
              <li><Link href="/o-nama" className="text-gray-400 hover:text-white transition-colors text-sm">O nama</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/kontakt" className="text-gray-400 hover:text-white transition-colors text-sm">Kontakt</Link></li>
              <li><Link href="/cenovnik" className="text-gray-400 hover:text-white transition-colors text-sm">Cenovnik</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Šlep Služba NM. Sva prava zadržana.
            </p>

            {/* Asarum Tech */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Dizajn & razvoj:</span>
              <Link
                href="https://asarum-tech.com/sr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-accent-300 font-medium transition-colors flex items-center gap-1"
              >
                Asarum Tech
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom padding for mobile sticky bar */}
      <div className="md:hidden h-16" />
    </footer>
  )
}
