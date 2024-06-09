'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({
    children,
    href,
}: {
    children: React.ReactNode
    href: string
}) {
    const pathname = usePathname()
    const active =
        pathname === href ||
        pathname?.startsWith(`${href}/`) ||
        (pathname.length > 1 &&
            href.split('/')[1].includes(pathname?.split('/')[1]))
    return (
        <Link
            href={href}
            className={cn(
                'inline-flex items-center gap-x-2 rounded-full px-2 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:text-success',
                {
                    'font-semibold text-success': active,
                },
            )}
        >
            {children}
        </Link>
    )
}
