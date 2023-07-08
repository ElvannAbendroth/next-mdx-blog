import Link from 'next/link'
import { Post, allPosts } from 'contentlayer/generated'
import { Icons } from './Icons'

function getTagsFromPosts(posts: Post[]) {
  return allPosts.reduce((currentTags: string[], post: Post) => {
    const postTags = post.tags?.map(tag => tag.trim()) || []
    return currentTags.concat(postTags.filter(tag => !currentTags.includes(tag))).sort()
  }, [])
}

export default function TagCloud() {
  const allTags = getTagsFromPosts(allPosts)
  return (
    <div className="flex gap-4 mb-12">
      {allTags.map((tag: string) => (
        <Link
          href={`/tags/${tag}`}
          className="text-xl font-bold text-primary hover:text-primary-hover hover:underline decoration-primary-hover underline-offset-4 decoration-4  flex items-center"
          key={tag}
        >
          <Icons.hash strokeWidth={3} /> {tag}
        </Link>
      ))}
    </div>
  )
}
