import Logo from '@/components/navbar/logo'
import NavLink from '@/components/navbar/nav-link'
import SearchCommand from '@/components/navbar/search-command'
import UserDropdown from '@/components/navbar/user-dropdown'
import { Button } from '@/components/ui/button'
import { Drawer } from '@/components/ui/drawer'
import { Icon } from '@/components/ui/icon'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import Link from 'next/link'

export default async function Navbar() {
    return (
        <>
            <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
                <div className='container flex h-16 items-center justify-between gap-2'>
                    <div className='mr-4 hidden md:flex'>
                        <Link className='mr-6 flex items-center' href='/'>
                           <Logo/>
                        </Link>
                        <nav className='flex items-center gap-2 text-sm'>
                            <NavLink href='/'>Home</NavLink>
                            <NavLink href='/articles'>Articles</NavLink>
                            <NavLink href='/projects'>Projects</NavLink>
                            <NavLink href='/design'>UI Design</NavLink>
                        </nav>
                    </div>
                    <Drawer direction='left'>
                        <Drawer.Trigger asChild>
                            <Button
                                variant='outline'
                                size='icon'
                                className='inline-flex flex-shrink-0 md:hidden'
                            >
                                <Icon icon='Menu' />
                            </Button>
                        </Drawer.Trigger>
                        <Drawer.Content>
                            <Drawer.Header>
                                <Drawer.Title>PAGES</Drawer.Title>
                            </Drawer.Header>
                            <div className='flex flex-col gap-3 py-3'>
                                <Drawer.Close asChild>
                                    <NavLink href={'/'}>Home</NavLink>
                                </Drawer.Close>
                            </div>
                        </Drawer.Content>
                    </Drawer>
                    <div className='flex flex-1 items-center justify-end gap-2 md:justify-end'>
                        <SearchCommand />
                        <ThemeToggle />
                        <UserDropdown />
                    </div>
                </div>
            </header>
        </>
    )
}
