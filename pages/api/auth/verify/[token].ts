import { NextApiRequest, NextApiResponse } from 'next'
import { get } from 'lodash'
import { useMiddlewares } from 'services/middlewares'
import { decodeJWT } from 'services/auth/jwt'
import { useApiTranslation } from 'services/i18n'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await useMiddlewares(req, res)
  const { token } = req.query
  const { isValid, errorKey, email } = decodeJWT(token)
  const i18n = await useApiTranslation(req)

  if (!isValid) {
    return res.status(500).send({
      error: { generic: get(i18n, errorKey) },
    })
  }

  try {
    return res.send({ data: { email } })
  } catch (ex) {
    return res.status(500).send({
      error: { generic: i18n.auth.error.invalid },
    })
  }
}
