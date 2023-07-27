import { allPosts, allPages } from 'contentlayer/generated'
import PostItem from '@/components/PostItem'
import { sortByMostRecent } from '@/lib/utils'
import { Mdx } from '@/components/Mdx'
import { PaginationControls } from '@/components/PaginationControls'

interface HomeProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export default function Home({ searchParams }: HomeProps) {
  //Homepage Hero Content
  const homePage = allPages.find(page => page.slugAsParams === 'home')

  // Pagination
  const currentPage = searchParams['page'] ?? '1'
  const perPage = searchParams['per_page'] ?? '5'
  const start = (Number(currentPage) - 1) * Number(perPage)
  const end = start + Number(perPage)

  // Posts Shown
  const entries = sortByMostRecent(allPosts).slice(start, end)

  return (
    <div>
      {homePage && (
        <div className="mb-12">
          <Mdx code={homePage.body.code} />
        </div>
      )}
      <h2 className="typo-h5 mb-10">Recent Posts</h2>
      <div id="post-items" className="flex flex-col gap-16">
        {entries.map((post: any) => (
          <PostItem key={post.slug} post={post} />
        ))}
        <PaginationControls currentPage={currentPage} perPage={perPage} totalEntries={allPosts.length} />
      </div>
    </div>
  )
}
