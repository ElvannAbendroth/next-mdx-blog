'use client'
import React from 'react'

import { Icons } from '@/components/Icons'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/ToggleGroup'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle({}) {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className="flex">
      <ToggleGroup value={theme} onValueChange={toggleTheme} type="single" aria-label="Theme toggle">
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
