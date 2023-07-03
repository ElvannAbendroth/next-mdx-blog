import Link from 'next/link'
import HelloWorld from './hello.mdx'

export default function Home() {
  return (
    <main className="prose">
      <HelloWorld />

      <Link href="/blog">visit blog</Link>
    </main>
  )
}
