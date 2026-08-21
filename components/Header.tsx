import Link from 'next/link'
import { site } from '@/data/site'

export function Header() {
  return (
    <header className="topbar">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="Inicio Chatarrero24h">
          <span className="mark">♻️</span>
          <span>Chatarrero24h</span>
        </Link>
        <nav className="navlinks" aria-label="Navegación principal">
          <Link href="/recogida-chatarra-madrid">Chatarra</Link>
          <Link href="/compra-metales-madrid">Metales</Link>
          <Link href="/vaciado-pisos-madrid">Vaciados</Link>
          <Link href="/mudanzas-madrid">Mudanzas</Link>
          <Link href="/precios-chatarra">Precios</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/guantes-chatarra">Amazon</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
        <div className="cta-row header-cta">
          <a className="btn btn-ghost" href={`tel:${site.phoneHref}`}>Llamar</a>
          <a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}?text=Hola%2C%20quiero%20enviar%20fotos%20para%20una%20recogida%20o%20vaciado`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </header>
  )
}
