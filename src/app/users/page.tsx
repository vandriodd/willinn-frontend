import UsersTable from '@/lib/components/UsersTable'
import AddUserForm from '@/lib/components/AddUserForm'
import { verifySession } from '@/lib/session'
import { redirect } from 'next/navigation'
import { getUsers } from '@/lib/services/willinnApi'

export default async function UsersPage() {
  const session = await verifySession()

  if (session == null) {
    return redirect('/users/login')
  }

  const [error, users] = await getUsers()

  if (error != null || users == null) {
    return <div>Error loading users</div>
  }

  return (
    <main className='flex-1 p-8'>
      <div className='mb-10 flex items-center'>
        <h1 className='self-start text-4xl font-semibold text-[#0C1646]'>
          Usuarios
        </h1>
      </div>
      <div className='flex flex-col gap-8 xl:flex-row'>
        <UsersTable users={users} />
        <AddUserForm />
      </div>
    </main>
  )
}
