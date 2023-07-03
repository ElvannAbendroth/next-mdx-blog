import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'

export default function Home() {
  return (
    <div className="prose">
      <h1>Hello</h1>

      <ul>
        {allPosts.map((post: any) => (
          <li key={post.slug}>
            <a href={post.slug}>{post.title}</a>
          </li>
        ))}
      </ul>
      <Link href="/blog">visit blog</Link>
    </div>
  )
}
