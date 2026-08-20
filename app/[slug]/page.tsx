import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs, breadcrumbSchema } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { services, site, zones } from '@/data/site'
import { faqSchema, serviceSchema } from '@/lib/seo'

const photoByIntent: Record<string, string> = {
  chatarra: 'https://source.unsplash.com/1600x900/?scrap-metal,recycling,truck',
  metales: 'https://source.unsplash.com/1600x900/?copper,aluminum,scrap-metal',
  cobre: 'https://source.unsplash.com/1600x900/?copper,cable,recycling',
  aluminio: 'https://source.unsplash.com/1600x900/?aluminum,metal,recycling',
  hierro: 'https://source.unsplash.com/1600x900/?iron,steel,scrap-yard',
  pisos: 'https://source.unsplash.com/1600x900/?apartment,clearance,moving',
  trasteros: 'https://source.unsplash.com/1600x900/?storage,boxes,clearance',
  naves: 'https://source.unsplash.com/1600x900/?warehouse,industrial,clearance',
  electrodomesticos: 'https://source.unsplash.com/1600x900/?appliance,removal,truck',
  mudanzas: 'https://source.unsplash.com/1600x900/?moving,van,boxes',
  portes: 'https://source.unsplash.com/1600x900/?delivery,van,moving'
}

function servicePhoto(slug: string) {
  const key = Object.keys(photoByIntent).find((item) => slug.includes(item))
  return key ? photoByIntent[key] : photoByIntent.chatarra
}

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
    openGraph: { title: service.title, description: service.description, url: `${site.url}/${service.slug}`, type: 'website', images: [{ url: servicePhoto(service.slug) }] }
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
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 4)
  return (
    <main>
      <JsonLd data={serviceSchema(service.title, service.description)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="service-hero">
        <img src={servicePhoto(service.slug)} alt={`${service.shortTitle} en Madrid`} className="service-hero-photo" />
        <div className="hero-shade" />
        <div className="container article service-hero-content">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow">{service.intent}</p>
          <h1>{service.title}</h1>
          <p className="lead">{service.description}</p>
          <ul className="check-list">{service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          <div className="cta-row"><a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}?text=Hola%2C%20quiero%20pedir%20presupuesto%20para%20${encodeURIComponent(service.shortTitle)}`} target="_blank" rel="noopener noreferrer">Enviar fotos por WhatsApp</a><a className="btn btn-ghost" href={`tel:${site.phoneHref}`}>Llamar {site.phoneDisplay}</a></div>
        </div>
      </section>
      <section><div className="container"><div className="section-head"><h2>Por qué elegir Chatarrero24h</h2><p className="muted">Información clara para usuarios, Google y motores de IA.</p></div><div className="steps"><div className="step"><div className="num">1</div><h3>Contacto rápido</h3><p className="muted">Llamada o WhatsApp con fotos para valorar el trabajo.</p></div><div className="step"><div className="num">2</div><h3>Servicio local</h3><p className="muted">Madrid, San Fernando, Coslada y Corredor del Henares.</p></div><div className="step"><div className="num">3</div><h3>24 horas</h3><p className="muted">Atención urgente según disponibilidad y tipo de servicio.</p></div></div></div></section>
      <section><div className="container"><div className="section-head"><h2>Servicios relacionados</h2></div><div className="cards">{related.map((item) => <article className="card" key={item.slug}><h3>{item.shortTitle}</h3><p className="muted">{item.description}</p><Link className="btn btn-ghost" href={`/${item.slug}`}>Ver servicio →</Link></article>)}</div></div></section>
      <section><div className="container"><div className="section-head"><h2>Zonas principales</h2><p className="muted">Servicio local en Madrid y alrededores.</p></div><div className="zones">{zones.map((zone) => <Link className="zone" href={`/zonas/${zone.slug}`} key={zone.slug}>{zone.name}</Link>)}</div></div></section>
      <section><div className="container faq"><div className="section-head"><h2>Preguntas frecuentes</h2></div>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p className="muted">{faq.answer}</p></details>)}</div></section>
    </main>
  )
}
