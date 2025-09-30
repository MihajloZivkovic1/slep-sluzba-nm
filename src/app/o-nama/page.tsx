'use client'

import { Phone, MessageCircle, Shield, Star, CheckCircle } from 'lucide-react';

// Type for gtag function
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function AboutPage() {
  const trackPhoneCall = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_call');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Emergency Header */}
      {/* <div className="sticky top-0 z-50 bg-green-600 text-white py-3 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">HITNA POMOĆ 24/7</span>
          </div>
          <a
            href="tel:+381600490036"
            className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            onClick={trackPhoneCall}
          >
            <Phone className="w-4 h-4 inline mr-2" />
            011/333-4444
          </a>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Šlep Služba NM Beograd 24/7
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Profesionalna šlep služba u Beogradu i okolini
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-200">
            Već 15 godina pružamo pouzdanu hitnu pomoć na putu. Naš tim iskusnih profesionalaca dostupan je 24 sata dnevno, 7 dana u nedelji za sve vaše potrebe šlepovanja i pomoći na putu.
          </p>

          <div className="flex items-center justify-center gap-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>15+ godina iskustva</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>12.700+ vozila</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-300" />
              <span>Licencirani servis</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Naša Priča</h2>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                Šlep Služba NM osnovana je 2009. godine sa jasnim ciljem - pružanje brze, pouzdane i profesionalne pomoći vozačima u nevolji. Počeli smo kao mala porodična firma sa jednim šlep vozilom i velikim srcem za pomaganje ljudima.
              </p>
              <p>
                Danas smo prepoznatljiva šlep služba u Beogradu i okolini, sa moderne flotom vozila i timom od preko 10 iskusnih vozača i tehničara. Naše sedište u Pančevu omogućava nam brzu pokrivenost celokupne beogradske aglomeracije.
              </p>
              <p>
                Gennem godine rada, uspešno smo prevezli preko <span className="font-bold text-blue-600">12.700 vozila</span> i pomogli hiljadama vozača u hitnim situacijama. Naša reputacija građena je na poverenju, brzini i profesionalnosti.
              </p>
            </div>
          </div>

          {/* Responsive Map Container */}
          <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.6228569955565!2d20.642398612299097!3d44.869972072768725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7eebd82398f7%3A0x23fd3a9aac1ff1a!2z0JLQvtGY0LLQvtC00LUg0KDQsNC00L7QvNC40YDQsCDQn9GD0YLQvdC40LrQsCAxMiwg0J_QsNC90YfQtdCy0L4gMzAwMjA5!5e0!3m2!1ssr!2srs!4v1758896135285!5m2!1ssr!2srs"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Šlep Služba NM - Lokacija u Pančevu"
            />
          </div>
        </div>

        {/* Coverage Area */}
        <div className="bg-gray-100 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Teritorija Koju Pokrivamo</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-blue-600 mb-3">Centar Beograda</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>Stari Grad</li>
                <li>Vračar</li>
                <li>Savski Venac</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-3">Novi Beograd i Okolina</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>Novi Beograd</li>
                <li>Zemun</li>
                <li>Surčin</li>
                <li>Cukarica</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-3">Južni Deo + Okolina</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>Voždovac</li>
                <li>Zvezdara</li>
                <li>Pančevo</li>
                <li>Smederevo</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6">
            <strong>Ukupno pokrivamo:</strong> Ceo Beograd + 30km radius oko grada
          </p>
        </div>

        {/* Team Section */}
        <div className="lg:col-span-2 pb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Naš Tim</h3>
          <p className="text-gray-700 mb-4">
            Naš tim čine iskusni profesionalci sa dugogodišnjim iskustvom u oblasti šlepovanja i pomoći na putu. Svaki član našeg tima prošao je specijalnu obuku i poseduje sve potrebne licence.
          </p>
          <p className="text-gray-700 mb-6">
            Ponosan sam na naš tim koji radi sa puno posvećenosti i razumevanja za situacije u kojima se naši klijenti nalaze. Kada vas pozovete, možete biti sigurni da dolazimo sa jednim ciljem - da brzo i bezbedno rešimo vaš problem.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 font-medium">
              &quot;Naša misija je da budemo tu kada nas najpotrebniji - u hitnim situacijama kada vam je potrebna brza i pouzdana pomoć. &quot;
            </p>
            <p className="text-blue-600 text-sm mt-2">- Nikola, Vlasnik Šlep Službe NM</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Potrebna Vam Je Hitna Pomoć?</h3>
          <p className="text-lg mb-6 text-green-100">
            Ne čekajte - pozovite odmah i stići ćemo za 20 minuta!
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
            <a
              href="tel:+381600490036"
              className="bg-yellow-500 text-black py-3 px-6 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
              onClick={trackPhoneCall}
            >
              <Phone className="w-5 h-5" />
              POZOVI ODMAH
            </a>

            <a
              href="https://wa.me/381113334444?text=Potrebna%20mi%20je%20slep%20sluzba"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}