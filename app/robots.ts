import { MetadataRoute } from 'next'
import { site } from '@/data/site'

export default function robots(): MetadataRoute.Robots {
  const disallow = ['/api/', '/admin/', '/tmp/', '/gracias/']
  return {
    rules: [
      { userAgent: 'Googlebot', allow: '/', disallow },
      { userAgent: 'Googlebot-Image', allow: ['/images/', '/'] },
      { userAgent: 'AdsBot-Google', allow: '/' },
      { userAgent: 'Bingbot', allow: '/', disallow },
      { userAgent: '*', allow: '/', disallow }
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url
  }
}
