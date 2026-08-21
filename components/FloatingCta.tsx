import { site } from '@/data/site'
import { TrackedLink } from './TrackedLink'

export function FloatingCta() {
  return (
    <div className="floating" aria-label="Acciones rápidas">
      <TrackedLink className="floating-call" href={`tel:${site.phoneHref}`} aria-label="Llamar a Chatarrero24h" eventName="click_call" eventParams={{ location: 'floating_cta' }}><span>📞</span><b>Llamar</b></TrackedLink>
      <TrackedLink className="floating-wa" href={`https://wa.me/${site.whatsapp}?text=Hola%2C%20quiero%20pedir%20presupuesto%20para%20recogida%20o%20vaciado`} target="_blank" rel="noopener noreferrer" aria-label="Enviar WhatsApp a Chatarrero24h" eventName="click_whatsapp" eventParams={{ location: 'floating_cta' }}><span>💬</span><b>WhatsApp</b></TrackedLink>
    </div>
  )
}
