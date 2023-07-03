import { FC } from 'react'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/Mdx'

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
    <div className="prose">
      <h1>{post.title}</h1>

      <Mdx code={post.body.code} />
    </div>
  )
}

export default PostPage
