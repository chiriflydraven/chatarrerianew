import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { TrackedLink } from '@/components/TrackedLink'
import { JsonLd } from '@/components/JsonLd'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contacto Chatarrero24h | Presupuesto por WhatsApp',
  description: 'Contacta con Chatarrero24h para recogida de chatarra, compra de metales, vaciado de pisos, trasteros, naves, electrodomésticos, portes y mudanzas en Madrid.',
  alternates: { canonical: '/contacto' }
}

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contacto Chatarrero24h',
    url: `${site.url}/contacto`,
    mainEntity: { '@type': 'LocalBusiness', name: site.name, telephone: site.phoneDisplay, url: site.url }
  }
  return (
    <main>
      <JsonLd data={schema} />
      <section className="hero"><div className="container grid-hero"><div><p className="eyebrow">Contacto 24h</p><h1>Presupuesto rápido por WhatsApp.</h1><p className="lead">Indica servicio, localidad, volumen aproximado y detalles de acceso. Si puedes, después envía fotos por WhatsApp para una valoración más rápida.</p><div className="cta-row"><TrackedLink className="btn btn-primary" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" eventName="click_whatsapp" eventParams={{ location: 'contacto_hero' }}>Abrir WhatsApp</TrackedLink><TrackedLink className="btn btn-ghost" href={`tel:${site.phoneHref}`} eventName="click_call" eventParams={{ location: 'contacto_hero' }}>Llamar {site.phoneDisplay}</TrackedLink></div></div><div className="card"><h2>Solicitar presupuesto</h2><p className="muted">El formulario abre WhatsApp con el mensaje preparado.</p><ContactForm /></div></div></section>
    </main>
  )
}
