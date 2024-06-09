'use client'
import { Button } from '@/components/ui/button'
import { Command } from '@/components/ui/command'
import { Icon } from '@/components/ui/icon'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SearchCommand({ user, className }: any) {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === '/' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener('keydown', down)
        return () => {
            document.removeEventListener('keydown', down)
        }
        // eslint-disable-next-line
    }, [])

    function goto(route: string) {
        setOpen(false)
        router.push(route)
    }
    return (
        <>
            <Button
                variant='outline'
                className={cn('h-10 w-10 p-0 md:w-auto md:px-4', className)}
                onClick={() => setOpen(true)}
            >
                <Icon icon='Search' />
                <span className='ml-2 hidden md:flex'>Search ...</span>
                <kbd className='pointer-events-none ml-4 hidden h-6 select-none items-center rounded bg-primary/10 p-2 font-mono font-medium md:flex'>
                    <span className='text-xs'>⌘ /</span>
                </kbd>
            </Button>
            <Command.Dialog open={open} onOpenChange={setOpen}>
                <Command.Input placeholder='Type a command. or search...' />
                <Command.List>
                    <Command.Empty>No results found.</Command.Empty>
                    <Command.Group heading='Suggestions'>
                        <Command.Item
                            value='home'
                            onSelect={() => goto('/home')}
                        >
                            <Icon icon='Home' className='mr-2 h-4 w-4' />
                            <span>Home</span>
                        </Command.Item>
                    </Command.Group>
                    <Command.Separator />
                    {user ? (
                        <Command.Group heading='Settings'>
                            <Command.Item
                                value='profile'
                                onSelect={() => goto('/profile')}
                            >
                                <Icon
                                    icon='CircleUserRound'
                                    className='mr-2 h-4 w-4'
                                />
                                <span>Profile</span>
                            </Command.Item>
                            <Command.Item
                                value='logout'
                                onSelect={() => console.log('logout')}
                            >
                                <Icon icon='LogOut' className='mr-2 h-4 w-4' />
                                <span>Logout</span>
                            </Command.Item>
                        </Command.Group>
                    ) : (
                        <Command.Group heading='Auth'>
                            <Command.Item
                                value='login'
                                onSelect={() => goto('/login')}
                            >
                                <Icon icon='LogIn' className='mr-2 h-4 w-4' />
                                <span>Login</span>
                            </Command.Item>
                            <Command.Item
                                value='register'
                                onSelect={() => goto('/register')}
                            >
                                <Icon
                                    icon='UserPlus'
                                    className='mr-2 h-4 w-4'
                                />
                                <span>Register</span>
                            </Command.Item>
                        </Command.Group>
                    )}
                </Command.List>
            </Command.Dialog>
        </>
    )
}
