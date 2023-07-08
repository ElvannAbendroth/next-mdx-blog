import { Icons } from '@/components/Icons'
import { Post, allPosts } from 'contentlayer/generated'
import Link from 'next/link'

function getTagsFromPosts(posts: Post[]) {
  return allPosts.reduce((currentTags: string[], post: Post) => {
    const postTags = post.tags?.map(tag => tag.trim()) || []
    return currentTags.concat(postTags.filter(tag => !currentTags.includes(tag))).sort()
  }, [])
}

export default async function TagsPage({}) {
  const allTags = getTagsFromPosts(allPosts)
  return (
    <div className="">
      <h2 className="typo-h2">All Tags</h2>
      <p className="typo-p">Here, you can browse all the posts by tags. Start with selecting a tag.</p>
      <div className="flex gap-4">
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
    </div>
  )
}
