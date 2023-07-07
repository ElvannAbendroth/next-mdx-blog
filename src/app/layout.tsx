import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { siteConfig } from '@/lib/config'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author, url: siteConfig.links.website }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${open_sans.className}`}>
        <Navbar />
        <main className="max-w-content mx-auto pt-36 pb-12 px-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
