'use client'
import { Phone, MapPin, Clock, Mail, Star, CheckCircle } from 'lucide-react';
import Link from 'next/link'

export default function ContactPage() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   phone: '',
  //   location: '',
  //   message: '',
  //   serviceType: 'slepovanje'
  // });



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Emergency Header */}
      {/* <div className="sticky top-0 z-50 bg-red-600 text-white py-3 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">HITNA POMOĆ 24/7</span>
          </div>
          <a
            href="tel:+381600490036"
            className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            onClick={() => typeof gtag !== 'undefined' && gtag('event', 'phone_call')}
          >
            <Phone className="w-4 h-4 inline mr-2" />
            +381600490036
          </a>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Kontaktirajte Nas Odmah
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Dostupni smo 24/7 za hitnu pomoć na putu
          </p>

          {/* Primary Contact Methods */}
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <a
              href="tel:+381600490036"
              className="bg-yellow-500 text-black py-4 px-6 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
              onClick={() => typeof gtag !== 'undefined' && gtag('event', 'phone_call')}
            >
              <Phone className="w-6 h-6" />
              POZOVITE ODMAH
            </a>

            {/* <a
              href="https://wa.me/381113334444?text=Potrebna%20mi%20je%20slep%20sluzba"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Chat
            </a> */}
          </div>

          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Stižemo za 20 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>4.9/5 ocena</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontakt Informacije</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Telefon za Hitne Slučajeve</h3>
                      <a
                        href="tel:+381600490036"
                        className="text-2xl font-bold text-blue-600 hover:text-blue-800"
                        onClick={() => typeof gtag !== 'undefined' && gtag('event', 'phone_call')}
                      >
                        +381600490036
                      </a>
                      <p className="text-sm text-gray-600">Dostupno 24/7</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Sedište</h3>
                      <p className="text-gray-700">Pančevo i okolina</p>
                      <p className="text-sm text-gray-600">Pokrivamo ceo Beograd + 30km radius</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Radno Vreme</h3>
                      <p className="text-xl font-bold text-green-600">24/7</p>
                      <p className="text-sm text-gray-600">Non-stop dostupnost</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a
                        href="mailto:info@slepsluzbanm.rs"
                        className="text-purple-600 hover:text-purple-800"
                      >
                        info@slepsluzbanm.rs
                      </a>
                      <p className="text-sm text-gray-600">Za opšte informacije</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}

          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pokrivamo Sledeće Oblasti</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="space-y-1">
                <p className="font-medium text-blue-600">Centar Beograda:</p>
                <ul className="text-gray-600 space-y-1">
                  <li>
                    <Link href="/slep-sluzba/stari-grad" className="hover:text-blue-600 hover:underline">
                      • Stari Grad
                    </Link>
                  </li>
                  <li>
                    <Link href="/slep-sluzba/vracar" className="hover:text-blue-600 hover:underline">
                      • Vračar
                    </Link>
                  </li>
                  <li>
                    <Link href="/slep-sluzba/savski-venac" className="hover:text-blue-600 hover:underline">
                      • Savski Venac
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-blue-600">Novi Beograd:</p>
                <ul className="text-gray-600 space-y-1">
                  <li>
                    <Link href="/slep-sluzba/novi-beograd" className="hover:text-blue-600 hover:underline">
                      • Novi Beograd
                    </Link>
                  </li>
                  <li>
                    <Link href="/slep-sluzba/zemun" className="hover:text-blue-600 hover:underline">
                      • Zemun
                    </Link>
                  </li>
                  <li>
                    <Link href="/slep-sluzba/surcin" className="hover:text-blue-600 hover:underline">
                      • Surčin
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-blue-600">Južni Deo:</p>
                <ul className="text-gray-600 space-y-1">
                  <li>
                    <Link href="/slep-sluzba/vozdovac" className="hover:text-blue-600 hover:underline">
                      • Voždovac
                    </Link>
                  </li>
                  <li>
                    <Link href="/slep-sluzba/zvezdara" className="hover:text-blue-600 hover:underline">
                      • Zvezdara
                    </Link>
                  </li>
                  <li>
                    <Link href="/slep-sluzba/grocka" className="hover:text-blue-600 hover:underline">
                      • Grocka
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-blue-600">Okolina:</p>
                <ul className="text-gray-600 space-y-1">
                  <li>
                    <Link href="/slep-sluzba/pancevo" className="hover:text-blue-600 hover:underline">
                      • Pančevo
                    </Link>
                  </li>
                  <li>
                    <Link href="/slep-sluzba/smederevo" className="hover:text-blue-600 hover:underline">
                      • Smederevo
                    </Link>
                  </li>
                  <li>
                    <Link href="/slep-sluzba/indjija" className="hover:text-blue-600 hover:underline">
                      • Inđija
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}