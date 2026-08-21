import Link from 'next/link'
import { materials, services, site, zones } from '@/data/site'

export function Footer() {
  const priorityServices = services.filter((service) => !['contacto'].includes(service.slug)).slice(0, 12)
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>Chatarrero 24h Madrid</h2>
          <p>{site.description}</p>
          <p><strong>{site.phoneDisplay}</strong><br />{site.email}<br />{site.address}<br />{site.hours}</p>
        </div>
        <div>
          <h3>Servicios</h3>
          {priorityServices.map((service) => (
            <p key={service.slug}><Link href={`/${service.slug}`}>{service.shortTitle}</Link></p>
          ))}
        </div>
        <div>
          <h3>Materiales</h3>
          {materials.slice(0, 10).map((material) => (
            <p key={material.slug}><Link href={`/compra-metales/${material.slug}`}>{material.name}</Link></p>
          ))}
          <h3>Zonas</h3>
          {zones.slice(0, 8).map((zone) => (
            <p key={zone.slug}><Link href={`/zonas/${zone.slug}`}>{zone.name}</Link></p>
          ))}
        </div>
        <div>
          <h3>Recursos</h3>
          <p><Link href="/blog">Blog</Link></p>
          <p><Link href="/guantes-chatarra">Guantes y seguridad</Link></p>
          <p><Link href="/blog/cuanto-vale-el-cobre-usado-en-madrid">Precio del cobre usado</Link></p>
          <p><Link href="/blog/como-vender-chatarra-en-madrid">Vender chatarra en Madrid</Link></p>
          <p><Link href="/blog/retirada-electrodomesticos-viejos-madrid">Retirar electrodomésticos</Link></p>
          <h3>Legal</h3>
          <p><Link href="/aviso-legal">Aviso legal</Link></p>
          <p><Link href="/politica-privacidad">Privacidad</Link></p>
          <p><Link href="/politica-cookies">Cookies</Link></p>
        </div>
      </div>
    </footer>
  )
}
