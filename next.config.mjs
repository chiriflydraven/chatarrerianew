/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  },
  async redirects() {
    return [
      { source: '/servicios', destination: '/recogida-chatarra-madrid', permanent: true },
      { source: '/servicios/', destination: '/recogida-chatarra-madrid', permanent: true },
      { source: '/servicios/recogida-chatarra', destination: '/recogida-chatarra-madrid', permanent: true },
      { source: '/servicios/recogida-chatarra/', destination: '/recogida-chatarra-madrid', permanent: true },
      { source: '/servicios/compra-venta', destination: '/compra-metales-madrid', permanent: true },
      { source: '/servicios/compra-venta/', destination: '/compra-metales-madrid', permanent: true },
      { source: '/servicios/compra-electrodomesticos', destination: '/retirada-electrodomesticos-madrid', permanent: true },
      { source: '/servicios/compra-electrodomesticos/', destination: '/retirada-electrodomesticos-madrid', permanent: true },
      { source: '/chatarrero-24-horas', destination: '/recogida-chatarra-madrid', permanent: true },
      { source: '/chatarrero-24-horas/', destination: '/recogida-chatarra-madrid', permanent: true },
      { source: '/sobre-nosotros', destination: '/contacto', permanent: true },
      { source: '/sobre-nosotros/', destination: '/contacto', permanent: true },
      { source: '/precios', destination: '/precios-chatarra', permanent: true },
      { source: '/precios/', destination: '/precios-chatarra', permanent: true },
      { source: '/zonas-de-servicio', destination: '/zonas/san-fernando-de-henares', permanent: true },
      { source: '/zonas-de-servicio/', destination: '/zonas/san-fernando-de-henares', permanent: true },
      { source: '/compra-de-chatarra', destination: '/compra-metales-madrid', permanent: true },
      { source: '/compra-de-chatarra/', destination: '/compra-metales-madrid', permanent: true },
      { source: '/contacto.html', destination: '/contacto', permanent: true }
    ]
  }
}
export default nextConfig
