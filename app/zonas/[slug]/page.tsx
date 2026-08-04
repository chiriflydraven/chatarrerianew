import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs, breadcrumbSchema } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { services, site, zones } from '@/data/site'
import { faqSchema, serviceSchema } from '@/lib/seo'

export function generateStaticParams() {
  return zones.map((zone) => ({ slug: zone.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const zone = zones.find((item) => item.slug === params.slug)
  if (!zone) return {}
  return {
    title: `Chatarrero 24h en ${zone.name}`,
    description: `Recogida de chatarra, compra de metales, vaciado de pisos, trasteros, naves, electrodomésticos, portes y mudanzas en ${zone.name}.`,
    alternates: { canonical: `/zonas/${zone.slug}` },
    openGraph: { title: `Chatarrero 24h en ${zone.name}`, description: `Servicio de chatarrero, vaciados y portes en ${zone.name}.`, url: `${site.url}/zonas/${zone.slug}`, type: 'website' }
  }
}

export default function ZonePage({ params }: { params: { slug: string } }) {
  const zone = zones.find((item) => item.slug === params.slug)
  if (!zone) notFound()
  const title = `Chatarrero 24h en ${zone.name}`
  const description = `Servicio de recogida y compra de chatarra, compra de metales, vaciado de pisos, trasteros, naves, electrodomésticos, portes y mudanzas en ${zone.name}.`
  const faqs = [
    { question: `¿Hay chatarrero 24h en ${zone.name}?`, answer: `Sí. Chatarrero24h presta servicio en ${zone.name} según disponibilidad, tipo de trabajo y acceso.` },
    { question: `¿Se puede pedir presupuesto por WhatsApp en ${zone.name}?`, answer: 'Sí. Envía fotos, localidad, volumen aproximado y detalles de acceso para recibir una valoración rápida.' },
    { question: '¿Compráis chatarra o solo la retirais?', answer: 'Depende del material, cantidad y condiciones de recogida. Puede comprarse, retirarse o presupuestarse según cada caso.' }
  ]
  const crumbs = [{ href: `/zonas/${zone.slug}`, label: zone.name }]
  return (
    <main>
      <JsonLd data={serviceSchema(title, description, zone.name)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="hero"><div className="container article"><Breadcrumbs items={crumbs} /><p className="eyebrow">{zone.priority}</p><h1>{title}</h1><p>{description}</p><p>Para acelerar la valoración, envía fotos por WhatsApp e indica si se trata de chatarra, vaciado de piso, trastero, nave, retirada de electrodomésticos, mudanza o porte.</p><div className="cta-row"><a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}?text=Hola%2C%20quiero%20pedir%20presupuesto%20en%20${encodeURIComponent(zone.name)}`} target="_blank" rel="noopener noreferrer">Pedir presupuesto en {zone.name}</a><a className="btn btn-ghost" href={`tel:${site.phoneHref}`}>Llamar {site.phoneDisplay}</a></div></div></section>
      <section><div className="container"><div className="section-head"><h2>Servicios en {zone.name}</h2><p className="muted">Páginas relacionadas para mejorar indexación local.</p></div><div className="cards">{services.slice(0, 9).map((service) => <article className="card" key={service.slug}><h3>{service.shortTitle}</h3><p className="muted">{service.description}</p><Link className="btn btn-ghost" href={`/${service.slug}`}>Ver servicio →</Link></article>)}</div></div></section>
      <section><div className="container faq"><div className="section-head"><h2>Preguntas frecuentes en {zone.name}</h2></div>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p className="muted">{faq.answer}</p></details>)}</div></section>
    </main>
  )
}
