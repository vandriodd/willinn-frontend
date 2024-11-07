export const API_URL = 'https://uat.zonamerica.com:5009'

export const API_ENDPOINTS = {
  USERS_LIST: API_URL + '/users',
  USERS_CREATE: API_URL + '/users',
  USERS_DELETE: API_URL + '/users/',
  LOGIN: API_URL + '/users/login'
} as const

export const SESSION_COOKIE_NAME = 'willinn-session'
