import { Client, query as q } from 'faunadb'
import { ProtoUser } from '../types'

export const createLogin = (client: Client) => {
  return async (email: string, password: string) => {
    return await client.query<{ authToken: string; verified: boolean }>(
      q.Let(
        {
          user: q.Match(q.Index('user_by_email'), email),
        },
        {
          authToken: q.Select(
            'secret',
            q.Login(q.Var('user'), {
              password,
            }),
          ),
          verified: q.Select(['data', 'verified'], q.Get(q.Var('user'))),
        },
      ),
    )
  }
}

export const createSignout = (client: Client) => {
  return async (token: string) => {
    return await client.query(q.Logout(false), {
      secret: token,
    })
  }
}

export const createRegister = (client: Client) => {
  return async (
    { email, languages, role, name, country }: ProtoUser,
    password: string,
  ) => {
    return await client.query(
      q.Create(q.Collection('User'), {
        credentials: { password },
        data: {
          name,
          country,
          email,
          inbox_size: 0,
          role,
          languages,
          verified: false,
        },
      }),
    )
  }
}

export const createCheckExistence = (client: Client) => {
  return async (email: string) => {
    return await client.query<boolean>(
      q.Exists(q.Match(q.Index('user_by_email'), email)),
    )
  }
}

export const createRecover = (client: Client) => {
  return async (email: string, password: string) => {
    const user = await client.query<{ secret: string }>(
      q.Let(
        {
          userRef: q.Select(
            'ref',
            q.Get(q.Match(q.Index('user_by_email'), email)),
          ),
        },
        q.Do(
          q.Update(q.Var('userRef'), { credentials: { password: password } }),
          q.Login(q.Var('userRef'), {
            password,
          }),
        ),
      ),
    )

    return user.secret
  }
}

export const createVerification = (client: Client) => {
  return async (email: string) => {
    return await client.query(
      q.Let(
        {
          userRef: q.Select(
            'ref',
            q.Get(q.Match(q.Index('user_by_email'), email)),
          ),
        },
        q.Do(
          q.Update(q.Var('userRef'), {
            data: {
              verified: true,
            },
          }),
        ),
      ),
    )
  }
}
