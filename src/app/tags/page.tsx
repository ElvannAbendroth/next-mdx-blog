import PostItem from '@/components/PostItem'
import TagCloud from '@/components/TagCloud'
import { sortByMostRecent } from '@/lib/utils'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

export default async function TagsPage({}) {
  return (
    <div className="">
      <Link href="/tags">
        <h2 className="typo-h2">Tags</h2>
      </Link>
      <p className="typo-p">Here, you can browse all the posts by tags. Start with selecting a tag.</p>
      <TagCloud />
      <hr className="typo-hr" />
      <h2 className="typo-h5 mb-10">All Tags</h2>
      <div id="post-items" className="flex flex-col gap-16">
        {sortByMostRecent(allPosts).map((post: any) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
