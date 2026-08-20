export const affiliateTag = 'chiriflydra02-21'

export const blogPosts = [
  {
    slug: 'mejores-guantes-para-manipular-chatarra',
    title: 'Mejores guantes para manipular chatarra y metales con seguridad',
    description: 'Guía práctica para elegir guantes resistentes para manipular chatarra, metal, herramientas, cajas, electrodomésticos y materiales cortantes.',
    category: 'Herramientas y seguridad',
    date: '2026-08-20',
    updated: '2026-08-20',
    keywords: ['guantes para chatarra', 'guantes anticorte', 'manipular metales', 'seguridad chatarra'],
    products: [
      { label: 'Guantes anticorte', query: 'guantes anticorte trabajo' },
      { label: 'Guantes de cuero', query: 'guantes cuero trabajo metal' },
      { label: 'Guantes nitrilo reforzado', query: 'guantes nitrilo trabajo reforzado' }
    ]
  },
  {
    slug: 'como-preparar-un-piso-para-un-vaciado',
    title: 'Cómo preparar un piso antes de un vaciado: guía rápida',
    description: 'Pasos para preparar un piso, trastero o vivienda antes de un servicio de vaciado: fotos, accesos, objetos aprovechables y retirada de enseres.',
    category: 'Vaciado de pisos',
    date: '2026-08-20',
    updated: '2026-08-20',
    keywords: ['preparar piso para vaciado', 'vaciado de pisos', 'retirada de muebles'],
    products: [
      { label: 'Cajas resistentes', query: 'cajas mudanza resistentes' },
      { label: 'Bolsas de escombros', query: 'bolsas escombros resistentes' },
      { label: 'Cinchas de transporte', query: 'cinchas transporte mudanza' }
    ]
  }
]

export function amazonSearchUrl(query: string) {
  return `https://www.amazon.es/s?k=${encodeURIComponent(query)}&tag=${affiliateTag}`
}
