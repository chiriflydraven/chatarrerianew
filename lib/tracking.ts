export type TrackingEvent = 'click_call' | 'click_whatsapp' | 'click_affiliate' | 'form_start' | 'lead_submit'

const STORAGE_KEY = 'chatarrero24h_cookie_consent'

export function hasAnalyticsConsent() {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(STORAGE_KEY) === 'accepted'
}

export function track(eventName: TrackingEvent, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return
  const win = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] }
  win.gtag?.('event', eventName, params)
  win.dataLayer?.push?.({ event: eventName, ...params })
}
