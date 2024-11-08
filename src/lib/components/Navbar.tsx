'use client'

import { userLogout } from '../actions'
import { Logo, Home, Users, LogOutIcon } from './Assets'
import { usePathname } from 'next/navigation'

export default function Navbar({ isLogged }: { isLogged: boolean }) {
  const pathname = usePathname()

  if (pathname === '/users/login') return null

  const links = [
    {
      name: 'Inicio',
      href: '/',
      icon: Home
    },
    {
      name: 'Usuarios',
      href: '/users',
      icon: Users
    }
  ]

  const animationStyles =
    'transition-transform duration-200 ease-in-out hover:scale-105'

  const renderedLinks = links.map((link, index) => (
    <li key={index}>
      <a
        className={`flex items-center ${pathname === link.href ? 'font-medium text-accent' : 'text-[#CECDCD]'} ${animationStyles}`}
        href={link.href}
      >
        <link.icon color={pathname === link.href ? '#F72793' : undefined} />
        <span className='pl-3'>{link.name}</span>
      </a>
    </li>
  ))

  return (
    <nav className='sticky left-0 top-0 max-h-screen min-h-screen min-w-48 bg-white'>
      <div className='flex h-full flex-col items-center justify-start gap-16 px-3 py-4'>
        <a href='/' className='py-8'>
          <Logo />
        </a>
        <ul className='flex h-full flex-col gap-6 font-medium'>
          {renderedLinks}
          {isLogged && (
            <form action={userLogout} className='mt-auto'>
              <button
                className={`hover:text-secondary flex items-center text-[#CECDCD] hover:text-[#0c1646] ${animationStyles}`}
              >
                <LogOutIcon className='pr-3' color='#0c1646' />
                Log Out
              </button>
            </form>
          )}
        </ul>
      </div>
    </nav>
  )
}
