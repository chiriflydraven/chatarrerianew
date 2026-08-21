'use client'

import { FormEvent, useState } from 'react'
import { site } from '@/data/site'
import { track } from '@/lib/tracking'

export function ContactForm() {
  const [started, setStarted] = useState(false)
  const [name, setName] = useState('')
  const [service, setService] = useState('')
  const [zone, setZone] = useState('')
  const [message, setMessage] = useState('')

  function markStart() {
    if (!started) {
      track('form_start', { form_name: 'contacto_presupuesto', page_path: window.location.pathname })
      setStarted(true)
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    track('lead_submit', { form_name: 'contacto_presupuesto', service, zone, page_path: window.location.pathname })
    const text = `Hola, quiero pedir presupuesto.%0A%0ANombre: ${encodeURIComponent(name || 'No indicado')}%0AServicio: ${encodeURIComponent(service || 'No indicado')}%0AZona: ${encodeURIComponent(zone || 'No indicada')}%0ADetalles: ${encodeURIComponent(message || 'No indicado')}`
    window.location.href = `https://wa.me/${site.whatsapp}?text=${text}`
  }

  return (
    <form className="form" onSubmit={submit}>
      <input className="input" name="name" placeholder="Nombre" value={name} onChange={(event) => { markStart(); setName(event.target.value) }} />
      <input className="input" name="service" placeholder="Servicio: chatarra, vaciado, metales, mudanza..." value={service} onChange={(event) => { markStart(); setService(event.target.value) }} />
      <input className="input" name="zone" placeholder="Localidad o zona" value={zone} onChange={(event) => { markStart(); setZone(event.target.value) }} />
      <textarea className="input" name="message" placeholder="Describe el trabajo y si puedes envía fotos después por WhatsApp" rows={5} value={message} onChange={(event) => { markStart(); setMessage(event.target.value) }} />
      <button className="btn btn-primary" type="submit">Enviar por WhatsApp</button>
    </form>
  )
}
