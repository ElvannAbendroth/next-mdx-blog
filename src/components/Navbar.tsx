import Link from 'next/link'
import { FC } from 'react'
import { NavItems } from './NavItems'
import { siteConfig, navItems } from '@/lib/config'
import { Icons } from './Icons'

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="bg-background py-6 px-8 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between max-w-layout mx-auto">
        <Link
          className="font-extrabold text-xl font-display hover:text-gray-800 flex gap-3 place-items-center"
          href="/"
        >
          <Icons.logo /> <span>{siteConfig.name}</span>
        </Link>
        <NavItems navItems={navItems} />
      </div>
    </nav>
  )
}
