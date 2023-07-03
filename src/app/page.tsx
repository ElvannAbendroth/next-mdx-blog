import Link from 'next/link'

export default function Home() {
  return (
    <main className="prose">
      <h1>Hello</h1>
      <Link href="/blog">visit blog</Link>
    </main>
  )
}
