import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs, breadcrumbSchema } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { services, site, zones } from '@/data/site'
import { faqSchema, serviceSchema } from '@/lib/seo'

const zonePhotos: Record<string, string> = {
  'san-fernando-de-henares': 'https://source.unsplash.com/1600x900/?industrial,madrid,warehouse',
  coslada: 'https://source.unsplash.com/1600x900/?industrial,truck,madrid',
  'torrejon-de-ardoz': 'https://source.unsplash.com/1600x900/?warehouse,logistics,madrid',
  'alcala-de-henares': 'https://source.unsplash.com/1600x900/?madrid,industrial,street',
  'rivas-vaciamadrid': 'https://source.unsplash.com/1600x900/?recycling,truck,city',
  'madrid-capital': 'https://source.unsplash.com/1600x900/?madrid,skyline,van',
  vicalvaro: 'https://source.unsplash.com/1600x900/?madrid,east,industrial',
  'mejorada-del-campo': 'https://source.unsplash.com/1600x900/?industrial,spanish,town'
}

function zonePhoto(slug: string) {
  return zonePhotos[slug] || 'https://source.unsplash.com/1600x900/?madrid,truck,industrial'
}

export function generateStaticParams() {
  return zones.map((zone) => ({ slug: zone.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const zone = zones.find((item) => item.slug === params.slug)
  if (!zone) return {}
  return {
    title: `Chatarrero 24h en ${zone.name} | Chatarra, vaciados y portes`,
    description: `Chatarrero 24h en ${zone.name}. Recogida de chatarra, compra de metales, vaciado de pisos, trasteros, naves, retirada de electrodomésticos, portes y mudanzas.`,
    alternates: { canonical: `/zonas/${zone.slug}` },
    openGraph: { title: `Chatarrero 24h en ${zone.name}`, description: `Servicio local de chatarrero, vaciados y portes en ${zone.name}.`, url: `${site.url}/zonas/${zone.slug}`, type: 'website', images: [{ url: zonePhoto(zone.slug) }] }
  }
}

export default function ZonePage({ params }: { params: { slug: string } }) {
  const zone = zones.find((item) => item.slug === params.slug)
  if (!zone) notFound()
  const title = `Chatarrero 24h en ${zone.name}`
  const description = `Servicio de recogida y compra de chatarra, compra de metales, vaciado de pisos, trasteros, naves, electrodomésticos, portes y mudanzas en ${zone.name}.`
  const faqs = [
    { question: `¿Hay chatarrero 24h en ${zone.name}?`, answer: `Sí. Chatarrero24h presta servicio en ${zone.name} según disponibilidad, tipo de trabajo, volumen, acceso y urgencia.` },
    { question: `¿Se puede pedir presupuesto por WhatsApp en ${zone.name}?`, answer: 'Sí. Envía fotos, localidad, volumen aproximado y detalles de acceso para recibir una valoración rápida.' },
    { question: '¿Compráis chatarra o solo la retiráis?', answer: 'Depende del material, cantidad y condiciones de recogida. Puede comprarse, retirarse o presupuestarse según cada caso.' },
    { question: `¿Qué servicios se pueden solicitar en ${zone.name}?`, answer: 'Recogida de chatarra, compra de metales, vaciado de pisos, trasteros, locales, naves, retirada de electrodomésticos, mudanzas y portes.' }
  ]
  const crumbs = [{ href: `/zonas/${zone.slug}`, label: zone.name }]
  const localServices = services.slice(0, 8)
  const nearbyZones = zones.filter((item) => item.slug !== zone.slug).slice(0, 7)
  return (
    <main>
      <JsonLd data={serviceSchema(title, description, zone.name)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="service-hero">
        <img src={zonePhoto(zone.slug)} alt={`Chatarrero 24h en ${zone.name}`} className="service-hero-photo" />
        <div className="hero-shade" />
        <div className="container article service-hero-content">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow">{zone.priority}</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <p>Para acelerar la valoración, envía fotos por WhatsApp e indica si se trata de chatarra, vaciado de piso, trastero, nave, retirada de electrodomésticos, mudanza o porte.</p>
          <div className="cta-row"><a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}?text=Hola%2C%20quiero%20pedir%20presupuesto%20en%20${encodeURIComponent(zone.name)}`} target="_blank" rel="noopener noreferrer">Pedir presupuesto en {zone.name}</a><a className="btn btn-ghost" href={`tel:${site.phoneHref}`}>Llamar {site.phoneDisplay}</a></div>
        </div>
      </section>
      <section><div className="container"><div className="section-head"><h2>Servicios en {zone.name}</h2><p className="muted">Páginas relacionadas para mejorar indexación local y conversión por intención.</p></div><div className="cards">{localServices.map((service) => <article className="card" key={service.slug}><p className="eyebrow">{service.intent}</p><h3>{service.shortTitle}</h3><p className="muted">{service.description}</p><Link className="btn btn-ghost" href={`/${service.slug}`}>Ver servicio →</Link></article>)}</div></div></section>
      <section><div className="container banner"><div><p className="eyebrow">Zonas cercanas</p><h2>También trabajamos alrededor de {zone.name}</h2><div className="zones">{nearbyZones.map((item) => <Link className="zone" href={`/zonas/${item.slug}`} key={item.slug}>{item.name}</Link>)}</div></div><a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Consultar disponibilidad</a></div></section>
      <section><div className="container faq"><div className="section-head"><h2>Preguntas frecuentes en {zone.name}</h2></div>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p className="muted">{faq.answer}</p></details>)}</div></section>
    </main>
  )
}
