'use client'

import { Icon } from '@/components/ui//icon'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    return (
        <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            variant='ghost'
            size='icon'
            className='flex-shrink-0'
        >
            <Icon icon={theme === 'dark' ? 'Sun' : 'Moon'} />
        </Button>
    )
}
