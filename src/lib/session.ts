import 'server-only'
import { type JWTPayload, SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { SESSION_COOKIE_NAME } from './constants'

export const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

interface Payload extends JWTPayload {
  token: string
}

export async function encrypt(payload: Payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}

export async function decrypt(session: string | undefined = '') {
  if (session == null || session === '') {
    return null
  }

  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256']
    })
    return payload
  } catch (error) {
    return null
  }
}

export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt({ token, expiresAt })

  ;(await cookies()).set(SESSION_COOKIE_NAME, session, {
    httpOnly: true,
    secure: false,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/'
  })
}

export async function verifySession(): Promise<Payload | null> {
  const session = (await cookies()).get(SESSION_COOKIE_NAME)?.value
  const payload = (await decrypt(session)) as Payload

  if (session == null || payload == null) {
    return null
  }

  if (payload.exp != null && new Date(payload.exp * 1000) < new Date()) {
    return null
  }

  return payload
}

export async function updateSession() {
  const session = (await cookies()).get(SESSION_COOKIE_NAME)?.value
  const payload = await decrypt(session)

  if (session == null || payload == null) {
    return null
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  const cookieStore = await cookies()

  cookieStore.set(SESSION_COOKIE_NAME, session, {
    httpOnly: true,
    secure: true,
    expires,
    sameSite: 'lax',
    path: '/'
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE_NAME)
}
