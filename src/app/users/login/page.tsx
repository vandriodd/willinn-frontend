'use client'

import { useState } from 'react'
import { EyeIcon, EyeOffIcon, Logo } from '@/components/Assets'

export default function LoginPage() {
  const [visible, setVisible] = useState(false)

  return (
    <main className='flex h-screen items-center justify-center'>
      <Logo className='mb-10' />
      <div className='flex w-[550px] flex-col items-center justify-center rounded-xl bg-white p-10'>
        <h1 className='text-2xl font-medium'>Inicia sesión</h1>
        <form className='mt-8 flex w-full flex-col gap-6'>
          <div className='space-y-2'>
            <label className='pl-1 font-medium'>E-mail</label>
            <input
              type='email'
              className='w-full rounded-lg border border-[#E8E9EA] bg-white p-4 placeholder-[#949CA9] focus:border-accent focus:outline-none'
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

          <button
            type='submit'
            className='w-full rounded-lg bg-accent py-4 font-medium text-white hover:bg-[#da2381]'
          >
            Ingresar
          </button>

          <a
            className='flex justify-end text-right text-[#263A66] hover:text-accent'
            href='#'
          >
            ¿Olvidaste tu contraseña?
          </a>
        </form>
      </div>
    </main>
  )
}
