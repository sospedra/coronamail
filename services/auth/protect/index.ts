import { NextPageContext } from 'next'
import { findToken } from './cookies'
import Router from 'next/router'

export { login, signout } from './access'
export * from './cookies'

export const protect = ({ req, res }: NextPageContext) => {
  const token = findToken(req)

  if (!token) {
    if (req && res) {
      res.writeHead(302, { Location: '/auth/login' })
      res.end()
    } else {
      Router.push('/auth/login')
    }
    return null
  }

  return token
}

export const unprotect = ({ req, res }: NextPageContext) => {
  const token = findToken(req)

  if (token) {
    if (req && res) {
      res.writeHead(302, { Location: '/app' })
      res.end()
    } else {
      Router.push('/app')
    }
    return null
  }

  return token
}
