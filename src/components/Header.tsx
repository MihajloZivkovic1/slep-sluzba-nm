'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-18 h-18">
              <Image
                src="/slep-sluzba-logo.webp"
                alt="Šlep Služba NM Logo"
                width={100}
                height={100}
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Početna
            </Link>
            <Link href="/galerija" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Galerija
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              FAQ
            </Link>
            <Link href="/o-nama" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              O nama
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Kontakt
            </Link>
          </nav>

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
              <Link
                href="/galerija"
                className="block text-gray-700 hover:text-primary-600 font-medium"
                onClick={closeMobileMenu}
              >
                Galerija
              </Link>
              <Link
                href="/faq"
                className="block text-gray-700 hover:text-primary-600 font-medium"
                onClick={closeMobileMenu}
              >
                FAQ
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
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
