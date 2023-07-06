import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { Icons } from '@/components/Icons'

export default function Home() {
  return (
    <div className="">
      <div id="latest-posts" className="flex flex-col gap-16">
        {allPosts.map((post: any) => (
          <div id="latest-posts-card" key={post.slug}>
            {/* <p id="category" className="font-extrabold text-primary/50 uppercase text-sm mb-2">
              Tutorial
            </p> */}

            <Link className="hover:text-primary" href={post.slug}>
              <h2 className="typo-h3">{post.title}</h2>
            </Link>
            <div className="flex gap-6">
              <span className="flex gap-2 typo-small">
                <Icons.calendar size={16} strokeWidth="2.5" /> Aug 2013
              </span>
              <div className="flex gap-2 typo-small">
                <Icons.tags size={16} strokeWidth="2.5" />{' '}
                <div>
                  <Link href="#" className="hover:underline underline-offset-4 decoration-2 decoration-muted/30">
                    design
                  </Link>
                  {', '}
                  <Link href="#" className="hover:underline underline-offset-4 decoration-2 decoration-muted/30">
                    UI/UX
                  </Link>
                  {', '}
                  <Link href="#" className="hover:underline underline-offset-4 decoration-2 decoration-muted/30">
                    coding
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
