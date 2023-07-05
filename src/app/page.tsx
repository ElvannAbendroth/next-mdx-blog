import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { siteConfig } from '@/lib/config'

export default function Home() {
  return (
    <div className="">
      <h1 className="typo-h1">{siteConfig.name}</h1>

      <p>{siteConfig.description}</p>

      <h2 className="typo-h2">Latest Posts</h2>

      <div id="latest-posts" className="flex flex-col gap-8">
        {allPosts.map((post: any) => (
          <div id="latest-posts-card" className="bg-gray-100/60 p-4 rounded" key={post.slug}>
            <Link className="hover:text-primary" href={post.slug}>
              <h3 className="typo-h3">{post.title}</h3>
            </Link>
            <p className="typo-p">{post.description}</p>
            <div className="">
              <Link className="typo-a" href={post.slug}>
                read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
