import { NavItem, SiteConfig } from "@/lib/types"

export const siteConfig: SiteConfig = {
  name: "Minimal Blog",
  description:
    "A minimal markdown blog created with NextJS 13",
  url: "https://next-mdx-blog-six.vercel.app/",
  ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    github: "https://github.com/elvannabendroth",
    twitter: "https://twitter.com/ElvannMusic",
    behance: "https://www.behance.net/elvann",
  },
  author: {
    name: "Oodri",
    href: "http://www.oodri.dev",
    image: "https://avatars.githubusercontent.com/u/28565227?v=4"
  }
}

export const navItems: NavItem[] = [
  { label: 'posts', href: '/' },
  { label: 'About', href: '/about' },
  {label: 'Features', href: '/features'}
]