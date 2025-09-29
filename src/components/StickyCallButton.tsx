// components/StickyCallButton.tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export default function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Link
        href="tel:+38111XXXXXXX"
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center min-w-[60px] min-h-[60px]"
        onClick={() => {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'phone_call', {
              event_category: 'engagement',
              event_label: 'sticky_call_button'
            });
          }
        }}
      >
        <Phone className="w-7 h-7 animate-pulse" />
      </Link>
    </div>
  )
}