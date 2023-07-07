import { allPages } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/Mdx'

interface PagePageProps {
  params: {
    slug: string
  }
}

async function getPageFromParams(slug: string) {
  const page = allPages.filter(page => page.slugAsParams != 'home').find(page => page.slugAsParams === slug)
  return !page ? notFound() : page
}

export default async function PagePage({ params }: PagePageProps) {
  const page = await getPageFromParams(params.slug)

  return (
    <div className="flex flex-col gap-8">
      <article>
        <h1 className="typo-h1">{page.title}</h1>
        <Mdx code={page.body.code} />
      </article>
      <hr />
    </div>
  )
}
