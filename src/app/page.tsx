import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { siteConfig } from '@/lib/config'

export default function Home() {
  return (
    <div className="prose">
      <h1>{siteConfig.name}</h1>
      <p>{siteConfig.description} </p>

      <h2>Latest Posts</h2>

      <div className="">
        {allPosts.map((post: any) => (
          <div key={post.slug}>
            <Link className="no-underline" href={post.slug}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.description}</p>
            <Link
              className="bg-primary p-2 rounded text-primary-foreground text-sm hover:bg-primary/80"
              href={post.slug}
            >
              <button>read more</button>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}
