import type { Metadata } from 'next'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Política de cookies',
  description: 'Política de cookies de Chatarrero24h.',
  alternates: { canonical: '/politica-cookies' }
}

export default function CookiesPage() {
  return (
    <main className="legal-page">
      <section className="container article">
        <p className="eyebrow">Cookies</p>
        <h1>Política de cookies</h1>
        <p>Esta web puede utilizar cookies técnicas y herramientas de medición para mejorar la experiencia, conocer el rendimiento de las páginas y medir contactos generados.</p>
        <h2>Qué son las cookies</h2>
        <p>Las cookies son pequeños archivos que se almacenan en el navegador para recordar preferencias o facilitar el funcionamiento de un sitio web.</p>
        <h2>Cookies utilizadas</h2>
        <ul>
          <li><strong>Técnicas:</strong> necesarias para el funcionamiento básico de la web.</li>
          <li><strong>Analítica:</strong> medición agregada mediante Google Analytics y Google Tag Manager.</li>
          <li><strong>Afiliación:</strong> enlaces externos a Amazon Afiliados cuando visitas recomendaciones de productos.</li>
        </ul>
        <h2>Gestión del consentimiento</h2>
        <p>Al acceder al sitio puedes aceptar o rechazar la medición no esencial desde el aviso de cookies. También puedes borrar o bloquear cookies desde la configuración de tu navegador.</p>
        <h2>Contacto</h2>
        <p>Para consultas sobre cookies puedes escribir a {site.email}.</p>
      </section>
    </main>
  )
}
