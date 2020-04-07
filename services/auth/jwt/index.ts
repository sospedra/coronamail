import jwt from 'jsonwebtoken'
import { isString } from 'lodash'
import { JWT_SECRET } from 'services/env'
import { AuthToken } from './types'

export const generateJWT = (email: string, minutesSpan = 30) => {
  const date = new Date()
  date.setMinutes(date.getMinutes() + minutesSpan)
  const authToken: AuthToken = { email, expiration: date }

  return jwt.sign(authToken, JWT_SECRET)
}

export const decodeJWT = (token: string | string[]) => {
  const d = { isValid: false, errorKey: [], email: '' }

  try {
    if (!isString(token)) {
      return { ...d, errorKey: ['auth', 'error', 'invalid'] }
    }

    const decoded = jwt.verify(token, JWT_SECRET) as AuthToken

    if (
      !decoded.hasOwnProperty('email') &&
      !decoded.hasOwnProperty('expiration')
    ) {
      return { ...d, errorKey: ['auth', 'error', 'format'] }
    }

    if (new Date(decoded.expiration) < new Date()) {
      return { ...d, errorKey: ['auth', 'error', 'expired'] }
    }

    return { ...d, isValid: true, email: decoded.email }
  } catch (ex) {
    return { ...d, errorKey: ['auth', 'error', 'invalid'] }
  }
}
