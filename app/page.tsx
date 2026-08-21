import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'
import { blogPosts } from '@/data/blog'
import { materials, services, site, zones } from '@/data/site'
import { faqSchema } from '@/lib/seo'

const faqs = [
  { question: '¿Compráis chatarra o cobráis por retirarla?', answer: 'Depende del material, cantidad, acceso y distancia. Lo más rápido es enviar fotos por WhatsApp para valorar si se compra, se retira gratis o requiere presupuesto.' },
  { question: '¿Trabajáis de noche o fines de semana?', answer: 'Sí. El servicio se ofrece 24 horas, todos los días, según disponibilidad y tipo de trabajo.' },
  { question: '¿Hacéis vaciado de pisos completos?', answer: 'Sí. Se pueden retirar muebles, electrodomésticos, enseres, chatarra y objetos voluminosos.' }
]

const visuals = [
  { src: '/images/vaciado-pisos.svg', title: 'Vaciado de pisos y trasteros', text: 'Retirada de muebles, enseres, cajas y objetos voluminosos.' },
  { src: '/images/compra-metales.svg', title: 'Compra de metales', text: 'Cobre, aluminio, hierro, baterías, cable y materiales aprovechables.' },
  { src: '/images/retirada-electrodomesticos.svg', title: 'Retirada de electrodomésticos', text: 'Lavadoras, neveras, hornos y electrodomésticos voluminosos.' }
]

export default function Home() {
  return (
    <main>
      <JsonLd data={faqSchema(faqs)} />
      <section className="hero hero-with-image hero-no-remote">
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

      <section><div className="container"><div className="section-head"><h2>Servicios principales</h2></div><div className="cards">{services.slice(0, 11).map((service) => <article className="card" key={service.slug}><p className="eyebrow">{service.intent}</p><h3>{service.shortTitle}</h3><p className="muted">{service.description}</p><ul>{service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><Link className="btn btn-ghost" href={`/${service.slug}`}>Ver servicio →</Link></article>)}</div></div></section>

      <section><div className="container"><div className="section-head"><h2>Trabajos que destacamos</h2></div><div className="visual-grid">{visuals.map((item) => <article className="visual-card photo" key={item.src}><img src={item.src} alt={item.title} loading="lazy" /><div className="visual-copy"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>

      <section><div className="container"><div className="section-head"><h2>Guías y recomendaciones</h2><Link className="btn btn-ghost" href="/blog">Ver blog</Link></div><div className="cards">{blogPosts.map((post) => <article className="card" key={post.slug}><p className="eyebrow">{post.category}</p><h3>{post.title}</h3><p className="muted">{post.description}</p><Link className="btn btn-ghost" href={`/blog/${post.slug}`}>Leer guía →</Link></article>)}<article className="card"><p className="eyebrow">Amazon afiliados</p><h3>Guantes y seguridad para manipular chatarra</h3><p className="muted">Guantes, gafas, mascarillas y accesorios útiles para trabajos de retirada, mudanza y manipulación de metales.</p><Link className="btn btn-primary" href="/guantes-chatarra">Ver recomendaciones</Link></article></div></div></section>

      <section><div className="container"><div className="section-head"><h2>Metales y materiales</h2><Link className="btn btn-ghost" href="/precios-chatarra">Ver precios orientativos</Link></div><div className="cards">{materials.map((material) => <article className="card" key={material.slug}><h3>{material.name}</h3><p className="muted">{material.description}</p><Link className="btn btn-ghost" href={`/compra-metales/${material.slug}`}>Más información →</Link></article>)}</div></div></section>

      <section><div className="container"><div className="section-head"><h2>Cómo funciona</h2></div><div className="steps"><div className="step"><div className="num">1</div><h3>Envía fotos</h3><p className="muted">Manda fotos del material, piso, trastero o nave por WhatsApp.</p></div><div className="step"><div className="num">2</div><h3>Valoración rápida</h3><p className="muted">Se estima el servicio según volumen, acceso, localidad, material y urgencia.</p></div><div className="step"><div className="num">3</div><h3>Recogida 24h</h3><p className="muted">Se acuerda horario, retirada y forma de pago cuando proceda.</p></div></div></div></section>

      <section><div className="container banner"><div><p className="eyebrow">Cobertura local</p><h2>Servicio en Madrid y Corredor del Henares</h2><div className="zones">{zones.map((zone) => <Link className="zone" href={`/zonas/${zone.slug}`} key={zone.slug}>{zone.name}</Link>)}</div></div><a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Pedir presupuesto</a></div></section>

      <section><div className="container faq"><div className="section-head"><h2>Preguntas frecuentes</h2></div>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p className="muted">{faq.answer}</p></details>)}</div></section>
    </main>
  )
}
