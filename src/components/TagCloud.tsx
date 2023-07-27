'use client'
import Link from 'next/link'
import { Post, allPosts } from 'contentlayer/generated'
import { Icons } from './Icons'
import { usePathname } from 'next/navigation'

function getTagsFromPosts(posts: Post[]) {
  return allPosts.reduce((currentTags: string[], post: Post) => {
    const postTags = post.tags?.map(tag => tag.trim()) || []
    return currentTags.concat(postTags.filter(tag => !currentTags.includes(tag))).sort()
  }, [])
}

export default function TagCloud() {
  const allTags = getTagsFromPosts(allPosts)
  const pathname = usePathname()
  return (
    <div className="flex gap-4 mb-12 flex-wrap">
      <Link
        href={`/tags`}
        className={`text-base font-semibold text-muted hover:text-muted-hover hover:underline decoration-muted-hover underline-offset-4 decoration-3  flex items-center gap-1  ${
          pathname === `/tags` ? 'underline text-muted-hover' : null
        }`}
      >
        <Icons.tags strokeWidth={2} size={21} /> all
      </Link>
      {allTags.map((tag: string) => (
        <Link
          href={`/tags/${tag}`}
          className={`text-base font-semibold text-primary hover:text-primary-hover hover:underline decoration-primary-hover underline-offset-4 decoration-3  flex items-center ${
            pathname === `/tags/${tag}` ? 'underline text-primary-hover' : null
          }`}
          key={tag}
        >
          <Icons.hash strokeWidth={2} size={21} /> {tag}
        </Link>
      ))}
    </div>
  )
}
