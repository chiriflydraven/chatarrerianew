import { site } from '@/data/site'

export function FloatingCta() {
  return (
    <div className="floating" aria-label="Acciones rápidas">
      <a href={`tel:${site.phoneHref}`} aria-label="Llamar a Chatarrero24h">📞</a>
      <a href={`https://wa.me/${site.whatsapp}?text=Hola%2C%20quiero%20pedir%20presupuesto%20para%20recogida%20o%20vaciado`} target="_blank" rel="noopener noreferrer" aria-label="Enviar WhatsApp a Chatarrero24h">💬</a>
    </div>
  )
}
