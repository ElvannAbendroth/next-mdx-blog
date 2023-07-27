import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** function copied from Taxonomy by Shadcn
 * I'd like to find a slightly more versatile solution for this, but it works.
 */
export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function sortByMostRecent(documents: any) {
  return documents.sort((a: any, b: any) => Date.parse(b.date) - Date.parse(a.date))
}
