import Link from 'next/link'
import { amazonSearchUrl, blogPosts } from '@/data/blog'
import { JsonLd } from '@/components/JsonLd'
import { site } from '@/data/site'

const post = blogPosts.find((item) => item.slug === 'mejores-guantes-para-manipular-chatarra')!

export const metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: '/guantes-chatarra' }
}

export default function Page() {
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.description, datePublished: post.date, dateModified: post.updated, author: { '@type': 'Organization', name: site.name }, publisher: { '@type': 'Organization', name: site.name, url: site.url }, mainEntityOfPage: `${site.url}/guantes-chatarra` }
  return <main><JsonLd data={schema} /><section className="hero blog-hero"><div className="container article"><p className="eyebrow">{post.category}</p><h1>{post.title}</h1><p className="lead">{post.description}</p><p className="muted">Aviso: esta guía incluye enlaces de afiliado de Amazon. Si compras desde esos enlaces, la web puede recibir una comisión sin coste adicional para ti.</p></div></section><section><article className="container article"><h2>Resumen rápido</h2><p>Para manipular chatarra, muebles, cajas, electrodomésticos o materiales metálicos conviene priorizar seguridad, agarre, resistencia y comodidad.</p><h2>Productos recomendados</h2><div className="cards affiliate-grid">{post.products.map((product) => <article className="card" key={product.query}><h3>{product.label}</h3><p className="muted">Búsqueda recomendada en Amazon España con el tag de afiliado configurado.</p><a className="btn btn-primary" href={amazonSearchUrl(product.query)} target="_blank" rel="nofollow sponsored noopener noreferrer">Ver opciones en Amazon</a></article>)}</div><h2>Cuándo llamar a un profesional</h2><p>Si hay gran volumen, electrodomésticos, muebles pesados, acceso complicado o metales acumulados, lo más seguro es pedir valoración profesional.</p><div className="cta-row"><a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Pedir valoración por WhatsApp</a><Link className="btn btn-ghost" href="/recogida-chatarra-madrid">Ver recogida de chatarra</Link></div></article></section></main>
}
