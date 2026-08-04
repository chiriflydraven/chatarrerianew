import { site, zones } from '@/data/site'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    alternateName: site.shortName,
    founder: site.owner,
    url: site.url,
    telephone: site.phoneDisplay,
    email: site.email,
    description: site.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Fernando de Henares',
      addressRegion: 'Madrid',
      addressCountry: 'ES'
    },
    areaServed: zones.map((zone) => zone.name),
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    }],
    priceRange: '€€'
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${site.url}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }
}

export function serviceSchema(name: string, description: string, areaServed = 'Comunidad de Madrid') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    areaServed,
    provider: {
      '@type': 'LocalBusiness',
      name: site.name,
      telephone: site.phoneDisplay,
      url: site.url
    }
  }
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
}
