import { site } from '@/data/site'

const mapsQuery = encodeURIComponent(`${site.shortName} ${site.address}`)
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`
const reviewUrl = `https://www.google.com/search?q=${encodeURIComponent(`${site.shortName} reseñas Google`)}`
const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`

export function GoogleBusiness({ compact = false }: { compact?: boolean }) {
  return (
    <section className="google-business-section">
      <div className="container google-business">
        <div className="google-copy">
          <p className="eyebrow">Perfil de empresa en Google</p>
          <h2>Encuéntranos en Google Maps</h2>
          <p className="muted">Perfil de empresa de Chatarrero24h con horario, teléfono, ubicación, fotos y reseñas. Mantener estos datos iguales en web y Google ayuda al SEO local.</p>
          <div className="gbp-facts">
            <span>⭐ 3,8 · 10 reseñas</span>
            <span>📍 {site.address}</span>
            <span>🕒 {site.hours}</span>
            <span>☎️ {site.phoneDisplay}</span>
          </div>
          <div className="cta-row">
            <a className="btn btn-primary" href={mapsUrl} target="_blank" rel="noopener noreferrer">Ver perfil en Google</a>
            <a className="btn btn-ghost" href={directionsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
            <a className="btn btn-ghost" href={reviewUrl} target="_blank" rel="noopener noreferrer">Leer reseñas</a>
          </div>
        </div>
        {!compact ? (
          <div className="map-card" aria-label="Mapa de Chatarrero24h en San Fernando de Henares">
            <iframe src={embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de Chatarrero24h" />
          </div>
        ) : null}
      </div>
    </section>
  )
}
