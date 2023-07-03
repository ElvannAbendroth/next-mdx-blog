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
    <div className="">
      <h1>{post.title}</h1>
      <Mdx code={post.body.code} />
      <p>---</p>
      <Link href="/blog">return to blog</Link>
    </div>
  )
}

export default PostPage
