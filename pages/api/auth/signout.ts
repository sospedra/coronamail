import { NextApiResponse, NextApiRequest } from 'next'
import { serializeCookie, findToken } from 'services/auth/protect'
import { signout } from 'services/db/privileged'
import { useMiddlewares } from 'services/middlewares'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await useMiddlewares(req, res)

  const token = findToken(req)
  const cookieSerialized = serializeCookie('', -1)

  await signout(token)

  res.setHeader('Set-Cookie', cookieSerialized)
  res.status(200).send({})
}
