import * as React from 'react'

import { ButtonProps, buttonVariants } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { cn } from '@/lib/utils'
import { Link } from '@inertiajs/react'

interface PaginationSubComponents {
    Content: typeof PaginationContent
    Ellipsis: typeof PaginationEllipsis
    Item: typeof PaginationItem
    Link: typeof PaginationLink
    Next: typeof PaginationNext
    Previous: typeof PaginationPrevious
}

type PaginationComponent = React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLDivElement>
> &
    React.RefAttributes<HTMLDivElement> &
    PaginationSubComponents

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
    <nav
        role='navigation'
        aria-label='pagination'
        className={cn('mx-auto flex w-full justify-center', className)}
        {...props}
    />
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef<
    HTMLUListElement,
    React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
    <ul
        ref={ref}
        className={cn('flex flex-row items-center gap-1', className)}
        {...props}
    />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<
    HTMLLIElement,
    React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
    <li ref={ref} className={cn('', className)} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
    isActive?: boolean
} & Pick<ButtonProps, 'size'> &
    Omit<React.ComponentProps<typeof Link>, 'size'>

const PaginationLink = ({
    className,
    isActive,
    size = 'icon',
    ...props
}: PaginationLinkProps) => (
    <Link
        preserveScroll
        aria-current={isActive ? 'page' : undefined}
        className={cn(
            buttonVariants({
                variant: isActive ? 'primary' : 'outline',
                size,
            }),
            className,
        )}
        {...props}
    />
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        size='md'
        aria-label='Go to previous page'
        className={cn('gap-1 pl-2.5', className)}
        {...props}
    >
        <Icon icon='ChevronLeft' className='size-4' />
        <span>Previous</span>
    </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({
    className,
    ...props
}: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink
        size='md'
        aria-label='Go to next page'
        className={cn('gap-1 pr-2.5', className)}
        {...props}
    >
        <span>Next</span>
        <Icon icon='ChevronRight' className='size-4' />
    </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({
    className,
    ...props
}: React.ComponentProps<'span'>) => (
    <span
        aria-hidden
        className={cn('flex h-9 w-9 items-center justify-center', className)}
        {...props}
    >
        <Icon icon='MoreHorizontal' className='size-4' />
        <span className='sr-only'>More pages</span>
    </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

Pagination.Content = PaginationContent
Pagination.Ellipsis = PaginationEllipsis
Pagination.Item = PaginationItem
Pagination.Link = PaginationLink
Pagination.Next = PaginationNext
Pagination.Previous = PaginationPrevious

export { Pagination }
