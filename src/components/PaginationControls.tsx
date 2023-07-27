'use client'
import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { Icons } from './Icons'

interface PaginationControlsProps {
  currentPage: string | string[]
  perPage: string | string[]
  totalEntries: number
}

export const PaginationControls: FC<PaginationControlsProps> = ({ currentPage, perPage, totalEntries }) => {
  const router = useRouter()

  const start = (Number(currentPage) - 1) * Number(perPage)
  const end = start + Number(perPage)

  const hasNextPage = end < totalEntries
  const hasPreviousPage = start > 0
  const totalPages = Math.ceil(totalEntries / Number(perPage))

  if (totalPages < 2) return null

  return (
    <div className="flex gap-2 justify-center">
      <button
        className="disabled:text-muted/50 text-muted"
        disabled={!hasPreviousPage}
        onClick={() => {
          router.push(`/?page=${Number(currentPage) - 1}&per_page=${perPage}`)
        }}
      >
        <Icons.chevronLeft />
      </button>
      <span className="text-muted">
        {currentPage} / {totalPages}
      </span>
      <button
        className="disabled:text-muted/50 text-muted"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(currentPage) + 1}&per_page=${perPage}`)
        }}
      >
        <Icons.chevronRight />
      </button>
    </div>
  )
}
