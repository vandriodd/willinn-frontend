import AddUserForm from '@/components/AddUserForm'
import UsersTable from '@/components/UsersTable'

export default function UsersPage() {
  return (
    <main className='px-12'>
      <h1 className='mb-8 self-start text-4xl font-semibold text-[#0C1646]'>
        Usuarios
      </h1>
      <div className='flex w-full justify-between gap-8'>
        <UsersTable />
        <AddUserForm />
      </div>
    </main>
  )
}
