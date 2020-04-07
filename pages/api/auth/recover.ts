import { NextApiRequest, NextApiResponse } from 'next'
import isEmail from 'validator/lib/isEmail'
import { useMiddlewares } from 'services/middlewares'
import { recover } from 'services/db/privileged'
import { useApiTranslation } from 'services/i18n'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await useMiddlewares(req, res)
  const { email, password } = req.body
  const i18n = await useApiTranslation(req)

  if (!password) {
    return res.status(500).send({
      error: { body: { password: i18n.auth.error.missing } },
    })
  }

  if (!isEmail(email)) {
    return res.status(500).send({
      error: { body: { email: i18n.auth.error.email } },
    })
  }

  try {
    const authToken = await recover(email, password)
    return res.send({
      data: {
        authToken,
      },
    })
  } catch (ex) {
    console.log(ex)
    return res.status(500).send({
      error: { generic: i18n.auth.error.invalid },
    })
  }
}
