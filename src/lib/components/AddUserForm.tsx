'use client'

import { useActionState } from 'react'
import * as actions from '../actions'
import Button from './Button'

export default function AddUserForm() {
  const [formState, action] = useActionState(actions.userCreate, {
    message: ''
  })

  return (
    <section className='mb-8 h-fit w-full min-w-80 rounded-2xl bg-white p-8 lg:max-w-md'>
      <form action={action} className='flex flex-col'>
        <h2 className='border border-x-0 border-t-0 border-b-[#F4F6F8] pb-2 text-left text-2xl font-semibold text-[#161C24]'>
          Agregar usuario
        </h2>
        <div className='mt-6 space-y-4 border border-x-0 border-t-0 border-b-[#F4F6F8] pb-8'>
          <div className='space-y-2'>
            <label htmlFor='name' className='font-semibold text-[#161C24]'>
              Nombre
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full rounded-lg border border-[#DFE3E8] bg-transparent px-4 py-3 placeholder-[#919EAB] focus:outline-none'
              placeholder='Introduce el nombre'
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='surname' className='font-semibold text-[#161C24]'>
              Apellido
            </label>
            <input
              type='text'
              id='surname'
              name='surname'
              className='w-full rounded-lg border border-[#DFE3E8] bg-transparent p-2 px-4 py-3 placeholder-[#919EAB] focus:outline-none'
              placeholder='Introduce el apellido'
            />
          </div>
        </div>
        <div className='mt-6 space-y-4'>
          <div className='space-y-2'>
            <label htmlFor='email' className='font-semibold text-[#161C24]'>
              E-mail
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full rounded-lg border border-[#DFE3E8] bg-transparent p-2 px-4 py-3 placeholder-[#919EAB] focus:outline-none'
              placeholder='Introduce tu E-mail'
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='password' className='font-semibold text-[#161C24]'>
              Contraseña
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full rounded-lg border border-[#DFE3E8] bg-transparent p-2 px-4 py-3 placeholder-[#919EAB] focus:outline-none'
              placeholder='Introduce tu contraseña'
            />
          </div>
          <div className='py-3'>
            <label className='inline-flex cursor-pointer items-center'>
              <span className='pr-3 font-semibold'>Activar</span>
              <input
                type='checkbox'
                value=''
                className='peer sr-only'
                defaultChecked
              />
              <div className="peer relative h-6 w-11 rounded-full bg-[#DFE3E8] after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#0DC5A3] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full" />
            </label>
          </div>
        </div>
        <Button variant='secondary'>Guardar</Button>
      </form>
      {formState.message !== '' && (
        <div className='mt-4 rounded-lg bg-red-100 p-4 text-red-600'>
          {formState.message}
        </div>
      )}
    </section>
  )
}
