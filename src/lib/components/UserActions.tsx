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
    <div className='flex justify-end'>
      <div
        role='button'
        onClick={handleOpen}
        className='w-fit rounded-full bg-[#F5F7FA] p-1 text-accent hover:bg-[#d8d9db] focus:outline-none'
      >
        {isOpen ? (
          <div className='flex items-center gap-2'>
            <form
              className='h-6'
              action={actions.userDelete.bind(null, { id: userId })}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                <DeleteIcon />
              </button>
            </form>
            <form action=''>
              <EditIcon />
            </form>
          </div>
        ) : (
          <ThreeDots />
        )}
      </div>
    </div>
  )
}
