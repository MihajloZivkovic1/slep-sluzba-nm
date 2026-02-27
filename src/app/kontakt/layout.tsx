import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt - Šlep Služba Pančevo 0-24 | Pozovite 060/049-0036',
  description: 'Kontaktirajte Šlep Službu NM u Pančevu. Dostupni 0-24 za hitnu pomoć na putu. Telefon: 060/049-0036. Email: slepsluzbanm@gmail.com. Stižemo za 10-20 min.',
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
