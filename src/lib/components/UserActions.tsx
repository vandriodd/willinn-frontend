'use client'

import { useState } from 'react'
import { EditIcon, DeleteIcon, ThreeDots } from './Assets'
import * as actions from '@/lib/actions'

interface UserActionsProps {
  userId: number
}

export default function UserActions({ userId }: UserActionsProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      role='button'
      onClick={handleOpen}
      className='rounded-full bg-[#F5F7FA] p-1 text-accent hover:bg-[#d8d9db] focus:outline-none'
    >
      {isOpen ? (
        <div className='flex gap-2'>
          <form action=''>
            <EditIcon />
          </form>
          <form action={actions.userDelete.bind(null, { id: userId })}>
            <button
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <DeleteIcon />
            </button>
          </form>
        </div>
      ) : (
        <ThreeDots />
      )}
    </div>
  )
}
