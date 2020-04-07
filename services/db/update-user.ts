import { query as q, Client } from 'faunadb'
import { User } from './types'

export const createUpdateUser = () => {
  return async (client: Client, data: Partial<User>) => {
    return await client.query<User>(q.Update(q.Identity(), { data }))
  }
}
