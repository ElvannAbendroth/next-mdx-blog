import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { sortByMostRecent } from '@/lib/utils'

import PostItem from '@/components/PostItem'
import { Icons } from '@/components/Icons'
import Link from 'next/link'

interface TaggedPostsPageProps {
  params: {
    slug: string
  }
}

async function getTaggedPostsFromParams(slug: string) {
  const taggedPosts = allPosts.filter(post => post.tags && hasTag(post.tags, slug))
  return !taggedPosts ? notFound() : taggedPosts
}

function hasTag(tags: string[], slug: string) {
  const matches = tags.filter(tag => tag.trim() === slug.trim())
  return matches.length !== 0
}

export default async function TaggedPostsPage({ params }: TaggedPostsPageProps) {
  const taggedPosts = await getTaggedPostsFromParams(params.slug)

  return (
    <div className="">
      <Link
        href="/tags"
        className="typo-p mb-6 text-sm hover:underline decoration-muted-hover underline-offset-4 decoration-3 flex items-center font-bold text-muted/50"
      >
        <Icons.chevronLeft size={16} strokeWidth={3} /> return
      </Link>
      <h2 className="typo-h5 mb-8">
        Posts Tagged with <code className="typo-code text-primary font-extrabold">{params.slug}</code>
      </h2>

      <div id="post-items" className="flex flex-col gap-16">
        {sortByMostRecent(taggedPosts).map((post: any) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
