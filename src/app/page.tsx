import { allPosts } from 'contentlayer/generated'
import PostItem from '@/components/PostItem'
import { sortByMostRecent } from '@/lib/utils'

export default function Home() {
  return (
    <div className="">
      <div id="post-items" className="flex flex-col gap-16">
        {sortByMostRecent(allPosts).map((post: any) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
