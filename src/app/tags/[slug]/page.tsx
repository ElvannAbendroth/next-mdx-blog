import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { sortByMostRecent } from '@/lib/utils'

import PostItem from '@/components/PostItem'

interface TaggedPostsPageProps {
  params: {
    slug: string
  }
}

async function getTaggedPostsFromParams(slug: string) {
  // const taggedPosts = allPosts.filter(post => post.tags && post.tags.filter(tag => tag === slug).length != 0)
  const taggedPosts = allPosts.filter(post => post.tags && hasTag(post.tags, slug))
  return !taggedPosts ? notFound() : taggedPosts
  // 1. Find and returns an array of posts that contain the tag
}

function hasTag(tags: string[], slug: string) {
  const matches = tags.filter(tag => tag.trim() === slug.trim())
  return matches.length !== 0
}

export default async function TaggedPostsPage({ params }: TaggedPostsPageProps) {
  const taggedPosts = await getTaggedPostsFromParams(params.slug)

  return (
    <div className="flex flex-col gap-8">
      <h2 className="typo-h5">Posts Tagged with {params.slug}</h2>
      <div id="post-items" className="flex flex-col gap-16">
        {sortByMostRecent(taggedPosts).map((post: any) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
