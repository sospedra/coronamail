import { query as q, Client } from 'faunadb'
import { Mail } from '../types'

export const createSendMail = (client: Client) => {
  return async (
    userRef: string,
    payload: Omit<
      Mail,
      | 'destinationID'
      | 'createdAt'
      | 'reaction'
      | 'ownerID'
      | 'openedAt'
      | 'author'
    >,
  ) => {
    return await client.query<{
      destinationEmail: string
    }>(
      q.Let(
        {
          owner: q.Ref(q.Collection('User'), userRef),
          destination: q.Select(
            'ref',
            q.Get(
              q.Join(
                q.Union(
                  q.Difference(
                    q.Union(
                      q.Intersection(
                        q.Match(q.Index('user_find_role'), 'sick'),
                        q.Match(q.Index('user_find_language'), payload.lang),
                      ),
                      q.Intersection(
                        q.Match(q.Index('user_find_role'), 'assistant'),
                        q.Match(q.Index('user_find_language'), payload.lang),
                      ),
                    ),
                    q.Match(
                      q.Index('user_find_ref'),
                      q.Ref(q.Collection('User'), userRef),
                    ),
                  ),
                  q.Match(q.Index('user_death_letter'), 'death_letter'),
                ),
                q.Index('user_sort_inbox_size'),
              ),
            ),
          ),
        },
        q.Do(
          q.Create(q.Collection('Mail'), {
            data: {
              author: q.Select(['data', 'name'], q.Get(q.Var('owner'))),
              ownerID: q.Select('id', q.Var('owner')),
              destinationID: q.Select('id', q.Var('destination')),
              createdAt: new Date().toISOString(),
              ...payload,
            },
          }),
          q.Update(q.Var('destination'), {
            data: {
              inbox_size: q.Add(
                q.Select(['data', 'inbox_size'], q.Get(q.Var('destination'))),
                1,
              ),
            },
          }),
          q.Let(
            {
              destinationEmail: q.Select(
                ['data', 'email'],
                q.Get(q.Var('destination')),
              ),
            },
            {
              destinationEmail: q.Var('destinationEmail'),
            },
          ),
        ),
      ),
    )
  }
}
