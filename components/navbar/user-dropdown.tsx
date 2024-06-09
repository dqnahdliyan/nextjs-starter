import { buttonVariants } from '@/components/ui/button'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { Icon } from '@/components/ui/icon'
import Image from 'next/image'
import Link from 'next/link'

export default function UserDropdown() {
    const user = {
        name: 'John Doe',
        email: '5qgj8@example.com',
        image: 'https://github.com/dqnahdliyan.png',
    }
    return (
        <>
            {user ? (
                <DropdownMenu>
                    <DropdownMenu.Trigger asChild>
                        <div className='flex flex-shrink-0 cursor-pointer'>
                            <Image
                                src={user.image ?? ''}
                                alt={user.name}
                                width={64}
                                height={64}
                                className='h-10 w-10 rounded-full'
                            />
                        </div>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content align='end' className='w-56'>
                        <DropdownMenu.Label className='pointer-events-none'>
                            <div>{user.name}</div>
                            <div className='text-sm font-thin text-muted-foreground'>
                                {user.email}
                            </div>
                        </DropdownMenu.Label>
                        <Link href={'/dashboard'}>
                            <DropdownMenu.Item>
                                <Icon icon='Gauge' />
                                Dashboard
                            </DropdownMenu.Item>
                        </Link>
                        <DropdownMenu.Separator />
                    </DropdownMenu.Content>
                </DropdownMenu>
            ) : (
                <Link
                    className={buttonVariants({
                        variant: 'outline',
                    })}
                    href='/login'
                >
                    Login
                </Link>
            )}
        </>
    )
}
