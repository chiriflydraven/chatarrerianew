import type { Metadata } from 'next'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Aviso legal',
  description: 'Aviso legal de Chatarrero24h.',
  alternates: { canonical: '/aviso-legal' }
}

export default function AvisoLegalPage() {
  return (
    <main className="legal-page">
      <section className="container article">
        <p className="eyebrow">Información legal</p>
        <h1>Aviso legal</h1>
        <p>Este sitio web pertenece a Chatarrero24h, servicio de recogida de chatarra, compra de metales, vaciados, portes y mudanzas en Madrid y Corredor del Henares.</p>
        <h2>Datos de contacto</h2>
        <p><strong>Nombre comercial:</strong> Chatarrero24h Madrid</p>
        <p><strong>Teléfono:</strong> {site.phoneDisplay}</p>
        <p><strong>Email:</strong> {site.email}</p>
        <p><strong>Zona principal:</strong> {site.base}</p>
        <h2>Uso del sitio web</h2>
        <p>La información publicada tiene carácter orientativo. Las valoraciones, precios y condiciones dependen del material, volumen, acceso, distancia, urgencia y disponibilidad.</p>
        <h2>Propiedad intelectual</h2>
        <p>Los textos, estructura, diseño y elementos visuales de esta web están protegidos. No está permitida su reproducción sin autorización.</p>
        <h2>Responsabilidad</h2>
        <p>Chatarrero24h procura mantener la información actualizada, pero no garantiza que no existan errores puntuales o cambios de disponibilidad.</p>
      </section>
    </main>
  )
}
