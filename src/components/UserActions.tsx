'use client'

import { useState } from 'react'
import { EditIcon, DeleteIcon, ThreeDots } from './Assets'

interface UserActionsProps {
  userId: number
}

export default function UserActions(number: UserActionsProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <button
      onClick={handleOpen}
      className='rounded-full bg-[#F5F7FA] p-1 text-accent hover:bg-[#d8d9db] focus:outline-none'
    >
      {isOpen ? (
        <div className='flex gap-2'>
          <EditIcon />
          <DeleteIcon />
        </div>
      ) : (
        <ThreeDots />
      )}
    </button>
  )
}
