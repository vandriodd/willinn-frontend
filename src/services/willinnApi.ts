import { API_ENDPOINTS } from '@/constants'

export async function logIn(
  email: string,
  password: string
): Promise<string | null> {
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

export async function getUsers() {
  try {
    const response = await fetch(API_ENDPOINTS.USERS_LIST)

    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }

    const data = await response.json()

    return [null, data]
  } catch (error) {
    return [error]
  }
}
