'use client'

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

const toggleGroupItemVariants = cva(
  [
    'bg-background flex items-center justify-center hover:bg-input-hover p-2 ',
    //Focus States
    'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 focus:relative focus:shadow-lg',
    //Disabled States
    'disabled:pointer-events-none disabled:opacity-50',
    //Data states
    'data-[state=on]:bg-input',
    //Animations
    'transition-colors',
  ],
  {
    variants: {
      variant: {
        default: 'bg-background',
      },
      size: {
        sm: ' h-6 w-6',
        md: ' h-8 w-8',
        lg: ' h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

//ToggleGroup

const ToggleGroup = forwardRef<
  ElementRef<typeof ToggleGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Root
      className={cn(
        'flex rounded-md justify-center shadow-md [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md ',
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </ToggleGroupPrimitive.Root>
  )
})
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

// ToggleGroupItem

export interface ToggleGroupProps
  extends VariantProps<typeof toggleGroupItemVariants>,
    ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> {}

const ToggleGroupItem = forwardRef<ElementRef<typeof ToggleGroupPrimitive.Item>, ToggleGroupProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <ToggleGroupPrimitive.Item
        ref={ref}
        className={cn(toggleGroupItemVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </ToggleGroupPrimitive.Item>
    )
  }
)
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
