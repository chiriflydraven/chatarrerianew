import type { Metadata } from 'next'
import './globals.css'
import { FloatingCta } from '@/components/FloatingCta'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { JsonLd } from '@/components/JsonLd'
import { site } from '@/data/site'
import { localBusinessSchema, websiteSchema } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Chatarrero 24h Madrid | Recogida de chatarra, vaciados y mudanzas',
    template: '%s | Chatarrero24h'
  },
  description: 'Chatarrero 24h en Madrid, San Fernando de Henares y Coslada. Recogida y compra de chatarra, metales, vaciado de pisos, trasteros, naves, electrodomésticos, portes y mudanzas.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Chatarrero 24h Madrid',
    description: 'Recogida de chatarra, compra de metales, vaciados y mudanzas en Madrid. Servicio 24 horas.',
    url: site.url,
    siteName: site.name,
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chatarrero 24h Madrid',
    description: 'Recogida de chatarra, compra de metales, vaciados y mudanzas en Madrid.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        {children}
        <Footer />
        <FloatingCta />
      </body>
    </html>
  )
}
