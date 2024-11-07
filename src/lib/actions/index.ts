'use server'

import { createUser, logIn } from '@/lib/services/willinnApi'
import { redirect } from 'next/navigation'
import { createSession, deleteSession } from '../session'

export async function userLogin(
  formState: { message: string },
  formData: FormData
) {
  const email = formData.get('email')
  const password = formData.get('password')

  if (email == null || typeof email !== 'string' || email.length < 5) {
    return { message: 'Email inválido' }
  }

  if (password == null || typeof password !== 'string' || password.length < 6) {
    return { message: 'La contraseña debe tener al menos 6 caracteres' }
  }

  const token = await logIn({ email, password })

  if (token == null) {
    return { message: 'Credenciales inválidas' }
  }

  await createSession(token)

  redirect('/users')
}

export async function userLogout() {
  await deleteSession()
  redirect('/users/login')
}

export async function userCreate(
  formState: { message: string },
  formData: FormData
) {
  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password')

  if (name == null || typeof name !== 'string' || name.length < 2) {
    return { message: 'Nombre inválido' }
  }

  if (email == null || typeof email !== 'string' || email.length < 5) {
    return { message: 'Email inválido' }
  }

  if (password == null || typeof password !== 'string' || password.length < 6) {
    return { message: 'La contraseña debe tener al menos 6 caracteres' }
  }

  const [error] = await createUser({ name, email, password })

  if (error != null) {
    if (error instanceof Error) {
      return { message: error.message }
    }
    return { message: 'Error desconocido' }
  }

  redirect('/users')
}
