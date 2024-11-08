'use client'

import type { User } from '@/types'
import { SearchIcon } from './Assets'
import UserActions from './UserActions'
import { useState } from 'react'

interface UsersTableProps {
  users: User[]
}

export default function UsersTable({ users }: UsersTableProps) {
  const [search, setSearch] = useState('')
  const [filterActive, setFilterActive] = useState(false)

  const filteredUsers = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )
    .filter((user) => (filterActive ? user.isActive : true))

  const renderedUsers = filteredUsers.map((user: User) => (
    <tr
      key={user.id}
      className='border border-x-0 border-t-0 border-b-[#E6EFF5] py-10 text-[#718EBF]'
    >
      <td className='py-4'>{user.name}</td>
      <td>{user.email}</td>
      <td className='min-w-20'>
        <UserActions userId={user.id} />
      </td>
    </tr>
  ))

  const tableHeadCols = ['Nombre', 'Correo']

  const renderedHeadCols = tableHeadCols.map((col) => (
    <th key={col} className='py-4 text-left font-medium'>
      {col}
    </th>
  ))

  return (
    <section className='w-full rounded-2xl bg-white px-8 pb-10 pt-4'>
      <table className='w-full'>
        <caption className='border border-x-0 border-t-0 border-b-[#E6EFF5] pb-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-left text-base font-medium text-[#343C6A]'>
              Usuarios
            </h2>
            <label className='inline-flex cursor-pointer items-center'>
              <span className='pr-2 text-sm font-medium text-[#343C6A]'>
                Ver inactivos
              </span>
              <input
                type='checkbox'
                onChange={() => {
                  setFilterActive(!filterActive)
                }}
                checked={filterActive}
                className='peer sr-only'
              />
              <div className="peer relative h-4 w-8 flex-shrink-0 rounded-full bg-[#DFE3E8] after:absolute after:left-[2px] after:top-0.5 after:h-3 after:w-3 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#0DC5A3] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-2 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full" />
            </label>
            <div className='relative flex'>
              <input
                type='search'
                placeholder='Buscar'
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                }}
                className='rounded-full bg-[#F5F7FA] p-2 pl-12 text-base placeholder-[#8BA3CB] focus:outline-none'
              />
              <button className='absolute inset-y-0 left-0 pl-4 focus:outline-none'>
                <SearchIcon />
              </button>
            </div>
          </div>
        </caption>
        <thead className='border border-x-0 border-t-0 border-b-[#E6EFF5] text-[#343C6A]'>
          <tr>{renderedHeadCols}</tr>
        </thead>
        <tbody>{renderedUsers}</tbody>
      </table>
    </section>
  )
}
