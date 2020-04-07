import faunadb from 'faunadb'
import { createQueryUser } from './query-user'
import {
  createQueryMail,
  createQueryNextMail,
  createQueryLastInbox,
  createQueryMailAndUserID,
} from './query-mail'
import { createUpdateUser } from './update-user'
import {
  createUpdateMail,
  createUpdateMailOpenedAt,
  createUpdateMailReaction,
} from './update-mail'

export * from './types'

export const createClient = (secret: string) => {
  return new faunadb.Client({ secret })
}
export const queryLastInbox = createQueryLastInbox()
export const queryNextMail = createQueryNextMail()
export const queryUser = createQueryUser()
export const queryMail = createQueryMail()
export const queryMailAndUserID = createQueryMailAndUserID()
export const updateMail = createUpdateMail()
export const updateMailOpenedAt = createUpdateMailOpenedAt()
export const updateMailReaction = createUpdateMailReaction()
export const updateUser = createUpdateUser()
