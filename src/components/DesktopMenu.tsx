'use client'

import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'
import { usePathname } from 'next/navigation'

import { Icons } from './Icons'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
}

interface DesktopMenuProps extends HTMLAttributes<HTMLDivElement> {
  navItems: NavItem[]
}

export const DesktopMenu: FC<DesktopMenuProps> = ({ navItems, className, ...props }) => {
  const pathname = usePathname()

  return (
    <div className={cn('flex gap-4 align-center items-center', className)} {...props}>
      <ul className="flex gap-4 align-center ">
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
        {/* <li>
              {' '}
              <Toggle size="sm">
                <Icons.moon size={18} strokeWidth={2.3} />
              </Toggle>
            </li> */}

        <li className="flex flex-row items-center gap-2 lowercase font-bold text-sm">
          <Icons.moon size={18} strokeWidth={2.3} />
        </li>
      </ul>
    </div>
  )
}
