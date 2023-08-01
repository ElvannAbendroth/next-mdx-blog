'use client'

import Link from 'next/link'
import { FC } from 'react'
import { usePathname } from 'next/navigation'

import { Icons } from './Icons'
import { Toggle } from '@/components/ui/Toggle'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover'
import { Switch } from './ui/Switch'

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
    <div className="flex gap-4 align-center items-center">
      <Popover>
        <PopoverTrigger className="p-2 rounded-md hover:bg-input-hover data-[state=open]:bg-input-hover">
          <Icons.menu size={21} strokeWidth={2.3} />
        </PopoverTrigger>
        <PopoverContent className="mr-8">
          <ul className="flex flex-col gap-4 align-center ">
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
            <hr />
            <li className="flex flex-row items-center gap-2 lowercase font-bold text-sm">
              <Icons.moon size={18} strokeWidth={2.3} />
              <span>Dark</span>
              <Switch />
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  )
}
