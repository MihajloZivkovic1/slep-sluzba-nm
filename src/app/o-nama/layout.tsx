import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O Nama - Šlep Služba NM Pančevo | 7 Godina Iskustva',
  description: 'Šlep Služba NM - profesionalna šlep služba u Pančevu i okolini. 7 godina iskustva, 1170+ prevezenih vozila, licencirani i osigurani. ☎ 060/049-0036',
}

export default function ONamaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
