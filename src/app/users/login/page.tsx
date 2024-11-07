'use client'

import { useState, useActionState } from 'react'
import { EyeIcon, EyeOffIcon, Logo } from '@/components/Assets'
import * as actions from '@/actions'
import Button from '@/components/Button'

export default function LoginPage() {
  const [visible, setVisible] = useState(false)
  const [formState, action] = useActionState(actions.userLogin, { message: '' })

  return (
    <main className='flex h-screen flex-1 flex-col items-center justify-center'>
      <Logo className='mb-10' />
      <div className='flex w-[550px] flex-col items-center justify-center rounded-xl bg-white p-10'>
        <h1 className='text-2xl font-medium'>Inicia sesión</h1>
        <form className='mt-8 flex w-full flex-col gap-6' action={action}>
          <div className='space-y-2'>
            <label className='pl-1 font-medium'>E-mail</label>
            <input
              type='email'
              className='w-full rounded-lg border border-[#E8E9EA] bg-white p-4 placeholder-[#949CA9] focus:border-accent focus:outline-none'
              name='email'
              id='email'
              placeholder='Introduce tu mail'
              required
            />
          </div>

          <div className='space-y-2'>
            <label className='pl-1 font-medium'>Contraseña</label>
            <div className='relative flex'>
              <input
                type={visible ? 'text' : 'password'}
                className='w-full rounded-lg border border-[#E8E9EA] bg-white p-4 placeholder-[#949CA9] focus:border-accent focus:outline-none'
                placeholder='Introduce tu contraseña'
                minLength={6}
                name='password'
                id='password'
                required
              />
              <button
                className='absolute inset-y-0 right-0 pr-4 focus:outline-none'
                type='button'
                onClick={() => {
                  setVisible(!visible)
                }}
              >
                {visible ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>
          <Button>Ingresar</Button>
          <a
            className='relative flex self-end text-right text-[#263A66] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-accent hover:after:w-full'
            href='#'
          >
            ¿Olvidaste tu contraseña?
          </a>
        </form>
        {formState.message !== '' && (
          <div className='text-red-500'>{formState.message}</div>
        )}
      </div>
    </main>
  )
}
