import { allPosts } from 'contentlayer/generated'
import PostItem from '@/components/PostItem'

export default function Home() {
  return (
    <div className="">
      <div id="post-items" className="flex flex-col gap-16">
        {allPosts.map((post: any) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
