import { FC } from 'react'

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="flex justify-center max-w-layout mx-auto py-8 text-sm">
      Copyright 2023 Oodri, Simple markdown blog starter with NextJS 13
    </footer>
  )
}
