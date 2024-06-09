import * as React from 'react'

import { cn } from '@/lib/utils'

interface TableSubComponents {
    Header: typeof TableHeader
    Row: typeof TableRow
    Head: typeof TableHead
    Body: typeof TableBody
    Cell: typeof TableCell
    Footer: typeof TableFooter
    Caption: typeof TableCaption
}

type TableComponent = React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLDivElement>
> &
    React.RefAttributes<HTMLDivElement> &
    TableSubComponents

const Table: TableComponent = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
    <div className='relative table w-full overflow-auto'>
        <table
            ref={ref}
            className={cn('w-full caption-bottom text-sm', className)}
            {...props}
        />
    </div>
)) as TableComponent
Table.displayName = 'Table'

const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead
        ref={ref}
        className={cn(
            'border-t [&>tr]:hover:bg-transparent [&_tr]:border-b',
            className,
        )}
        {...props}
    />
))
TableHeader.displayName = 'TableHeader'

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody
        ref={ref}
        className={cn('[&_tr:last-child]:border-0', className)}
        {...props}
    />
))
TableBody.displayName = 'TableBody'

const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tfoot
        ref={ref}
        className={cn(
            'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
            className,
        )}
        {...props}
    />
))
TableFooter.displayName = 'TableFooter'

const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn(
            'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
            className,
        )}
        {...props}
    />
))
TableRow.displayName = 'TableRow'

const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(
            'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
            className,
        )}
        {...props}
    />
))
TableHead.displayName = 'TableHead'

const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={cn(
            'whitespace-nowrap px-4 py-1 align-middle [&:has([role=checkbox])]:pr-0',
            className,
        )}
        {...props}
    />
))
TableCell.displayName = 'TableCell'

const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
    <caption
        ref={ref}
        className={cn('mt-4 text-sm text-muted-foreground', className)}
        {...props}
    />
))
TableCaption.displayName = 'TableCaption'

Table.Header = TableHeader
Table.Body = TableBody
Table.Footer = TableFooter
Table.Head = TableHead
Table.Row = TableRow
Table.Cell = TableCell
Table.Caption = TableCaption

export { Table }
