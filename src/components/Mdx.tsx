import * as React from 'react'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Callout from '@/components/Callout'

import { cn } from '@/lib/utils'

interface componentsProps {
  className?: string
}

const components = {
  h1: ({ className, ...props }: componentsProps) => <h1 className={cn('typo-h1', className)} {...props} />,
  h2: ({ className, ...props }: componentsProps) => <h2 className={cn('typo-h2', className)} {...props} />,
  h3: ({ className, ...props }: componentsProps) => <h3 className={cn('typo-h3', className)} {...props} />,
  h4: ({ className, ...props }: componentsProps) => <h4 className={cn('typo-h4', className)} {...props} />,
  h5: ({ className, ...props }: componentsProps) => <h5 className={cn('typo-h5', className)} {...props} />,
  h6: ({ className, ...props }: componentsProps) => <h6 className={cn('typo-h6', className)} {...props} />,
  a: ({ className, ...props }: componentsProps) => <a className={cn('typo-a', className)} {...props} />,
  p: ({ className, ...props }: componentsProps) => <p className={cn('typo-p', className)} {...props} />,
  ul: ({ className, ...props }: componentsProps) => <ul className={cn('typo-ul', className)} {...props} />,
  ol: ({ className, ...props }: componentsProps) => <ol className={cn('typo-ol', className)} {...props} />,
  li: ({ className, ...props }: componentsProps) => <li className={cn('typo-li', className)} {...props} />,
  blockquote: ({ className, ...props }: componentsProps) => (
    <blockquote className={cn('typo-blockquote', className)} {...props} />
  ),
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md border', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="typo-hr" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto ">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn('m-0 border-t  p-0 ', className)} {...props} />
  ),
  th: ({ className, ...props }: any) => (
    <th
      className={cn(
        'border-t border-x border-muted/20 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right bg-muted/5',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: any) => (
    <td
      className={cn(
        'border border-muted/20 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: componentsProps) => <pre className={cn('typo-pre', className)} {...props} />,
  code: ({ className, ...props }: componentsProps) => <code className={cn('typo-code', className)} {...props} />,
  // @ts-ignore
  // eslint-disable-next-line
  Image: ({ className, ...props }: componentsProps) => <Image className={cn(className)} {...props} />,
  Callout,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
