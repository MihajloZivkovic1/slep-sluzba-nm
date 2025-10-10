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
    name: 'Stari Grad',
    slug: 'stari-grad',
    description: 'Centar Beograda',
    seo: {
      title: 'Šlep Služba Stari Grad 24/7 | Od 3000 RSD | Stižemo za 30 min',
      metaDescription: 'Hitna šlep služba u Stari Grad i okolini. ⭐ 24/7 dostupnost ⭐ Transparentne cene ⭐ Brz dolazak. Pozovite odmah: +381600490036',
      h1: 'Šlep Služba Stari Grad - Hitna Pomoć 24/7'
    },
    info: {
      arrivalTime: '20-30 minuta',
      coverage: ['Stari Grad', 'Dorćol', 'Skadarlija'],
      commonPickups: ['Knez Mihailova', 'Studentski trg', 'Skadarlija', 'Kalemegdan'],
      commonDestinations: ['Auto servisi Voždovac', 'Servisi Novi Beograd', 'Parking servisi'],
      specializations: ['Uske ulice starog grada', 'Parking problemi', 'Turistička zona'],
      distanceFromBase: 25,
      basePrice: 2800
    },
    landmarks: ['Kalemegdan', 'Knez Mihailova', 'Skadarlija', 'Studentski trg'],
    neighborhoods: ['Dorćol', 'Kosančićev Venac', 'Stari Grad centar']
  },
  {
    name: 'Vračar',
    slug: 'vracar',
    description: 'Šumice, Neimar',
    seo: {
      title: 'Šlep Služba Vračar 24/7 | Od 3000 RSD | Stižemo za 25 min',
      metaDescription: 'Hitna šlep služba u Vračar i okolini. ⭐ 24/7 dostupnost ⭐ Transparentne cene ⭐ Brz dolazak. Pozovite odmah: +381600490036',
      h1: 'Šlep Služba Vračar - Hitna Pomoć 24/7'
    },
    info: {
      arrivalTime: '18-28 minuta',
      coverage: ['Vračar', 'Šumarice', 'Neimar', 'Karađorđev park'],
      commonPickups: ['Svetog Save', 'Južni bulevar', 'Šumarice', 'Karađorđev park'],
      commonDestinations: ['Servisi Autokomanda', 'Veliki servisi Kumodraž', 'Centar grada'],
      specializations: ['Brda i usponi', 'Uske ulice', 'Stambene zgrade'],
      distanceFromBase: 22,
      basePrice: 2700
    },
    landmarks: ['Hram Svetog Save', 'Karađorđev park', 'Nacionalni stadion'],
    neighborhoods: ['Šumarice', 'Neimar', 'Savinac', 'Čubura']
  },
  {
    name: 'Savski Venac',
    slug: 'savski-venac',
    description: 'Sava Centar',
    seo: {
      title: 'Šlep Služba Savski Venac 24/7 | Od 3000 RSD | Stižemo za 25 min',
      metaDescription: 'Hitna šlep služba u Savski Venac i okolini. ⭐ 24/7 dostupnost ⭐ Transparentne cene ⭐ Brz dolazak. Pozovite odmah: +381600490036',
      h1: 'Šlep Služba Savski Venac - Hitna Pomoć 24/7'
    },
    info: {
      arrivalTime: '20-30 minuta',
      coverage: ['Savski Venac', 'Dedinje', 'Topčider', 'Senjak'],
      commonPickups: ['Sava Centar', 'Dedinje', 'Topčider', 'Nemanjina'],
      commonDestinations: ['Servisi Novi Beograd', 'Autokomanda servisi', 'Centar grada'],
      specializations: ['Luksuzne vile', 'Diplomatske rezidencije', 'Brda i krivine'],
      distanceFromBase: 24,
      basePrice: 2750
    },
    landmarks: ['Sava Centar', 'Dedinje', 'Topčider', 'Ada Ciganlija'],
    neighborhoods: ['Dedinje', 'Senjak', 'Topčider', 'Lisičji Potok']
  },
  {
    name: 'Novi Beograd',
    slug: 'novi-beograd',
    description: 'Blokovi, Delta City',
    seo: {
      title: 'Šlep Služba Novi Beograd 24/7 | Od 3000 RSD | Stižemo za 20 min',
      metaDescription: 'Hitna šlep služba u Novi Beograd i okolini. ⭐ 24/7 dostupnost ⭐ Transparentne cene ⭐ Brz dolazak. Pozovite odmah: +381600490036',
      h1: 'Šlep Služba Novi Beograd - Hitna Pomoć 24/7'
    },
    info: {
      arrivalTime: '15-25 minuta',
      coverage: ['Novi Beograd', 'Blokovi 1-72', 'Fontana', 'Dr Agić'],
      commonPickups: ['Delta City', 'Blok 70', 'USCE', 'Fontana', 'Genex kula'],
      commonDestinations: ['Auto plac Novi Beograd', 'Servisi Zemun', 'Centar grada'],
      specializations: ['Veliki blokovski kompleksi', 'Tržni centri', 'Široki bulevari'],
      distanceFromBase: 18,
      basePrice: 2600
    },
    landmarks: ['Delta City', 'USCE Shopping Center', 'Genex kula', 'Arena'],
    neighborhoods: ['Fontana', 'Dr Agić', 'Blokovi', 'Ledine']
  },
  {
    name: 'Zemun',
    slug: 'zemun',
    description: 'Gardoš, BW Galerija',
    seo: {
      title: 'Šlep Služba Zemun 24/7 | Od 3000 RSD | Stižemo za 15 min',
      metaDescription: 'Hitna šlep služba u Zemun i okolini. ⭐ 24/7 dostupnost ⭐ Transparentne cene ⭐ Brz dolazak. Pozovite odmah: +381600490036',
      h1: 'Šlep Služba Zemun - Hitna Pomoć 24/7'
    },
    info: {
      arrivalTime: '12-22 minuta',
      coverage: ['Zemun', 'Gardoš', 'Ugrinovci', 'Batajnica'],
      commonPickups: ['Zemunski kej', 'BW Galerija', 'Zemun Polje', 'Gardoš kula'],
      commonDestinations: ['Servisi u centru Zemuna', 'Novi Beograd', 'Auto placevi'],
      specializations: ['Uske Zemunske uličice', 'Kej uz Dunav', 'Stari gradski deo'],
      distanceFromBase: 12,
      basePrice: 2500
    },
    landmarks: ['Gardoš kula', 'BW Galerija', 'Zemunski kej', 'Madlenianum'],
    neighborhoods: ['Gardoš', 'Zemun Polje', 'Gornji Grad', 'Donji Grad']
  },
  {
    name: 'Surčin',
    slug: 'surcin',
    description: 'Aerodrom Nikola Tesla',
    seo: {
      title: 'Šlep Služba Surčin 24/7 | Od 3000 RSD | Stižemo za 20 min',
      metaDescription: 'Hitna šlep služba u Surčin i okolini. ⭐ 24/7 dostupnost ⭐ Transparentne cene ⭐ Brz dolazak. Pozovite odmah: +381600490036',
      h1: 'Šlep Služba Surčin - Hitna Pomoć 24/7'
    },
    info: {
      arrivalTime: '15-25 minuta',
      coverage: ['Surčin', 'Aerodrom Beograd', 'Dobanovci', 'Jakovo'],
      commonPickups: ['Aerodrom Nikola Tesla', 'Surčin centar', 'Dobanovci', 'Autoput'],
      commonDestinations: ['Zemun servisi', 'Novi Beograd', 'Aerodrom parking'],
      specializations: ['Aerodromski saobraćaj', 'Autoputevi', 'Ruralni putevi'],
      distanceFromBase: 15,
      basePrice: 2550
    },
    landmarks: ['Aerodrom Nikola Tesla', 'Autoput A1', 'Surčin centar'],
    neighborhoods: ['Surčin centar', 'Dobanovci', 'Jakovo', 'Boljevci']
  },
  {
    name: 'Voždovac',
    slug: 'vozdovac',
    description: 'Banjica, Jajinci',
    seo: {
      title: 'Šlep Služba Voždovac 24/7 | Od 3000 RSD | Stižemo za 25 min',
      metaDescription: 'Hitna šlep služba u Voždovac i okolini. ⭐ 24/7 dostupnost ⭐ Transparentne cene ⭐ Brz dolazak. Pozovite odmah: +381600490036',
      h1: 'Šlep Služba Voždovac - Hitna Pomoć 24/7'
    },
    info: {
      arrivalTime: '20-30 minuta',
      coverage: ['Voždovac', 'Banjica', 'Jajinci', 'Autokomanda'],
      commonPickups: ['Autokomanda', 'Banjica', 'Jajinci', 'Kumodraž'],
      commonDestinations: ['Auto servisi Autokomanda', 'Centar grada', 'Avala'],
      specializations: ['Brdoviti teren', 'Veliki servisni centri', 'Stambeni blokovi'],
      distanceFromBase: 28,
      basePrice: 2850
    },
    landmarks: ['Autokomanda', 'TC Stadion', 'Banjica', 'Jajinci'],
    neighborhoods: ['Autokomanda', 'Banjica', 'Jajinci', 'Kumodraž']
  },
  {
    name: 'Zvezdara',
    slug: 'zvezdara',
    description: 'Vukov Spomenik',
    seo: {
      title: 'Šlep Služba Zvezdara 24/7 | Od 3000 RSD | Stižemo za 25 min',
      metaDescription: 'Hitna šlep služba u Zvezdara i okolini. ⭐ 24/7 dostupnost ⭐ Transparentne cene ⭐ Brz dolazak. Pozovite odmah: +381600490036',
      h1: 'Šlep Služba Zvezdara - Hitna Pomoć 24/7'
    },
    info: {
      arrivalTime: '22-32 minuta',
      coverage: ['Zvezdara', 'Vukov Spomenik', 'Bogoslovija', 'Ćalije'],
      commonPickups: ['Vukov Spomenik', 'Crveni Krst', 'Bogoslovija', 'Đeram'],
      commonDestinations: ['Servisi Autokomanda', 'Centar grada', 'Pančevo servisi'],
      specializations: ['Brdovit teren', 'Uže ulice', 'Stambeni kompleksi'],
      distanceFromBase: 30,
      basePrice: 2900
    },
    landmarks: ['Vukov Spomenik', 'Crveni Krst', 'Đeram pijaca'],
    neighborhoods: ['Vukov Spomenik', 'Bogoslovija', 'Ćalije', 'Crveni Krst']
  },
  {
    name: 'Grocka',
    slug: 'grocka',
    description: 'Smederevski put',
    seo: {
      title: 'Šlep Služba Grocka 24/7 | Od 3000 RSD | Stižemo za 20 min',
      metaDescription: 'Hitna šlep služba u Grocka i okolini. ⭐ 24/7 dostupnost ⭐ Transparentne cene ⭐ Brz dolazak. Pozovite odmah: +381600490036',
      h1: 'Šlep Služba Grocka - Hitna Pomoć 24/7'
    },
    info: {
      arrivalTime: '15-25 minuta',
      coverage: ['Grocka', 'Smederevski put', 'Leštane', 'Vinča'],
      commonPickups: ['Grocka centar', 'Smederevski put', 'Leštane', 'Vinča'],
      commonDestinations: ['Pančevo servisi', 'Grocka servisi', 'Beograd centar'],
      specializations: ['Ruralni putevi', 'Dunavski kej', 'Seoska vozila'],
      distanceFromBase: 8,
      basePrice: 2400
    },
    landmarks: ['Grocka centar', 'Vinča', 'Dunav'],
    neighborhoods: ['Grocka centar', 'Leštane', 'Vinča', 'Brestovik']
  },
  {
    name: 'Čukarica',
    slug: 'cukarica',
    description: 'Banovo Brdo, Ada',
    seo: {
      title: 'Šlep Služba Čukarica 24/7 | Od 3000 RSD | Stižemo za 30 min',
      metaDescription: 'Hitna šlep služba u Čukarica i okolini. ⭐ 24/7 dostupnost ⭐ Transparentne cene ⭐ Brz dolazak. Pozovite odmah: +381600490036',
      h1: 'Šlep Služba Čukarica - Hitna Pomoć 24/7'
    },
    info: {
      arrivalTime: '25-35 minuta',
      coverage: ['Čukarica', 'Banovo Brdo', 'Žarkovo', 'Ada Ciganlija'],
      commonPickups: ['Banovo Brdo', 'Ada Mall', 'Žarkovo', 'Julino Brdo'],
      commonDestinations: ['Servisi Novi Beograd', 'Centar grada', 'Čukarica servisi'],
      specializations: ['Brdoviti deo', 'Ada Ciganlija pristup', 'Stambene zone'],
      distanceFromBase: 32,
      basePrice: 3000
    },
    landmarks: ['Ada Ciganlija', 'Ada Mall', 'Banovo Brdo'],
    neighborhoods: ['Banovo Brdo', 'Žarkovo', 'Julino Brdo', 'Skojevsko naselje']
  },
  {
    name: 'Rakovica',
    slug: 'rakovica',
    description: 'Miljakovac',
    seo: {
      title: 'Šlep Služba Rakovica 24/7 | Od 3000 RSD | Stižemo za 30 min',
      metaDescription: 'Hitna šlep služba u Rakovica i okolini. ⭐ 24/7 dostupnost ⭐ Transparentne cene ⭐ Brz dolazak. Pozovite odmah: +381600490036',
      h1: 'Šlep Služba Rakovica - Hitna Pomoć 24/7'
    },
    info: {
      arrivalTime: '25-35 minuta',
      coverage: ['Rakovica', 'Miljakovac', 'Labudovo Brdo', 'Petlovo Brdo'],
      commonPickups: ['Miljakovac', 'Labudovo Brdo', 'Petlovo Brdo', 'Kneževac'],
      commonDestinations: ['Servisi Autokomanda', 'Centar grada', 'Čukarica servisi'],
      specializations: ['Brdovit teren', 'Industrijska zona', 'Stambeni kompleksi'],
      distanceFromBase: 35,
      basePrice: 3100
    },
    landmarks: ['Miljakovac', 'Labudovo Brdo', 'Avalski toranj'],
    neighborhoods: ['Miljakovac', 'Labudovo Brdo', 'Petlovo Brdo', 'Kneževac']
  },
  {
    name: 'Pančevo',
    slug: 'pancevo',
    description: 'Široka okolina',
    seo: {
      title: 'Šlep Služba Pančevo 24/7 | Od 3000 RSD | Stižemo za 10 min',
      metaDescription: 'Hitna šlep služba u Pančevo i okolini. ⭐ 24/7 dostupnost ⭐ Transparentne cene ⭐ Brz dolazak. Pozovite odmah: +381600490036',
      h1: 'Šlep Služba Pančevo - Hitna Pomoć 24/7'
    },
    info: {
      arrivalTime: '5-15 minuta',
      coverage: ['Pančevo', 'Starčevo', 'Opovo', 'Kovačica'],
      commonPickups: ['Pančevo centar', 'Starčevo', 'Tamište', 'Kovin'],
      commonDestinations: ['Pančevo servisi', 'Beograd servisi', 'Lokalni servisi'],
      specializations: ['Lokalno poznavanje', 'Najbrži odziv', 'Sva vozila'],
      distanceFromBase: 0,
      basePrice: 2200
    },
    landmarks: ['Pančevo centar', 'Tamište', 'Starčevo'],
    neighborhoods: ['Pančevo centar', 'Strelište', 'Kotež']
  },
  {
    name: 'Palilula',
    slug: 'palilula',
    description: 'Beogradska opština sa urbanim i prigradskim delovima',
    seo: {
      title: 'Šlep Služba Palilula 24/7 | Od 3000 RSD | Stižemo za 20 min',
      metaDescription: 'Hitna šlep služba u Paliluli i okolini. ⭐ 24/7 dostupnost ⭐ Brz dolazak ⭐ Povoljna cena već od 3000 RSD. Pozovite odmah: +381600490036',
      h1: 'Šlep Služba Palilula - Pomoć na Putu 24/7'
    },
    info: {
      arrivalTime: '15-25 minuta',
      coverage: ['Palilula', 'Karaburma', 'Višnjica', 'Borča', 'Krnjača', 'Ovča'],
      commonPickups: ['Karaburma', 'Borča', 'Krnjača', 'Višnjica'],
      commonDestinations: ['Servisi u Mirijevu', 'Centar grada', 'Zvezdara servisi'],
      specializations: ['Brz odziv u špicu', 'Prevoz iz prigradskih delova', 'Pomoć na mostovima i obilaznici'],
      distanceFromBase: 20,
      basePrice: 3000
    },
    landmarks: ['Pančevački most', 'Ada Huja', 'Borča', 'Karaburma'],
    neighborhoods: ['Karaburma', 'Višnjica', 'Borča', 'Krnjača', 'Ovča']
  }

];

export function getMunicipalityBySlug(slug: string): Municipality | undefined {
  return municipalities.find(municipality => municipality.slug === slug);
}

export function getAllMunicipalitySlugs(): string[] {
  return municipalities.map(municipality => municipality.slug);
}