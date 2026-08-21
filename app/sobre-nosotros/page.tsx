import type { Metadata } from 'next'
import Link from 'next/link'
import { GoogleBusiness } from '@/components/GoogleBusiness'
import { JsonLd } from '@/components/JsonLd'
import { site, services, zones } from '@/data/site'

export const metadata: Metadata = {
  title: 'Sobre Chatarrero24h Madrid | Recogida de chatarra y vaciados',
  description: 'Información sobre Chatarrero24h Madrid: servicio local de recogida de chatarra, compra de metales, vaciado de pisos, retirada de electrodomésticos, portes y mudanzas.',
  alternates: { canonical: '/sobre-nosotros' }
}

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Sobre Chatarrero24h Madrid',
    url: `${site.url}/sobre-nosotros`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: site.name,
      founder: site.owner,
      telephone: site.phoneDisplay,
      email: site.email,
      address: site.address,
      url: site.url
    }
  }
  return (
    <main>
      <JsonLd data={schema} />
      <section className="contact-section">
        <div className="container article">
          <p className="eyebrow">Empresa local</p>
          <h1>Sobre Chatarrero24h Madrid</h1>
          <p className="lead">Chatarrero24h es un servicio local de recogida de chatarra, compra de metales, vaciado de pisos, trasteros, naves, retirada de electrodomésticos, portes y mudanzas en Madrid y Corredor del Henares.</p>
          <p>El objetivo es ofrecer una respuesta rápida y clara: el cliente envía fotos por WhatsApp, indica localidad, volumen, acceso y tipo de material, y recibe una valoración orientativa según el trabajo.</p>
          <h2>Datos principales</h2>
          <ul>
            <li>Titular: {site.owner}</li>
            <li>Teléfono y WhatsApp: {site.phoneDisplay}</li>
            <li>Email: {site.email}</li>
            <li>Zona base: {site.address}</li>
            <li>Horario: {site.hours}</li>
          </ul>
          <h2>Servicios destacados</h2>
          <div className="cards">{services.filter((service) => service.slug !== 'contacto').slice(0, 6).map((service) => <article className="card" key={service.slug}><h3>{service.shortTitle}</h3><p className="muted">{service.description}</p><Link className="btn btn-ghost" href={`/${service.slug}`}>Ver servicio →</Link></article>)}</div>
          <h2>Zonas principales</h2>
          <div className="zones">{zones.slice(0, 12).map((zone) => <Link className="zone" href={`/zonas/${zone.slug}`} key={zone.slug}>{zone.name}</Link>)}</div>
          <div className="cta-row" style={{ marginTop: 32 }}>
            <a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Pedir presupuesto por WhatsApp</a>
            <a className="btn btn-ghost" href={`tel:${site.phoneHref}`}>Llamar {site.phoneDisplay}</a>
          </div>
        </div>
      </section>
      <GoogleBusiness />
    </main>
  )
}
