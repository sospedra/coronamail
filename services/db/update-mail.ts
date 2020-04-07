import { Client, query as q } from 'faunadb'
import { Mail } from './types'

export const createUpdateMail = () => {
  return async (client: Client, mailID: string, data: Partial<Mail>) => {
    return await client.query<Mail>(
      q.Update(q.Ref(q.Collection('Mail'), mailID), { data }),
    )
  }
}

export const createUpdateMailOpenedAt = () => {
  return async (client: Client, mailID: string) => {
    const updateMail = createUpdateMail()
    return await updateMail(client, mailID, {
      openedAt: new Date().toISOString(),
    })
  }
}

export const createUpdateMailReaction = () => {
  return async (client: Client, mailID: string, reaction: string) => {
    const updateMail = createUpdateMail()
    return await updateMail(client, mailID, { reaction })
  }
}
