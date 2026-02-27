// components/StickyCallButton.tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export default function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        if (!isVisible) {
          setIsVisible(true)
          // Trigger bounce entrance only on first appearance
          if (!hasAnimated) {
            setHasAnimated(true)
          }
        }
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [isVisible, hasAnimated])

  return (
    <>
      {/* Mobile: Full-width sticky bottom bar with shimmer glow */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 ${
          isVisible
            ? hasAnimated ? 'animate-bounce-in-up' : 'translate-y-0'
            : 'translate-y-full transition-transform duration-300'
        }`}
      >
        <Link
          href="tel:+381600490036"
          className="flex items-center justify-center gap-3 bg-accent-400 text-gray-900 font-bold py-4 px-6 text-lg animate-shimmer-glow"
          onClick={() => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'phone_call', {
                event_category: 'engagement',
                event_label: 'sticky_bottom_bar'
              });
            }
          }}
        >
          <Phone className="w-6 h-6 animate-pulse" />
          POZOVITE ODMAH — 060 049 0036
        </Link>
      </div>

      {/* Desktop: Floating button */}
      <div className={`hidden md:block fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Link
          href="tel:+381600490036"
          className="animate-cta-pulse bg-accent-400 hover:bg-accent-500 text-gray-900 rounded-full shadow-2xl hover:shadow-yellow-500/40 transition-all duration-300 transform hover:scale-110 flex items-center justify-center gap-2 px-5 py-4 min-w-[64px] min-h-[64px]"
          onClick={() => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'phone_call', {
                event_category: 'engagement',
                event_label: 'sticky_call_button'
              });
            }
          }}
        >
          <Phone className="w-7 h-7" />
          <span className="font-bold text-sm">POZOVITE</span>
        </Link>
      </div>
    </>
  )
}
