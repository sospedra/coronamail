import { Client, query as q } from 'faunadb'
import { Mail } from './types'

export const createQueryMail = () => {
  return async (client: Client, id: string) => {
    return await client.query<{ mail: Mail }>(
      q.Select('data', q.Get(q.Ref(q.Collection('Mail'), id))),
    )
  }
}

export const createQueryMailAndUserID = () => {
  return async (client: Client, id: string) => {
    return await client.query<{ mail: Mail; userID: string }>({
      mail: q.Select('data', q.Get(q.Ref(q.Collection('Mail'), id))),
      userID: q.Select('id', q.Identity()),
    })
  }
}

export const createQueryLastInbox = () => {
  return async (client: Client, lastKnownRef: string) => {
    return await client.query<Mail[]>(
      q.Map(
        q.Paginate(q.Match(q.Index('mail_by_owner'), q.Identity()), {
          before: q.Ref(q.Collection('Mail'), lastKnownRef),
        }),
        q.Lambda('mail', q.Get(q.Var('mail'))),
      ),
    )
  }
}

export const createQueryNextMail = () => {
  return async (client: Client, type: 'inbox' | 'outbox', after: string) => {
    const index = type === 'inbox' ? 'mail_by_destination' : 'mail_by_owner'
    return await client.query<Mail[]>(
      q.Map(
        q.Paginate(q.Match(q.Index(index), q.Identity()), {
          after,
        }),
        q.Lambda('mail', q.Get(q.Var('mail'))),
      ),
    )
  }
}
