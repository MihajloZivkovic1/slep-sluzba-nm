
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

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
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Glavne lokacije</h4>
            <ul className="space-y-3">
              <li><Link href="/slep-sluzba/novi-beograd" className="text-gray-400 hover:text-white transition-colors">Novi Beograd</Link></li>
              <li><Link href="/slep-sluzba/zemun" className="text-gray-400 hover:text-white transition-colors">Zemun</Link></li>
              <li><Link href="/slep-sluzba/vozdovac" className="text-gray-400 hover:text-white transition-colors">Voždovac</Link></li>
              <li><Link href="/slep-sluzba/zvezdara" className="text-gray-400 hover:text-white transition-colors">Zvezdara</Link></li>
              <li><Link href="/lokacije" className="text-gray-400 hover:text-white transition-colors">Sve lokacije</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Šlep Služba NM. Sva prava zadržana.
            </p>
            <Link href="https://asarum-tech.com/sr/" className="text-gray-400 hover:text-white text-sm transition-colors">
              Asarum-tech
            </Link>
            <div className="flex space-x-6 mt-4 md:mt-0">
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
