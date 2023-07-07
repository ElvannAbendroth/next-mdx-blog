export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
      twitter?: string
      github?: string
      website?: string
    }
    author: string
  }

  export type NavItem = {
    label: string
    href: string
    disabled?: boolean
  }
