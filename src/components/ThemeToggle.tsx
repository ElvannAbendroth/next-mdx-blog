'use client'
import React from 'react'

import { Icons } from '@/components/Icons'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/ToggleGroup'

export default function ThemeToggle({}) {
  return (
    <div className="flex">
      <ToggleGroup
        className="flex rounded-md justify-center shadow-md [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md"
        type="single"
        defaultValue="center"
        aria-label="Text alignment"
      >
        <ToggleGroupItem value="light" aria-label="Light Mode">
          <Icons.sun />
        </ToggleGroupItem>
        <ToggleGroupItem value="dark" aria-label="Dark Mode">
          <Icons.moon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
