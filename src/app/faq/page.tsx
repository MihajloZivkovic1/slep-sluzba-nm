'use client'
import Link from 'next/link';
import { JSX, useState } from 'react';

// Type for gtag function
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

interface FAQItem {
  id: string;
  question: string;
  answer: JSX.Element;
}

interface PriceRowProps {
  service: string;
  price: string;
}

const PriceRow: React.FC<PriceRowProps> = ({ service, price }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-300 last:border-0">
    <span className="text-black">{service}</span>
    <span className="font-bold text-black">{price}</span>
  </div>
);

const CoverageGrid: React.FC<{ areas: string[] }> = ({ areas }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-4">
    {areas.map((area, index) => (
      <div
        key={index}
        className="bg-green-500 text-white py-3 px-4 rounded-lg text-center font-medium text-sm hover:bg-green-600 transition-colors duration-200"
      >
        {area}
      </div>
    ))}
  </div>
);

// FAQ Schema for structured data
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Koliko košta šlep služba u Pančevu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Osnovna cena šlep službe u Pančevu je od 3.000 RSD za prva 10 km. Za svaki dodatni kilometar naplaćujemo 150 RSD. Noćni rad (22:00-06:00) ima dodatak od 30%. Prosečna cena u Pančevu iznosi 3.000-4.000 RSD."
      }
    },
    {
      "@type": "Question",
      "name": "Šta raditi kada stane auto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1. Upalite migavce 2. Postavite trougao 30-50m iza vozila 3. Maknite se sa kolovoza 4. Pozovite šlep službu 060/049-0036 5. Sačekajte na bezbednom mestu van vozila."
      }
    },
    {
      "@type": "Question",
      "name": "Najbolja šlep služba blizu mene - kako da znam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Šlep Služba NM nudi: 0-24 dostupnost, brz odaziv za 10-20 minuta, 7 godina iskustva sa preko 1170 uspešnih intervencija, licencirani i osigurani, transparentne cene od 3000 RSD, moderna oprema za vozila do 3.5t."
      }
    },
    {
      "@type": "Question",
      "name": "Da li stvarno radite non-stop 0-24?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DA! Radimo 365 dana u godini, 0-24. Imamo dežurnu ekipu za noćne smene, radimo tokom svih praznika, ne odustajemo zbog loših vremenskih uslova. Pozovite 060/049-0036 bilo kada."
      }
    },
    {
      "@type": "Question",
      "name": "Koje oblasti pokrivate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pokrivamo Pančevo i celu okolinu: Starčevo, Omoljica, Kačarevo, Borča, Ovča, Padinska Skela, Opovo, Kovin. Takođe pokrivamo i ceo Beograd: Stari Grad, Vračar, Novi Beograd, Zemun, Voždovac, Zvezdara, Čukarica, Rakovica, Palilula."
      }
    },
    {
      "@type": "Question",
      "name": "Koliko brzo stižete na lokaciju?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pančevo i okolina: 10-20 minuta. Beograd centar: 20-30 minuta. Novi Beograd, Zemun: 15-25 minuta. Ostale opštine: 25-35 minuta. Vreme može varirati zavisno od saobraćaja."
      }
    },
    {
      "@type": "Question",
      "name": "Koje usluge nudite?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nudimo kompletne usluge: šlepovanje automobila do 2.5t, šlepovanje kombija do 3.5t, pomoć na putu (startovanje, zamena gume, dovoz goriva, otvaranje zaključanog vozila), prevoz do servisa, i transport teške mehanizacije na zahtev."
      }
    }
  ]
};

const FAQPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const faqItems: FAQItem[] = [
    {
      id: 'pricing',
      question: 'Koliko košta šlep služba u Pančevu?',
      answer: (
        <div>
          <div className="bg-gray-50 rounded-lg p-6 my-4 border-2 border-blue-200 text-black">
            <PriceRow service="Osnovna cena (do 10km)" price="3000 RSD" />
            <PriceRow service="Svaki dodatni kilometar" price="150 RSD" />
            <PriceRow service="Noćni rad (22:00-06:00)" price="+30%" />
            <div className="flex justify-between items-center py-4 bg-blue-800 text-white font-semibold px-6 -mx-6 -mb-6 mt-4 rounded-b-lg">
              <span>Prosečna cena u Pančevu</span>
              <span className="font-bold text-lg">3000-4000 RSD</span>
            </div>
          </div>
          <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 my-4 rounded">
            <strong className="text-black">💡 Savet:</strong>
            <span className="text-black ml-2">Cena se računa od našeg stajanja do odredišta. Nema skrivenih troškova - sve je transparentno!</span>
          </div>
        </div>
      )
    },
    {
      id: 'breakdown',
      question: 'Šta raditi kada stane auto?',
      answer: (
        <div>
          <p className="text-lg font-medium mb-4 text-black">Sledite ove korake za vašu bezbednost:</p>
          <ul className="space-y-3 mb-4">
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              <strong className="text-black">1. Upalite migavce</strong>
              <span className="text-black ml-2">- odmah signalizirajte opasnost</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              <strong className="text-black">2. Postavite trougao</strong>
              <span className="text-black ml-2">- 30-50m iza vozila</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              <strong className="text-black">3. Maknite se sa kolovoza</strong>
              <span className="text-black ml-2">- izađite na bezbednu stranu</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              <strong className="text-black">4. Pozovite nas:</strong>
              <span className="text-black ml-2">060/049-0036</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              <strong className="text-black">5. Sačekajte na sigurnom</strong>
              <span className="text-black ml-2">- van vozila, dalje od saobraćaja</span>
            </li>
          </ul>
          <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
            <strong className="text-black">⚠️ Važno:</strong>
            <span className="text-black ml-2">Nikad ne pokušavajte da popravljate vozilo na prometnoj saobraćajnici!</span>
          </div>
        </div>
      )
    },
    {
      id: 'best-service',
      question: 'Najbolja šlep služba blizu mene - kako da znam?',
      answer: (
        <div>
          <p className="text-lg font-medium mb-4 text-black">Evo zašto je Šlep Služba NM najbolji izbor:</p>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              ✅ <strong className="text-blue-800">0-24 dostupnost</strong>
              <span className="text-gray-700 ml-2">- bez pauze, svaki dan</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              ✅ <strong className="text-blue-800">Brz odaziv</strong>
              <span className="text-gray-700 ml-2">- stižemo za 10-20 minuta u Pančevu</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              ✅ <strong className="text-blue-800">7 godina iskustva</strong>
              <span className="text-gray-700 ml-2">- preko 1170 uspešnih intervencija</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              ✅ <strong className="text-blue-800">Licencirani i osigurani</strong>
              <span className="text-gray-700 ml-2">- potpuna sigurnost</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              ✅ <strong className="text-blue-800">Transparentne cene</strong>
              <span className="text-gray-700 ml-2">- od 3000 RSD, bez skrivenih troškova</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              ✅ <strong className="text-blue-800">Moderna oprema</strong>
              <span className="text-gray-700 ml-2">- vozila do 3.5t nosivosti</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: '24-hours',
      question: 'Da li stvarno radite non-stop 0-24?',
      answer: (
        <div>
          <p className="text-lg font-medium mb-4 text-black"><strong>DA! Radimo 365 dana u godini, 0-24.</strong></p>
          <ul className="space-y-3 mb-4">
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              🌙 <strong className="text-black">Noćne smene</strong>
              <span className="text-black ml-2">- uvek imamo dežurnu ekipu</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              🎄 <strong className="text-black">Praznici</strong>
              <span className="text-black ml-2">- radimo i tokom božićnih i novogodišnjih praznika</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              ⛈️ <strong className="text-black">Loši vremenski uslovi</strong>
              <span className="text-black ml-2">- ne odustajemo zbog kiše ili snega</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              🚗 <strong className="text-black">Hitni slučajevi</strong>
              <span className="text-black ml-2">- prioritet imaju opasne situacije</span>
            </li>
          </ul>
          <div className="bg-blue-800 text-white p-4 rounded-lg border-l-4 border-yellow-400">
            <strong className="text-white">📞 Pozovite bilo kada:</strong>
            <span className="ml-2">060/049-0036 - uvek će vam se neko javiti!</span>
          </div>
        </div>
      )
    },
    {
      id: 'coverage',
      question: 'Koje oblasti pokrivate?',
      answer: (
        <div>
          <p className="text-lg font-medium mb-4 text-black"><strong>Pokrivamo Pančevo, okolinu i ceo Beograd:</strong></p>

          <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">📍 Pančevo i okolina:</h4>
          <CoverageGrid areas={['Pančevo', 'Starčevo', 'Omoljica', 'Kačarevo', 'Borča', 'Ovča', 'Padinska Skela', 'Opovo', 'Kovin']} />

          <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">🏛️ Beograd:</h4>
          <CoverageGrid areas={['Stari Grad', 'Vračar', 'Savski Venac', 'Novi Beograd', 'Zemun', 'Voždovac', 'Zvezdara', 'Čukarica', 'Rakovica', 'Palilula']} />
        </div>
      )
    },
    {
      id: 'response-time',
      question: 'Koliko brzo stižete na lokaciju?',
      answer: (
        <div>
          <p className="text-lg font-medium mb-4 text-black"><strong>Prosečno vreme dolaska:</strong></p>
          <ul className="space-y-3 mb-4">
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              📍 <strong className="text-black">Pančevo i okolina:</strong>
              <span className="text-black ml-2">10-20 minuta</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              🏙️ <strong className="text-black">Beograd centar:</strong>
              <span className="text-black ml-2">20-30 minuta</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              🌆 <strong className="text-black">Novi Beograd, Zemun:</strong>
              <span className="text-black ml-2">15-25 minuta</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              🏘️ <strong className="text-black">Ostale opštine:</strong>
              <span className="text-black ml-2">25-35 minuta</span>
            </li>
          </ul>
          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
            <strong className="text-black">⏱️ Napomena:</strong>
            <span className="text-black ml-2">Vreme može varirati zavisno od saobraćajne situacije i vremenskih uslova.</span>
          </div>
        </div>
      )
    },
    {
      id: 'services',
      question: 'Koje usluge nudite?',
      answer: (
        <div>
          <p className="text-lg font-medium mb-4 text-black"><strong>Kompletne usluge šlep službe i pomoći na putu:</strong></p>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              🚗 <strong className="text-black">Šlepovanje automobila</strong>
              <span className="text-black ml-2">- do 2.5t nosivosti</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              🚐 <strong className="text-black">Šlepovanje kombija</strong>
              <span className="text-black ml-2">- komercijalna vozila do 3.5t</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              🔧 <strong className="text-black">Pomoć na putu:</strong>
              <ul className="mt-2 ml-6 space-y-1 text-black">
                <li>• Startovanje akumulatora</li>
                <li>• Menjanje guma</li>
                <li>• Dopremanje goriva</li>
                <li>• Otvaranje zaključanog vozila</li>
              </ul>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              🏥 <strong className="text-black">Prevoz do servisa</strong>
              <span className="text-black ml-2">- sigurna dostava</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-yellow-50 transition-colors duration-200">
              🚛 <strong className="text-black">Transport teške mehanizacije</strong>
              <span className="text-black ml-2">- na zahtev</span>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <>
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <header className="text-center mb-10 bg-gradient-to-br from-blue-800 to-blue-600 text-white py-12 px-8 rounded-2xl shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              Često Postavljana Pitanja
            </h1>
            <p className="text-xl opacity-95">
              Sve što treba da znate o našoj šlep službi u Pančevu
            </p>
          </header>

          {/* FAQ Container */}
          <div className="space-y-6 mb-12">
            {faqItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-transparent hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300">
                <button
                  className={`w-full p-6 md:p-7 text-left flex justify-between items-center bg-gray-50 hover:bg-yellow-100 transition-colors duration-300 ${activeItem === item.id ? 'bg-blue-800 text-white hover:bg-blue-900' : ''
                    }`}
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={activeItem === item.id}
                >
                  <span className="text-lg md:text-xl font-semibold pr-4 text-black">
                    {item.question}
                  </span>
                  <span className={`text-3xl font-light transition-transform duration-300 ${activeItem === item.id ? 'rotate-45 text-yellow-400' : 'text-blue-800'
                    }`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeItem === item.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="p-6 md:p-7 bg-white">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-blue-200">
            <h3 className="text-2xl font-semibold text-black mb-6">
              Potrebne su vam dodatne informacije?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/kontakt" className="bg-blue-800 hover:bg-yellow-500 hover:text-blue-800 text-white px-6 py-3 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 shadow-md border-2 border-blue-800 hover:border-yellow-500">
                📞 Kontakt
              </Link>
              <Link href="/" className="bg-blue-800 hover:bg-yellow-500 hover:text-blue-800 text-white px-6 py-3 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 shadow-md border-2 border-blue-800 hover:border-yellow-500">
                🏠 Početna
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
