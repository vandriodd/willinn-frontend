'use client'

import { Logo, Home, Users } from './Assets'
import { usePathname } from 'next/navigation'

export default function Navbar() {
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

  const renderedLinks = links.map((link, index) => (
    <li key={index}>
      <a
        className={`flex items-center ${pathname === link.href ? 'font-medium text-accent' : 'text-[#CECDCD]'} transition-transform duration-200 ease-in-out hover:scale-105`}
        href={link.href}
      >
        <link.icon fill={pathname === link.href ? '#F72793' : undefined} />
        <span className='pl-3'>{link.name}</span>
      </a>
    </li>
  ))

  return (
    <nav className='md:w-/6 sticky left-0 h-screen w-1/5 overflow-x-hidden bg-white lg:w-[14%]'>
      <div className='flex h-full flex-col items-center justify-start gap-16 px-3 py-4'>
        <a href='/' className='py-8'>
          <Logo />
        </a>
        <ul className='space-y-6 font-medium'>{renderedLinks}</ul>
      </div>
    </nav>
  )
}
