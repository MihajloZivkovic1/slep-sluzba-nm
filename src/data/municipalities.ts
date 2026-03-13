export interface Municipality {
  name: string;
  slug: string;
  description: string;
  seo: {
    title: string;
    metaDescription: string;
    h1: string;
  };
  info: {
    arrivalTime: string;
    coverage: string[];
    commonPickups: string[];
    commonDestinations: string[];
    specializations: string[];
    distanceFromBase: number;
    basePrice: number;
  };
  landmarks: string[];
  neighborhoods: string[];
}

export const municipalities: Municipality[] = [
  {
    name: 'Pančevo',
    slug: 'pancevo',
    description: 'Široka okolina',
    seo: {
      title: 'Šlep Služba Pančevo 0-24 | Od 3000 RSD | Stižemo za 10 min',
      metaDescription: 'Hitna šlep služba u Pančevu i okolini. ⭐ 0-24 dostupnost ⭐ Transparentne cene od 3000 RSD ⭐ Brz dolazak za 10 min. Pozovite odmah: 060/049-0036',
      h1: 'Šlep Služba Pančevo - Hitna Pomoć 0-24'
    },
    info: {
      arrivalTime: '5-15 minuta',
      coverage: ['Pančevo', 'Starčevo', 'Omoljica', 'Kačarevo', 'Borča', 'Ovča', 'Opovo', 'Kovin'],
      commonPickups: ['Pančevo centar', 'Starčevo', 'Tamište', 'Borča', 'Kačarevo'],
      commonDestinations: ['Pančevo servisi', 'Beograd servisi', 'Lokalni servisi'],
      specializations: ['Lokalno poznavanje', 'Najbrži odziv', 'Sva vozila do 3.5t'],
      distanceFromBase: 0,
      basePrice: 3000
    },
    landmarks: ['Pančevo centar', 'Tamište', 'Starčevo', 'Strelište'],
    neighborhoods: ['Pančevo centar', 'Strelište', 'Kotež', 'Vojlovica', 'Misa']
  },
];

export function getMunicipalityBySlug(slug: string): Municipality | undefined {
  return municipalities.find(municipality => municipality.slug === slug);
}

export function getAllMunicipalitySlugs(): string[] {
  return municipalities.map(municipality => municipality.slug);
}