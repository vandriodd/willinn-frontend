import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Willinn - User Management System',
  description:
    'A secure user management system providing efficient login and administration features.',
  keywords:
    'user management, login, admin dashboard, secure authentication, Next.js, React, TypeScript, Tailwind CSS'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  )
}