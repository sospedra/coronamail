import { Client, query as q } from 'faunadb'
import { User, Mail } from './types'

export const createQueryUser = () => {
  return async (client: Client) => {
    return await client.query<{
      user: User
      mails: { id: string; data: Mail }[]
      inbox: { id: string; data: Mail }[]
      userRef: string
    }>(
      q.Let(
        {
          user: q.Select('data', q.Get(q.Identity())),
          inbox: q.If(
            q.Or(
              q.Equals(q.Select('role', q.Var('user')), 'sick'),
              q.Equals(q.Select('role', q.Var('user')), 'assistant'),
            ),
            q.Select(
              'data',
              q.Map(
                q.Paginate(
                  q.Match(
                    q.Index('mail_by_destination'),
                    q.Select('id', q.Identity()),
                  ),
                ),
                q.Lambda('mail', {
                  data: q.Select('data', q.Get(q.Var('mail'))),
                  id: q.Select('id', q.Var('mail')),
                }),
              ),
            ),
            [],
          ),
          mails: q.Map(
            q.Paginate(
              q.Match(q.Index('mail_by_owner'), q.Select('id', q.Identity())),
            ),
            q.Lambda('mail', {
              data: q.Select('data', q.Get(q.Var('mail'))),
              id: q.Select('id', q.Var('mail')),
            }),
          ),
        },
        {
          user: q.Var('user'),
          userRef: q.Select('id', q.Identity()),
          inbox: q.Var('inbox'),
          mails: q.Select('data', q.Var('mails')),
        },
      ),
    )
  }
}
