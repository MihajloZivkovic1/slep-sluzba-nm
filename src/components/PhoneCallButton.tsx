'use client'

import { ReactNode } from 'react'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

interface PhoneCallButtonProps {
  label: string
  className: string
  children: ReactNode
}

export default function PhoneCallButton({ label, className, children }: PhoneCallButtonProps) {
  return (
    <a
      href="tel:+381600490036"
      className={className}
      onClick={() => {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'phone_call', {
            event_category: 'engagement',
            event_label: label,
          })
        }
      }}
    >
      {children}
    </a>
  )
}
