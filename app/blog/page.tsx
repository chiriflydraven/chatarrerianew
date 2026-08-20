import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Blog sobre chatarra, vaciados, mudanzas y reciclaje',
  description: 'Guías útiles sobre chatarra, metales, vaciado de pisos, trasteros, mudanzas, herramientas y seguridad.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Blog Chatarrero24h', description: 'Guías útiles sobre chatarra, metales, vaciados y herramientas.', url: `${site.url}/blog`, type: 'website' }
}

export default function BlogPage() {
  return <main><section className="hero"><div className="container article"><p className="eyebrow">Blog y guías</p><h1>Guías sobre chatarra, vaciados, mudanzas y reciclaje</h1><p className="lead">Contenido pensado para resolver dudas reales, mejorar la autoridad temática y preparar monetización con Amazon Afiliados sin interferir en las páginas comerciales.</p></div></section><section><div className="container"><div className="cards">{blogPosts.map((post) => <article className="card" key={post.slug}><p className="eyebrow">{post.category}</p><h3>{post.title}</h3><p className="muted">{post.description}</p><Link className="btn btn-ghost" href={`/blog/${post.slug}`}>Leer guía →</Link></article>)}</div></div></section></main>
}
