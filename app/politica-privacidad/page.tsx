import type { Metadata } from 'next'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Política de privacidad de Chatarrero24h.',
  alternates: { canonical: '/politica-privacidad' }
}

export default function PrivacidadPage() {
  return (
    <main className="legal-page">
      <section className="container article">
        <p className="eyebrow">Privacidad</p>
        <h1>Política de privacidad</h1>
        <p>En Chatarrero24h tratamos los datos que nos facilitas para responder solicitudes de presupuesto, llamadas, mensajes de WhatsApp y consultas relacionadas con nuestros servicios.</p>
        <h2>Datos que podemos tratar</h2>
        <ul>
          <li>Nombre o datos de contacto que facilites voluntariamente.</li>
          <li>Teléfono, email, localidad, dirección aproximada o detalles del servicio.</li>
          <li>Fotos o descripciones enviadas por WhatsApp para valorar trabajos.</li>
          <li>Datos técnicos de navegación mediante herramientas de medición.</li>
        </ul>
        <h2>Finalidad</h2>
        <p>Usamos los datos para atender solicitudes, preparar presupuestos, organizar recogidas y mejorar la web.</p>
        <h2>Base legal</h2>
        <p>La base legal es tu consentimiento al contactar, la aplicación de medidas precontractuales y el interés legítimo en mantener y mejorar el sitio web.</p>
        <h2>Conservación</h2>
        <p>Los datos se conservarán durante el tiempo necesario para atender la solicitud y cumplir posibles obligaciones legales.</p>
        <h2>Derechos</h2>
        <p>Puedes solicitar acceso, rectificación, supresión u oposición escribiendo a {site.email}.</p>
      </section>
    </main>
  )
}
