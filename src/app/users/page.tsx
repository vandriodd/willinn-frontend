import UsersTable from '@/lib/components/UsersTable'
import AddUserForm from '@/lib/components/AddUserForm'
import { verifySession } from '@/lib/session'
import { redirect } from 'next/navigation'

export default async function UsersPage() {
  const session = await verifySession()

  if (session == null) {
    return redirect('/users/login')
  }

  return (
    <main className='flex-1 px-12 pt-8'>
      <div className='mb-10 flex items-center'>
        <h1 className='self-start text-4xl font-semibold text-[#0C1646]'>
          Usuarios
        </h1>
        <button className='ml-auto'>aca</button>
      </div>
      <div className='flex gap-8'>
        <UsersTable />
        <AddUserForm />
      </div>
    </main>
  )
}
