import type { Metadata } from 'next'
import Link from 'next/link'
import { amazonSearchUrl, blogPosts } from '@/data/blog'
import { site } from '@/data/site'
import { JsonLd } from '@/components/JsonLd'

const post = blogPosts.find((item) => item.slug === 'mejores-guantes-para-manipular-chatarra')!

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: { title: post.title, description: post.description, url: `${site.url}/blog/${post.slug}`, type: 'article' }
}

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@type': 'Organization', name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`
  }
  return <main><JsonLd data={articleSchema} /><section className="hero blog-hero"><div className="container article"><p className="eyebrow">{post.category}</p><h1>{post.title}</h1><p className="lead">{post.description}</p><p className="muted">Aviso: esta guía incluye enlaces de afiliado de Amazon. Si compras desde esos enlaces, la web puede recibir una comisión sin coste adicional para ti.</p></div></section><section><article className="container article"><h2>Resumen rápido</h2><p>Para manipular chatarra, muebles, cajas, electrodomésticos o materiales metálicos conviene priorizar seguridad, agarre, resistencia y comodidad. No es lo mismo mover cajas que manipular hierro, cable, cobre, aluminio o piezas con aristas.</p><h2>Qué revisar antes de comprar</h2><ul><li>Resistencia al corte y a la abrasión.</li><li>Buen agarre en seco y con polvo.</li><li>Talla adecuada para no perder movilidad.</li><li>Material reforzado en palma y dedos.</li><li>Uso previsto: metal, mudanza, trastero, jardín o taller.</li></ul><h2>Productos recomendados</h2><div className="cards affiliate-grid">{post.products.map((product) => <article className="card" key={product.query}><h3>{product.label}</h3><p className="muted">Búsqueda recomendada en Amazon España con el tag de afiliado configurado.</p><a className="btn btn-primary" href={amazonSearchUrl(product.query)} target="_blank" rel="nofollow sponsored noopener noreferrer">Ver opciones en Amazon</a></article>)}</div><h2>Cuándo llamar a un profesional</h2><p>Si hay gran volumen, electrodomésticos, muebles pesados, acceso complicado o metales acumulados, lo más seguro es pedir valoración profesional. En Chatarrero24h puedes enviar fotos por WhatsApp para recibir una orientación rápida.</p><div className="cta-row"><a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Pedir valoración por WhatsApp</a><Link className="btn btn-ghost" href="/recogida-chatarra-madrid">Ver recogida de chatarra</Link></div></article></section></main>
}
