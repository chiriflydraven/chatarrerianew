import Image from 'next/image'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'
import { materials, services, site, zones } from '@/data/site'
import { faqSchema } from '@/lib/seo'

const faqs = [
  { question: '¿Compráis chatarra o cobráis por retirarla?', answer: 'Depende del material, cantidad, acceso y distancia. Lo más rápido es enviar fotos por WhatsApp para valorar si se compra, se retira gratis o requiere presupuesto.' },
  { question: '¿Trabajáis de noche o fines de semana?', answer: 'Sí. El servicio se ofrece 24 horas, todos los días, según disponibilidad y tipo de trabajo.' },
  { question: '¿Hacéis vaciado de pisos completos?', answer: 'Sí. Se pueden retirar muebles, electrodomésticos, enseres, chatarra y objetos voluminosos.' }
]

const visuals = [
  { src: '/images/vaciado-pisos-madrid.svg', title: 'Vaciado de pisos y trasteros', text: 'Retirada de muebles, enseres, cajas y objetos voluminosos.' },
  { src: '/images/compra-metales-madrid.svg', title: 'Compra de metales', text: 'Cobre, aluminio, hierro, baterías, cable y materiales aprovechables.' },
  { src: '/images/electrodomesticos-madrid.svg', title: 'Retirada de electrodomésticos', text: 'Lavadoras, neveras, hornos y electrodomésticos voluminosos.' }
]

export default function Home() {
  return (
    <main>
      <JsonLd data={faqSchema(faqs)} />
      <section className="hero hero-with-image">
        <Image src="/images/hero-madrid-chatarra.svg" alt="Chatarrero 24h en Madrid con camión de recogida de chatarra y skyline" fill priority className="hero-image" />
        <div className="hero-shade" />
        <div className="container grid-hero hero-content">
          <div>
            <p className="eyebrow">Chatarrero 24h en San Fernando, Coslada y Madrid</p>
            <h1>Recogida de chatarra, vaciados y portes en Madrid.</h1>
            <p className="lead">Compra y recogida de chatarra, metales, electrodomésticos, vaciado de pisos, trasteros, naves, almacenes, mudanzas y portes. Envía fotos por WhatsApp y recibe una valoración rápida.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}?text=Hola%2C%20quiero%20pedir%20presupuesto%20para%20recogida%20o%20vaciado`} target="_blank" rel="noopener noreferrer">Enviar fotos por WhatsApp</a>
              <a className="btn btn-ghost" href={`tel:${site.phoneHref}`}>Llamar {site.phoneDisplay}</a>
            </div>
            <div className="trust">
              <div className="pill"><strong>24h</strong><span className="muted">Todos los días</span></div>
              <div className="pill"><strong>Madrid Este</strong><span className="muted">San Fernando y Coslada</span></div>
              <div className="pill"><strong>Valoración</strong><span className="muted">Según material y volumen</span></div>
            </div>
          </div>
          <div className="quote-card glass"><p className="eyebrow">Respuesta rápida</p><h2>¿Qué quieres retirar?</h2><p className="muted">Chatarra, muebles, electrodomésticos, naves, trasteros o una mudanza completa.</p><div className="meter"><span /></div></div>
        </div>
      </section>

      <section><div className="container"><div className="section-head"><h2>Servicios principales</h2><p className="muted">Arquitectura preparada para SEO local, Google Ads y respuestas de IA.</p></div><div className="cards">{services.slice(0, 11).map((service) => <article className="card" key={service.slug}><p className="eyebrow">{service.intent}</p><h3>{service.shortTitle}</h3><p className="muted">{service.description}</p><ul>{service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><Link className="btn btn-ghost" href={`/${service.slug}`}>Ver servicio →</Link></article>)}</div></div></section>

      <section><div className="container"><div className="section-head"><h2>Trabajos que destacamos</h2><p className="muted">Bloques visuales optimizados para confianza, conversión y comprensión semántica.</p></div><div className="visual-grid">{visuals.map((item) => <article className="visual-card" key={item.src}><Image src={item.src} alt={item.title} width={1200} height={800} /><div className="visual-copy"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>

      <section><div className="container"><div className="section-head"><h2>Metales y materiales</h2><Link className="btn btn-ghost" href="/precios-chatarra">Ver precios orientativos</Link></div><div className="cards">{materials.map((material) => <article className="card" key={material.slug}><h3>{material.name}</h3><p className="muted">{material.description}</p><Link className="btn btn-ghost" href={`/compra-metales/${material.slug}`}>Más información →</Link></article>)}</div></div></section>

      <section><div className="container"><div className="section-head"><h2>Cómo funciona</h2><p className="muted">Proceso pensado para convertir visitas móviles en llamadas y WhatsApp.</p></div><div className="steps"><div className="step"><div className="num">1</div><h3>Envía fotos</h3><p className="muted">Manda fotos del material, piso, trastero o nave por WhatsApp.</p></div><div className="step"><div className="num">2</div><h3>Valoración rápida</h3><p className="muted">Se estima el servicio según volumen, acceso, localidad, material y urgencia.</p></div><div className="step"><div className="num">3</div><h3>Recogida 24h</h3><p className="muted">Se acuerda horario, retirada y forma de pago cuando proceda.</p></div></div></div></section>

      <section><div className="container banner"><div><p className="eyebrow">Cobertura local</p><h2>Servicio en Madrid y Corredor del Henares</h2><div className="zones">{zones.map((zone) => <Link className="zone" href={`/zonas/${zone.slug}`} key={zone.slug}>{zone.name}</Link>)}</div></div><a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Pedir presupuesto</a></div></section>

      <section><div className="container faq"><div className="section-head"><h2>Preguntas frecuentes</h2></div>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p className="muted">{faq.answer}</p></details>)}</div></section>
    </main>
  )
}
