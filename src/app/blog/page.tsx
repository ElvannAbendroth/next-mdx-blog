import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <main className="prose">
      <h1>Blog</h1>
      <p>Welcome to the blog section of the site</p>

      <h2>List of blogs</h2>

      <ul>
        {allPosts.map((post: any) => (
          <li key={post.slug}>
            <a href={post.slug}>{post.title}</a>
          </li>
        ))}
      </ul>

      <Link href="/">return home</Link>
    </main>
  )
}
