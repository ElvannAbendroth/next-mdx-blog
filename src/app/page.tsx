import { allPosts, allPages } from 'contentlayer/generated'
import PostItem from '@/components/PostItem'
import { sortByMostRecent } from '@/lib/utils'
import { Mdx } from '@/components/Mdx'

export default function Home() {
  const homePage = allPages.find(page => page.slugAsParams === 'home')

  return (
    <div className="">
      {homePage && (
        <div className="mb-12">
          <Mdx code={homePage.body.code} />
        </div>
      )}
      <h2 className="typo-h5 mb-10">Recent Posts</h2>
      <div id="post-items" className="flex flex-col gap-16">
        {sortByMostRecent(allPosts).map((post: any) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
