import { MetadataRoute } from 'next'
import { blogPosts, materials, services, site, zones } from '@/data/site'

type Frequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
type Entry = { path: string; priority: number; changeFrequency: Frequency }

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: Entry[] = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    ...services.map((service, index) => ({ path: service.slug, priority: index < 2 ? 0.95 : 0.88, changeFrequency: 'weekly' as Frequency })),
    ...zones.map((zone) => ({ path: `zonas/${zone.slug}`, priority: 0.82, changeFrequency: 'monthly' as Frequency })),
    ...materials.map((material) => ({ path: `compra-metales/${material.slug}`, priority: 0.78, changeFrequency: 'monthly' as Frequency })),
    { path: 'blog', priority: 0.72, changeFrequency: 'weekly' },
    ...blogPosts.map((post) => ({ path: `blog/${post.slug}`, priority: 0.68, changeFrequency: 'monthly' as Frequency })),
    { path: 'aviso-legal', priority: 0.2, changeFrequency: 'yearly' },
    { path: 'politica-privacidad', priority: 0.2, changeFrequency: 'yearly' },
    { path: 'politica-cookies', priority: 0.2, changeFrequency: 'yearly' }
  ]
  const unique = Array.from(new Map(entries.map((entry) => [entry.path, entry])).values())
  return unique.map((entry) => ({
    url: entry.path ? `${site.url}/${entry.path}` : site.url,
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority
  }))
}
