import Router from 'next/router'
import { fetch } from 'services/api'
import { createStorage, STORE_KEY_SINGOUT } from 'services/storage'

export const login = () => {
  Router.push('/app')
}

export const signout = async () => {
  await fetch('/api/auth/signout')
  createStorage().setItem(STORE_KEY_SINGOUT, `${Date.now()}`)
  Router.push('/auth/login')
}
