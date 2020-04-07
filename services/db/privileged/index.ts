import faunadb from 'faunadb'
import { FAUNA_SECRET } from 'services/env'
import { createSendMail } from './send-mail'
import {
  createLogin,
  createRegister,
  createSignout,
  createCheckExistence,
  createRecover,
  createVerification,
} from './auth-user'

const privilegedClient = new faunadb.Client({
  secret: FAUNA_SECRET,
})

export const login = createLogin(privilegedClient)
export const register = createRegister(privilegedClient)
export const sendMail = createSendMail(privilegedClient)
export const signout = createSignout(privilegedClient)
export const checkExistence = createCheckExistence(privilegedClient)
export const recover = createRecover(privilegedClient)
export const verification = createVerification(privilegedClient)
