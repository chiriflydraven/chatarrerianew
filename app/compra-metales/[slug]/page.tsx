import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs, breadcrumbSchema } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { materials, services, site, zones } from '@/data/site'
import { faqSchema, serviceSchema } from '@/lib/seo'

export function generateStaticParams() {
  return materials.map((material) => ({ slug: material.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const material = materials.find((item) => item.slug === params.slug)
  if (!material) return {}
  const title = `Compra de ${material.name.toLowerCase()} en Madrid | Chatarrero24h`
  const description = `Compra y recogida de ${material.name.toLowerCase()} en Madrid, San Fernando de Henares, Coslada y alrededores. Valoración según cantidad, calidad, acceso y cotización.`
  return {
    title,
    description,
    alternates: { canonical: `/compra-metales/${material.slug}` },
    openGraph: { title, description, url: `${site.url}/compra-metales/${material.slug}`, type: 'website' }
  }
}

export default function MaterialPage({ params }: { params: { slug: string } }) {
  const material = materials.find((item) => item.slug === params.slug)
  if (!material) notFound()
  const title = `Compra de ${material.name.toLowerCase()} en Madrid`
  const description = `Compra y recogida de ${material.name.toLowerCase()} en Madrid y alrededores. ${material.description} El precio depende de cantidad, pureza, mezcla, acceso, transporte y cotización.`
  const crumbs = [
    { href: '/compra-metales-madrid', label: 'Compra de metales' },
    { href: `/compra-metales/${material.slug}`, label: material.name }
  ]
  const faqs = [
    { question: `¿Compráis ${material.name.toLowerCase()} a domicilio?`, answer: 'Sí, según cantidad, zona, acceso y tipo de material. Lo más rápido es enviar fotos por WhatsApp.' },
    { question: `¿Cuánto vale el ${material.name.toLowerCase()}?`, answer: 'No hay un precio fijo sin valoración. Depende de pureza, mezcla, volumen, transporte y cotización del momento.' },
    { question: '¿Qué datos debo enviar?', answer: 'Fotos claras, localidad, cantidad aproximada, acceso y si el material está separado o mezclado.' }
  ]
  const related = services.filter((service) => service.slug.includes('compra') || service.slug.includes('recogida')).slice(0, 4)
  return (
    <main>
      <JsonLd data={serviceSchema(title, description)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="service-hero">
        <div className="hero-shade" />
        <div className="container article service-hero-content">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow">compra de {material.name.toLowerCase()} Madrid</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <ul className="check-list">
            <li>Valoración por fotos antes de desplazamiento.</li>
            <li>Servicio en Madrid, San Fernando de Henares, Coslada y Corredor del Henares.</li>
            <li>Recogida para particulares, talleres, reformas, locales, naves y almacenes.</li>
          </ul>
          <div className="cta-row">
            <a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}?text=Hola%2C%20quiero%20valorar%20${encodeURIComponent(material.name)}`} target="_blank" rel="noopener noreferrer">Enviar fotos por WhatsApp</a>
            <a className="btn btn-ghost" href={`tel:${site.phoneHref}`}>Llamar {site.phoneDisplay}</a>
          </div>
        </div>
      </section>
      <section><div className="container"><div className="section-head"><h2>Cómo se valora</h2></div><div className="steps"><div className="step"><div className="num">1</div><h3>Tipo de material</h3><p className="muted">No vale igual un material limpio que mezclado, pintado, con plásticos o impurezas.</p></div><div className="step"><div className="num">2</div><h3>Cantidad y acceso</h3><p className="muted">Influyen el peso aproximado, la localidad, planta, ascensor, carga y transporte.</p></div><div className="step"><div className="num">3</div><h3>Cotización</h3><p className="muted">Los metales cambian de precio. Por eso se confirma con fotos y datos actualizados.</p></div></div></div></section>
      <section><div className="container"><div className="section-head"><h2>Servicios relacionados</h2></div><div className="cards">{related.map((service) => <article className="card" key={service.slug}><h3>{service.shortTitle}</h3><p className="muted">{service.description}</p><Link className="btn btn-ghost" href={`/${service.slug}`}>Ver servicio →</Link></article>)}</div></div></section>
      <section><div className="container"><div className="section-head"><h2>Zonas de recogida</h2></div><div className="zones">{zones.map((zone) => <Link className="zone" href={`/zonas/${zone.slug}`} key={zone.slug}>{zone.name}</Link>)}</div></div></section>
      <section><div className="container faq"><div className="section-head"><h2>Preguntas frecuentes</h2></div>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p className="muted">{faq.answer}</p></details>)}</div></section>
    </main>
  )
}
