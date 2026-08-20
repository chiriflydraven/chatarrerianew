export type TrackingEvent = 'click_call' | 'click_whatsapp' | 'click_affiliate' | 'form_start' | 'lead_submit'

export function track(eventName: TrackingEvent, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined') return
  const win = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] }
  win.gtag?.('event', eventName, params)
  win.dataLayer?.push?.({ event: eventName, ...params })
}
