import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
    'inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 [&_svg]:size-3',
    {
        variants: {
            variant: {
                primary:
                    'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
                secondary:
                    'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
                danger: 'border-transparent bg-danger text-danger-foreground hover:bg-danger/80',
                success:
                    'border-transparent bg-success text-success-foreground hover:bg-success/80',
                warning:
                    'border-transparent bg-warning text-warning-foreground hover:bg-warning/80',
                info: 'border-transparent bg-info text-info-foreground hover:bg-info/80',
                dark: 'border-transparent bg-dark text-dark-foreground hover:bg-dark/80',
                outline: 'text-foreground',
            },
        },
        defaultVariants: {
            variant: 'outline',
        },
    },
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
