'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const municipalities = [
  { name: 'Stari Grad', slug: 'stari-grad' },
  { name: 'Vračar', slug: 'vracar' },
  { name: 'Novi Beograd', slug: 'novi-beograd' },
  { name: 'Zemun', slug: 'zemun' },
  { name: 'Voždovac', slug: 'vozdovac' },
  { name: 'Zvezdara', slug: 'zvezdara' },
  { name: 'Čukarica', slug: 'cukarica' },
  { name: 'Rakovica', slug: 'rakovica' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false)
    setIsLocationsOpen(false)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-18 h-18">
              <Image
                src="/slep-sluzba-logo.png"
                alt="Šlep Služba NM Logo"
                width={100}
                height={100}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Početna
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Lokacije
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="grid grid-cols-2 gap-2 p-4">
                  {municipalities.map((municipality) => (
                    <Link
                      key={municipality.slug}
                      href={`/slep-sluzba/${municipality.slug}`}
                      className="text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded transition-colors"
                    >
                      {municipality.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/cenovnik" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Cenovnik
            </Link>
            <Link href="/o-nama" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              O nama
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Kontakt
            </Link>
          </nav>

          {/* Desktop Call Button */}
          <Link
            href="tel:+38111XXXXXXX"
            className="hidden lg:flex items-center btn-call"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'phone_call', {
                  event_category: 'engagement',
                  event_label: 'header_call'
                });
              }
            }}
          >
            <Phone className="w-5 h-5 mr-2" />
            011/XXX-XXXX
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-primary-600"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-gray-700 hover:text-primary-600 font-medium"
                onClick={closeMobileMenu}
              >
                Početna
              </Link>
              <button
                onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                className="flex items-center w-full text-left text-gray-700 hover:text-primary-600 font-medium"
              >
                Lokacije
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLocationsOpen && (
                <div className="pl-4 space-y-2">
                  {municipalities.map((municipality) => (
                    <Link
                      key={municipality.slug}
                      href={`/slep-sluzba/${municipality.slug}`}
                      className="block text-sm text-gray-600 hover:text-primary-600"
                      onClick={closeMobileMenu}
                    >
                      {municipality.name}
                    </Link>
                  ))}
                </div>
              )}
              <Link
                href="/cenovnik"
                className="block text-gray-700 hover:text-primary-600 font-medium"
                onClick={closeMobileMenu}
              >
                Cenovnik
              </Link>
              <Link
                href="/o-nama"
                className="block text-gray-700 hover:text-primary-600 font-medium"
                onClick={closeMobileMenu}
              >
                O nama
              </Link>
              <Link
                href="/kontakt"
                className="block text-gray-700 hover:text-primary-600 font-medium"
                onClick={closeMobileMenu}
              >
                Kontakt
              </Link>
              <Link
                href="tel:+38111XXXXXXX"
                className="flex items-center justify-center btn-call w-full"
                onClick={() => {
                  closeMobileMenu();
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'phone_call', {
                      event_category: 'engagement',
                      event_label: 'mobile_menu_call'
                    });
                  }
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                011/XXX-XXXX
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}