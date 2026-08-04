import Link from 'next/link'

type Crumb = { href: string; label: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Inicio</Link>
      {items.map((item) => (
        <span key={item.href}>/ <Link href={item.href}>{item.label}</Link></span>
      ))}
    </nav>
  )
}

export function breadcrumbSchema(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://chatarrero24h.com' },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `https://chatarrero24h.com${item.href}`
      }))
    ]
  }
}
