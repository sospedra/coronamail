import { noop } from 'lodash'
import { useEffect } from 'react'

export const STORE_KEY_LEGAL = '@@coronamail/did-accept-legal'
export const STORE_KEY_ONBOARDING = '@@coronamail/onboarding'
export const STORE_KEY_SINGOUT = '@@coronamail/signout'

export const createStorage = () => {
  return window?.localStorage || { getItem: noop, setItem: noop }
}

export const useStorage = (clbk: (storage: Storage) => void) => {
  useEffect(() => {
    clbk(createStorage())
  }, [])
}
