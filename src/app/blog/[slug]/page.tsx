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

export const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams(params.slug)

  return (
    <div className="prose max-w-none">
      <h1>{post.title}</h1>
      <Mdx code={post.body.code} />
      <hr />
      <Link className="bg-primary p-2 rounded text-primary-foreground text-sm hover:bg-primary/80" href="/">
        <button>return to blog</button>
      </Link>
    </div>
  )
}

export default PostPage
