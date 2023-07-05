import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/Mdx'
import Link from 'next/link'

interface PostPageProps {
  params: {
    slug: string
  }
}

async function getPostFromParams(slug: string) {
  const post = allPosts.find(post => post.slugAsParams === slug)
  return !post ? notFound() : post
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params.slug)

  return (
    <div className="flex flex-col gap-8">
      <article className="  max-w-none prose-a:text-primary hover:prose-a:text-primary-hover">
        <h1 className="typo-h1">{post.title}</h1>
        <Mdx code={post.body.code} />
      </article>
      <hr />
      <span>
        <Link className="bg-primary p-2 rounded text-primary-foreground text-sm hover:bg-primary/80" href="/">
          <button>return to blog</button>
        </Link>
      </span>
    </div>
  )
}
