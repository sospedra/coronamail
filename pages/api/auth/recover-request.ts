import { NextApiRequest, NextApiResponse } from 'next'
import isEmail from 'validator/lib/isEmail'
import { useMiddlewares } from 'services/middlewares'
import { useApiTranslation } from 'services/i18n'
import { generateJWT } from 'services/auth/jwt'
import { checkExistence } from 'services/db/privileged'
import { sendRecoverLink } from 'services/email'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await useMiddlewares(req, res)

    const i18n = await useApiTranslation(req)
    const email = req.body.email

    if (!isEmail(email)) {
      return res.status(500).send({
        error: {
          body: {
            email: i18n.auth.error.email,
          },
        },
      })
    }

    if (await checkExistence(email)) {
      await sendRecoverLink({
        i18n: i18n.auth.email.recover,
        to: email,
        token: generateJWT(email),
      })
    }

    return res.send({})
  } catch (ex) {
    return res.status(500).send({
      error: {
        internal: ex.message,
      },
    })
  }
}
