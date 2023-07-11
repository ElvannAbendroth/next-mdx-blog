import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/Mdx'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { Icons } from '@/components/Icons'

interface PostPageProps {
  params: {
    slug: string
  }
}

async function getPostFromParams(slug: string) {
  const post = allPosts.find(post => post.slugAsParams === slug)
  return !post ? notFound() : post
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params.slug)

  return (
    <div className="flex flex-col gap-8">
      <article>
        <h1 className="typo-h1">{post.title}</h1>

        <div className="flex gap-4">
          <span className="flex gap-2 typo-small">
            <Icons.calendar size={16} strokeWidth="2.5" /> {formatDate(post.date)}
          </span>

          {post.tags && (
            <div className="flex gap-2 typo-small">
              <Icons.tags size={16} strokeWidth="2.5" />{' '}
              <div>
                {post.tags.map((tag: string, i: number) => (
                  <>
                    <Link
                      key={tag}
                      href={`/tags/${tag}`}
                      className="hover:underline underline-offset-4 decoration-2 decoration-muted/30 [&:not(:last-child)]:after:content-[',\00a0']"
                    >
                      {tag}
                    </Link>
                  </>
                ))}
              </div>
            </div>
          )}
        </div>
        {post.description && <blockquote className="typo-blockquote ">{post.description}</blockquote>}
        <Mdx code={post.body.code} />
      </article>
      <hr />
      <span>
        <Link className="bg-primary p-2 rounded text-primary-foreground text-sm hover:bg-primary/80" href="/">
          <button>return to blog</button>
        </Link>
      </span>
    </div>
  )
}
