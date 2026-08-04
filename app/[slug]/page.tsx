import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumbs, breadcrumbSchema } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { services, site, zones } from '@/data/site'
import { faqSchema, serviceSchema } from '@/lib/seo'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((item) => item.slug === params.slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/${service.slug}` },
    openGraph: { title: service.title, description: service.description, url: `${site.url}/${service.slug}`, type: 'website' }
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug)
  if (!service) notFound()
  const faqs = [
    { question: `¿Cómo pedir presupuesto para ${service.shortTitle.toLowerCase()}?`, answer: 'Envía fotos por WhatsApp, indica localidad, volumen aproximado y acceso. Con esa información se puede orientar la valoración.' },
    { question: '¿El servicio está disponible 24 horas?', answer: 'Sí, se ofrece servicio 24 horas según disponibilidad, tipo de trabajo y zona.' },
    { question: '¿El precio es fijo?', answer: 'No. Depende del material, cantidad, acceso, urgencia, distancia y si hay elementos aprovechables.' }
  ]
  const crumbs = [{ href: `/${service.slug}`, label: service.shortTitle }]
  return (
    <main>
      <JsonLd data={serviceSchema(service.title, service.description)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="hero"><div className="container article"><Breadcrumbs items={crumbs} /><p className="eyebrow">{service.intent}</p><h1>{service.title}</h1><p>{service.description}</p><ul>{service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="cta-row"><a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}?text=Hola%2C%20quiero%20pedir%20presupuesto%20para%20${encodeURIComponent(service.shortTitle)}`} target="_blank" rel="noopener noreferrer">Enviar fotos por WhatsApp</a><a className="btn btn-ghost" href={`tel:${site.phoneHref}`}>Llamar {site.phoneDisplay}</a></div></div></section>
      <section><div className="container"><div className="section-head"><h2>Zonas principales</h2><p className="muted">Servicio local en Madrid y alrededores.</p></div><div className="zones">{zones.map((zone) => <a className="zone" href={`/zonas/${zone.slug}`} key={zone.slug}>{zone.name}</a>)}</div></div></section>
      <section><div className="container faq"><div className="section-head"><h2>Preguntas frecuentes</h2></div>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p className="muted">{faq.answer}</p></details>)}</div></section>
    </main>
  )
}
