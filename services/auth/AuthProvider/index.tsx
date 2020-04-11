import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { createStorage, STORE_KEY_SINGOUT } from 'services/storage'

const authContext = React.createContext<{
  token: string | null
}>({ token: null })

export const useAuth = () => {
  return useContext(authContext)
}

export const AuthProvider: React.FC<{
  token?: string
}> = (props) => {
  const router = useRouter()
  const syncLogout = (event: StorageEvent) => {
    if (event.key === 'signout' || event.key === STORE_KEY_SINGOUT) {
      router.push('/')
    }
  }

  useEffect(() => {
    window.addEventListener('storage', syncLogout)
    return () => {
      window.removeEventListener('storage', syncLogout)
      createStorage().removeItem(STORE_KEY_SINGOUT)
    }
  }, [])

  return (
    <authContext.Provider value={{ token: props.token || null }}>
      {props.children}
    </authContext.Provider>
  )
}
