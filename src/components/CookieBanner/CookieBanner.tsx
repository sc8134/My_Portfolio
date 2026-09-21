import { useState, useEffect } from 'react'
import { CookieIcon } from '../icons/Icons'

const STORAGE_KEY = 'cookie_consent'

type Consent = 'accepted' | 'declined'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      // Small delay so it doesn't flash on first paint
      const id = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(id)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted' satisfies Consent)
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined' satisfies Consent)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-backdrop" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-banner">

        {/* Icon + text */}
        <div className="cookie-body">
          <span className="cookie-icon" aria-hidden="true">
            <CookieIcon size={28} />
          </span>
          <div>
            <p className="cookie-title">This site uses cookies</p>
            <p className="cookie-desc">
              This site uses cookies only to remember your preferences. No tracking, no ads, no third-party data sharing.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="cookie-actions">
          <button className="cookie-btn-decline" onClick={decline}>
            Decline
          </button>
          <button className="cookie-btn-accept" onClick={accept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
