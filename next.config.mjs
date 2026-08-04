/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp']
  },
  async redirects() {
    return [
      { source: '/servicios', destination: '/recogida-chatarra-madrid', permanent: true },
      { source: '/precios', destination: '/precios-chatarra', permanent: true },
      { source: '/zonas-de-servicio', destination: '/zonas/san-fernando-de-henares', permanent: true },
      { source: '/compra-de-chatarra', destination: '/compra-metales-madrid', permanent: true },
      { source: '/contacto.html', destination: '/contacto', permanent: true }
    ]
  }
}
export default nextConfig
