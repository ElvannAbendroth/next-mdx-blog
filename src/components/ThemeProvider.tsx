'use client'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

export type ThemeValue = 'light' | 'dark'

type ThemeContext = {
  theme: ThemeValue
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContext>({
  theme: 'light',
  toggleTheme: () => {},
})

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeValue>('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    window.localStorage.setItem('theme', newTheme)
  }

  const restoreTheme = () => {
    const userTheme = (window.localStorage.getItem('theme') as ThemeValue) || 'light'
    setTheme(userTheme)
  }

  useEffect(() => {
    restoreTheme()
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}
