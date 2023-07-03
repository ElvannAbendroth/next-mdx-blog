'use client'

import Link from 'next/link'
import { FC } from 'react'
import { usePathname } from 'next/navigation'

interface NavItem {
  label: string
  href: string
}

interface NavItemsProps {
  navItems: NavItem[]
}

export const NavItems: FC<NavItemsProps> = ({ navItems }) => {
  const pathname = usePathname()

  return (
    <ul className="flex gap-4">
      {navItems.map(item => {
        const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
        return (
          <li key={item.label}>
            <Link
              className={`lowercase font-bold text-sm hover:underline underline-offset-4 hover:text-primary ${
                isActive ? 'underline text-primary' : ''
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
