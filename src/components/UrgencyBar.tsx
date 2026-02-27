'use client'
import { Zap } from 'lucide-react'
import Link from 'next/link'

export default function UrgencyBar() {
  return (
    <div className="bg-accent-400 text-gray-900">
      <div className="container-custom py-2">
        <Link
          href="tel:+381600490036"
          className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold hover:opacity-80 transition-opacity"
          onClick={() => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'phone_call', {
                event_category: 'engagement',
                event_label: 'urgency_bar'
              });
            }
          }}
        >
          <Zap className="w-4 h-4" />
          <span>Potrebna hitna pomoć? Stižemo za 10 min →</span>
          <span className="hidden sm:inline font-bold">060 049 0036</span>
        </Link>
      </div>
    </div>
  )
}
