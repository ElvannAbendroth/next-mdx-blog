import { NavItem, SiteConfig } from "@/lib/types"

export const siteConfig: SiteConfig = {
  name: "Minimal Blog",
  description:
    "A minimal markdown blog created with NextJS 13",
  url: "https://next-mdx-blog-six.vercel.app/",
  ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    github: "https://github.com/elvannabendroth",
    website: "http://www.oodri.dev"
  },
  author: "Oodri"
}

export const navItems: NavItem[] = [
  { label: 'Blog', href: '/' },
  { label: 'About', href: '/about' },
]