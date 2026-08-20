import BlogPostPage, { generateMetadata as dynamicGenerateMetadata } from '../[slug]/page'

const params = { slug: 'mejores-guantes-para-manipular-chatarra' }

export function generateMetadata() {
  return dynamicGenerateMetadata({ params })
}

export default function Page() {
  return <BlogPostPage params={params} />
}
