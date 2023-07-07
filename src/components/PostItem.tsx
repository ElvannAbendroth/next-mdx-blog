import Link from 'next/link'
import { Icons } from '@/components/Icons'
import { formatDate } from '@/lib/utils'

export default function PostItem({ post }: any) {
  return (
    <div id="latest-posts-card">
      {/* <p id="category" className="font-extrabold text-primary/50 uppercase text-sm mb-2">
       Tutorial
      </p> */}

      <Link className="hover:text-primary" href={post.slug}>
        <h2 className="typo-h3">{post.title}</h2>
      </Link>
      <div className="flex gap-6">
        <span className="flex gap-2 typo-small">
          <Icons.calendar size={16} strokeWidth="2.5" /> {formatDate(post.date)}
        </span>
        {post.tags?.length > 0 ? (
          <div className="flex gap-2 typo-small">
            <Icons.tags size={16} strokeWidth="2.5" />{' '}
            <div>
              {post.tags?.map((tag: any, i: number) => (
                <>
                  <Link
                    key={tag}
                    href="#"
                    className="hover:underline underline-offset-4 decoration-2 decoration-muted/30"
                  >
                    {tag}
                  </Link>
                  {post.tags?.length > i + 1 && ', '}
                </>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
