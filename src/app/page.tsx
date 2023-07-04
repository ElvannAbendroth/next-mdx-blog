import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { siteConfig } from '@/lib/config'

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-extrabold">{siteConfig.name}</h1>

      <p>{siteConfig.description}</p>

      <h2 className="text-2xl font-extrabold tracking-tight">Latest Posts</h2>

      <div className="flex flex-col gap-8">
        {allPosts.map((post: any) => (
          <div className="flex flex-col gap-4 bg-gray-100/60 p-4 rounded" key={post.slug}>
            <Link className="underline hover:text-primary" href={post.slug}>
              <h3 className="text-lg font-bold">{post.title}</h3>
            </Link>
            <p>{post.description}</p>
            <div className="">
              <Link className=" underline text-primary font-bold hover:text-primary-hover" href={post.slug}>
                read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
