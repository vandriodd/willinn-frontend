import { User } from '@/types'
import { DeleteIcon, EditIcon, SearchIcon, ThreeDots } from './Assets'

export default async function UsersTable() {
  const users = await fetch('http://localhost:3000/users.json')
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error('Error:', error)
    })

  return (
    <section className='w-full rounded-2xl bg-white px-8 pb-10 pt-4'>
      <table className='w-full'>
        <caption className='border border-x-0 border-t-0 border-b-[#E6EFF5] pb-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-left text-base font-medium text-[#343C6A]'>
              Usuarios
            </h2>
            <div className='relative flex'>
              <input
                type='search'
                placeholder='Buscar'
                className='rounded-full bg-[#F5F7FA] p-2 pl-12 text-base placeholder-[#8BA3CB] focus:outline-none'
              />
              <button className='absolute inset-y-0 left-0 pl-4 focus:outline-none'>
                <SearchIcon />
              </button>
            </div>
          </div>
        </caption>
        <thead className='border border-x-0 border-t-0 border-b-[#E6EFF5] text-[#343C6A]'>
          <tr>
            <th className='py-4 text-left font-medium'>Nombre</th>
            <th className='py-4 text-left font-medium'>Correo</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, 8).map((user: User) => (
            <tr
              key={user.id}
              className='border border-x-0 border-t-0 border-b-[#E6EFF5] py-10 text-[#718EBF]'
            >
              <td className='py-4 pr-10'>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className='rounded-full bg-[#F5F7FA] p-1 text-accent hover:bg-[#d8d9db] focus:outline-none'>
                  <ThreeDots />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
