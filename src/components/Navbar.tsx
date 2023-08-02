import Link from 'next/link'
import { FC } from 'react'
import { DesktopMenu } from '@/components/DesktopMenu'
import { siteConfig, navItems } from '@/lib/config'
import { Icons } from '@/components/Icons'
import { MobileMenu } from '@/components/MobileMenu'

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
        <DesktopMenu navItems={navItems} className="hidden sm:block" />
        <MobileMenu navItems={navItems} className="block sm:hidden" />
      </div>
    </nav>
  )
}
