import { NextApiRequest, NextApiResponse } from 'next'
import isEmail from 'validator/lib/isEmail'
import { useMiddlewares } from 'services/middlewares'
import { useApiTranslation } from 'services/i18n'
import { login } from 'services/db/privileged'
import { sendEmailRegister } from 'services/email'
import { generateJWT } from 'services/auth/jwt'

const MIN_5_IN_MS = 5 * 60 * 1000

const didRequestExpired = (fromReq: string) => {
  const expirationDate = Date.parse(fromReq) + MIN_5_IN_MS
  const now = new Date().getTime()
  return expirationDate < now
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await useMiddlewares(req, res)

    const i18n = await useApiTranslation(req)
    const { email, now, password } = req.body

    if (didRequestExpired(now)) {
      return res.status(500).send({
        error: {
          generic: i18n.auth.error.expired,
        },
      })
    }

    if (!isEmail(email)) {
      return res.status(500).send({
        error: {
          body: {
            email: i18n.auth.error.email,
          },
        },
      })
    }

    try {
      const { authToken, verified } = await login(email, password)

      if (!verified) {
        await sendEmailRegister({
          i18n: i18n.auth.email['register'],
          to: email,
          token: generateJWT(email, 24 * 60),
        })

        return res.status(403).send({
          error: {
            generic: i18n.auth.error.verified,
          },
        })
      }

      return res.send({
        data: { authToken },
      })
    } catch (ex) {
      return res.status(403).send({
        error: {
          generic: i18n.auth.error.autentication,
        },
      })
    }
  } catch (ex) {
    return res.status(500).send({
      error: {
        internal: ex.message,
      },
    })
  }
}
