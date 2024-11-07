import UsersTable from '@/components/UsersTable'
import AddUserForm from '@/components/AddUserForm'

export default function UsersPage() {
  return (
    <main className='flex-1 px-12 pt-8'>
      <h1 className='mb-10 self-start text-4xl font-semibold text-[#0C1646]'>
        Usuarios
      </h1>
      <div className='flex gap-8'>
        <UsersTable />
        <AddUserForm />
      </div>
    </main>
  )
}
