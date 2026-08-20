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
      { label: 'Guantes anticorte nivel 5', query: 'guantes anticorte nivel 5 trabajo' },
      { label: 'Guantes de cuero reforzado', query: 'guantes cuero reforzado trabajo metal' },
      { label: 'Guantes nitrilo reforzado', query: 'guantes nitrilo trabajo reforzado' },
      { label: 'Guantes para soldadura', query: 'guantes soldadura cuero largos' },
      { label: 'Guantes mecánico profesional', query: 'guantes mecanico profesional trabajo' },
      { label: 'Gafas de seguridad', query: 'gafas seguridad trabajo proteccion' },
      { label: 'Mascarilla antipolvo trabajo', query: 'mascarilla antipolvo trabajo' },
      { label: 'Rodilleras de trabajo', query: 'rodilleras trabajo profesional' }
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
      { label: 'Cajas de mudanza resistentes', query: 'cajas mudanza resistentes' },
      { label: 'Bolsas de escombros resistentes', query: 'bolsas escombros resistentes' },
      { label: 'Cinchas de transporte', query: 'cinchas transporte mudanza' },
      { label: 'Carretilla plegable', query: 'carretilla plegable carga mudanza' },
      { label: 'Film transparente embalaje', query: 'film embalaje mudanza' },
      { label: 'Cinta americana resistente', query: 'cinta americana resistente' },
      { label: 'Manta de mudanza', query: 'manta mudanza proteccion muebles' },
      { label: 'Rotuladores permanentes', query: 'rotuladores permanentes cajas mudanza' }
    ]
  }
]

export function amazonSearchUrl(query: string) {
  return `https://www.amazon.es/s?k=${encodeURIComponent(query)}&tag=${affiliateTag}`
}
