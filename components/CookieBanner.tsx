'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'chatarrero24h_cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(!localStorage.getItem(STORAGE_KEY))
  }, [])

  function saveConsent(value: 'accepted' | 'rejected') {
    localStorage.setItem(STORAGE_KEY, value)
    window.dispatchEvent(new Event('chatarrero24h:cookie-consent'))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <div>
        <strong>Usamos cookies</strong>
        <p>
          Utilizamos cookies técnicas y, solo si aceptas, medición con Google Analytics/Tag Manager para mejorar la web y saber qué servicios generan más contacto.
          Puedes aceptar o rechazar la medición no esencial. Consulta la <Link href="/politica-cookies">política de cookies</Link>.
        </p>
      </div>
      <div className="cookie-actions">
        <button className="btn btn-ghost" type="button" onClick={() => saveConsent('rejected')}>Rechazar</button>
        <button className="btn btn-primary" type="button" onClick={() => saveConsent('accepted')}>Aceptar</button>
      </div>
    </div>
  )
}
