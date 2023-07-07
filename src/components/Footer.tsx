import { FC } from 'react'
import { Icons } from './Icons'
import Link from 'next/link'

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="flex justify-between max-w-layout mx-auto py-6 px-8 ">
      <div className="text-sm text-center text-muted/80 font-semibold">Copyright 2023 Oodri</div>
      <div className="flex gap-4 ">
        <Link href="/">
          <Icons.gitHub className="text-muted/80 hover:text-muted" size={20} />
        </Link>
        <Link href="/">
          <Icons.twitter className="text-muted/80 hover:text-muted" size={20} />
        </Link>
        <Link href="/">
          <Icons.behance className="text-muted/80 hover:text-muted" size={20} />
        </Link>
      </div>
      <div className="text-sm text-center text-muted/80 font-semibold">Built with NextJS</div>
    </footer>
  )
}
