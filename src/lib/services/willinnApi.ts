import { API_ENDPOINTS } from '@/lib/constants'
import { verifySession } from '../session'
import { type User } from '@/types'

export async function logIn({
  email,
  password
}: Pick<User, 'email' | 'password'>): Promise<string | null> {
  let token: string

  try {
    const res = await fetch(API_ENDPOINTS.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    if (!res.ok) {
      throw new Error('Login failed')
    }

    const data = (await res.json()) as { token: string }

    token = data.token
  } catch {
    return null
  }

  return token
}

export async function getUsers(): Promise<[Error, null] | [null, User[]]> {
  const session = await verifySession()

  if (session == null) {
    return [new Error('Unauthorized'), null]
  }

  try {
    const response = await fetch(API_ENDPOINTS.USERS_LIST, {
      headers: {
        Authorization: 'Bearer ' + session.token
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }

    const data = (await response.json()) as User[]

    return [null, data]
  } catch (error) {
    if (error instanceof Error) {
      return [error, null]
    }
    return [Error('Error desconocido'), null]
  }
}

export async function createUser({
  name,
  email,
  password
}: Pick<User, 'name' | 'email' | 'password'>) {
  const session = await verifySession()

  if (session == null) {
    return [new Error('Unauthorized')]
  }

  try {
    const res = await fetch(API_ENDPOINTS.USERS_CREATE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + session.token
      },
      body: JSON.stringify({ name, email, password })
    })

    if (res.status === 409) {
      throw new Error('El email ya está en uso')
    }

    if (!res.ok) {
      throw new Error('Error while creating user')
    }

    const data = (await res.json()) as User

    return [null, data]
  } catch (error) {
    return [error]
  }
}
