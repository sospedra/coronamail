import Router from 'next/router'

export const login = () => {
  Router.push('/app')
}

export const signout = async () => {
  await fetch('/api/auth/signout')
  window.localStorage.setItem('signout', `${Date.now()}`)
  Router.push('/auth/login')
}
