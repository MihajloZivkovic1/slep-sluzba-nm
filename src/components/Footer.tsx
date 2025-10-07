import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <h3 className="text-2xl font-bold mb-6">Šlep Služba NM</h3>
            <p className="text-gray-400 mb-6">
              Profesionalna šlep služba u Beogradu i okolini. Dostupni 24/7 za sve hitne situacije.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent-400" />
                <Link href="tel:+381600490036" className="hover:text-accent-400 transition-colors">
                  +381600490036
                </Link>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent-400" />
                <Link href="mailto:info@slepsluzbanm.rs" className="hover:text-accent-400 transition-colors">
                  slepsluzbanm@gmail.com
                </Link>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-accent-400" />
                <span>Beograd, Srbija</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-accent-400" />
                <span>24/7 Dostupni</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Pratite nas</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com/slepsluzbanm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-400 transition-colors group"
                >
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://instagram.com/slepsluzbanm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-400 transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Glavne lokacije</h4>
            <ul className="space-y-3">
              <li><Link href="/slep-sluzba/novi-beograd" className="text-gray-400 hover:text-white transition-colors">Novi Beograd</Link></li>
              <li><Link href="/slep-sluzba/zemun" className="text-gray-400 hover:text-white transition-colors">Zemun</Link></li>
              <li><Link href="/slep-sluzba/vozdovac" className="text-gray-400 hover:text-white transition-colors">Voždovac</Link></li>
              <li><Link href="/slep-sluzba/zvezdara" className="text-gray-400 hover:text-white transition-colors">Zvezdara</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Šlep Služba NM. Sva prava zadržana.
            </p>

            {/* Asarum Tech - Better Design */}
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

            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privatnost
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Uslovi korišćenja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}