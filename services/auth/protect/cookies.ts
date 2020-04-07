import cookie from 'cookie'
import Cookies from 'js-cookie'
import { IncomingMessage } from 'http'
import { IS_PROD } from 'services/env'

export const COOKIE_AUTH = 'coronamail_auth'

const cookieOptions = {
  httpOnly: false,
  path: '/',
  sameSite: 'lax' as 'lax',
  secure: IS_PROD,
}

export const serializeCookie = (
  token: string,
  maxAge = 72576000,
  name = COOKIE_AUTH,
) => {
  return cookie.serialize(name, token, {
    ...cookieOptions,
    maxAge,
  })
}

export const parseCookie = (cookiesRaw = '') => {
  return cookie.parse(cookiesRaw)[COOKIE_AUTH]
}

export const findToken = (req?: IncomingMessage) => {
  if (req) {
    return parseCookie(req.headers.cookie)
  } else {
    return parseCookie(document.cookie)
  }
}

export const removeAuthCookie = () => {
  Cookies.remove(COOKIE_AUTH, cookieOptions)
}

export const setAuthCookie = (token: string) => {
  Cookies.set(COOKIE_AUTH, token, cookieOptions)
}
