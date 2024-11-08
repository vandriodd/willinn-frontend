import { Logo } from '@/lib/components/Assets'
import { verifySession } from '@/lib/session'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await verifySession()

  if (session === null || session === undefined) {
    return redirect('/users/login')
  }

  return (
    <main className='flex flex-1 items-center justify-center'>
      <Logo />
    </main>
  )
}
