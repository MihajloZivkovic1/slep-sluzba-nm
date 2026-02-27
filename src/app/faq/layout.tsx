import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Šlep Služba Pančevo | Često Postavljana Pitanja',
  description: 'Odgovori na najčešća pitanja o šlep službi u Pančevu. Cene od 3000 RSD, područja pokrivanja, vreme dolaska i sve o našim uslugama 0-24. ☎ 060/049-0036',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
