'use server'

import { logIn } from '@/services/willinnApi'
import { redirect } from 'next/navigation'

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

  const token = await logIn(email, password)

  if (token == null) {
    return { message: 'Credenciales inválidas' }
  }

  // logica de manejo de autenticacion

  redirect('/users')
}
