'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'chatarrero24h_cookie_consent'

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-8Q7EB7LG0Y'
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-NGTRQBGB'
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const checkConsent = () => setEnabled(localStorage.getItem(STORAGE_KEY) === 'accepted')
    checkConsent()
    window.addEventListener('chatarrero24h:cookie-consent', checkConsent)
    window.addEventListener('storage', checkConsent)
    return () => {
      window.removeEventListener('chatarrero24h:cookie-consent', checkConsent)
      window.removeEventListener('storage', checkConsent)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{send_page_view:true});`}
      </Script>
    </>
  )
}
