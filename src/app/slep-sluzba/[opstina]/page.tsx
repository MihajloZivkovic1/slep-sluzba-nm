import { notFound } from 'next/navigation';
import { Phone, MessageCircle, Euro, CheckCircle } from 'lucide-react';
import { getMunicipalityBySlug } from '../../../data/municipalities';
import Image from 'next/image';

interface MunicipalityPageProps {
  params: Promise<{
    opstina: string;
  }>;
}

export default async function MunicipalityPage({ params }: MunicipalityPageProps) {
  const { opstina } = await params;
  const municipality = getMunicipalityBySlug(opstina);

  if (!municipality) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Head elements would be handled by Next.js metadata API */}

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
          >
            <Phone className="w-4 h-4 inline mr-2" />
            011/333-4444
          </a>
        </div>
      </div> */}

      {/* Hero Section with Localized CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {municipality.seo.h1}
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100">
                Brza šlep služba u {municipality.name} i okolini
              </p>
              <p className="text-lg mb-8 text-blue-200">
                Naša šlep služba pokriva ceo {municipality.name} i okolinu.
                Prosečno vreme dolaska: <span className="font-bold text-yellow-400">{municipality.info.arrivalTime}</span>,
                zavisno od lokacije.
              </p>

              {/* Primary Contact Methods */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <a
                  href="tel:+381600490036"
                  className="bg-green-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-6 h-6" />
                  POZOVITE ODMAH
                </a>

                <a
                  href={`https://wa.me/381600490036?text=Potrebna%20mi%20je%20slep%20sluzba%20u%20${encodeURIComponent(municipality.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp Chat
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Stižemo za {municipality.info.arrivalTime.split('-')[0]} min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="w-4 h-4 text-yellow-400" />
                  <span>Od {municipality.info.basePrice} RSD</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
                <Image
                  src="/slep-2.webp"
                  alt={`Šlep vozilo - ${municipality.name}`}
                  width={600}
                  height={400}
                  priority
                  className="rounded-xl shadow-lg w-full h-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-6 right-6 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  24/7 Dostupno
                </div>
              </div>

              {/* Floating trust badge */}
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-lg">
                <div className="text-xs font-medium">15+ Godina Iskustva</div>
                <div className="text-lg font-bold">12.700+ Vozila</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Specific Municipality Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Brza šlep služba u {municipality.name} i okolini
            </h2>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="font-bold text-blue-900 mb-4">Pokrivamo kompletno:</h3>
              <ul className="grid grid-cols-2 gap-2 text-blue-700">
                {municipality.info.coverage.map((area, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-900 mb-2">Česti pozivi sa:</h4>
                <ul className="text-gray-700 text-sm">
                  {municipality.info.commonPickups.map((pickup, index) => (
                    <li key={index}>• {pickup}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 className="font-semibold text-gray-900 mb-2">Transport do:</h4>
                <ul className="text-gray-700 text-sm">
                  {municipality.info.commonDestinations.map((destination, index) => (
                    <li key={index}>• {destination}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                <h4 className="font-semibold text-gray-900 mb-2">Specijalizovani za:</h4>
                <ul className="text-gray-700 text-sm">
                  {municipality.info.specializations.map((specialization, index) => (
                    <li key={index}>• {specialization}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Section - Distance Specific */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Cenovnik za {municipality.name}
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium text-gray-700">Osnovna cena šlepovanja:</span>
                <span className="font-bold text-blue-600">{municipality.info.basePrice} RSD</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium text-gray-700">Udaljenost od baze:</span>
                <span className="font-bold text-green-600">{municipality.info.distanceFromBase} km</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium text-gray-700">Prosečno vreme dolaska:</span>
                <span className="font-bold text-orange-600">{municipality.info.arrivalTime}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium text-gray-700">Dodatni kilometar:</span>
                <span className="font-bold text-gray-600">150 RSD</span>
              </div>

              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-gray-700">Noćni rad (22-06h):</span>
                <span className="font-bold text-green-600">+30%</span>
              </div>
            </div>
            <a
              href="tel:+381600490036"
              className="w-full mt-6 bg-green-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              POTVRDITE CENU - 011/333-4444
            </a>
          </div>
        </div>

        {/* Emergency Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Hitno Vam Treba Šlep Služba u {municipality.name}?
          </h3>
          <p className="text-lg mb-6 text-green-100">
            Ne gubite vreme - pozovite odmah! Stižemo za {municipality.info.arrivalTime.split('-')[0]} minuta.
          </p>

          <a
            href="tel:+381600490036"
            className="inline-flex items-center gap-3 bg-yellow-500 text-black py-4 px-8 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-colors"
          >
            <Phone className="w-6 h-6" />
            011/333-4444 - POZOVI ODMAH
          </a>

          <p className="mt-4 text-green-200 text-sm">
            Dostupni 24/7 • Od {municipality.info.basePrice} RSD • Licencirani vozači
          </p>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all municipalities
export async function generateStaticParams() {
  const { getAllMunicipalitySlugs } = await import('../../../data/municipalities');
  const slugs = getAllMunicipalitySlugs();

  return slugs.map((slug) => ({
    opstina: slug,
  }));
}

// Generate metadata for each municipality page
export async function generateMetadata({ params }: MunicipalityPageProps) {
  const { opstina } = await params;
  const municipality = getMunicipalityBySlug(opstina);

  if (!municipality) {
    return {
      title: 'Stranica nije pronađena',
    };
  }

  return {
    title: municipality.seo.title,
    description: municipality.seo.metaDescription,
    openGraph: {
      title: municipality.seo.title,
      description: municipality.seo.metaDescription,
      url: `/slep-sluzba/${municipality.slug}`,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}