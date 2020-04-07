import { NextApiRequest, NextApiResponse } from 'next'
import { has } from 'lodash'
import { useMiddlewares } from 'services/middlewares'
import { useApiTranslation } from 'services/i18n'
import { checkExistence, register } from 'services/db/privileged'
import { sendEmailRegister } from 'services/email'
import isEmail from 'validator/lib/isEmail'
import { generateJWT } from 'services/auth/jwt'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await useMiddlewares(req, res)

  const i18n = await useApiTranslation(req)

  if (
    has(req.body, ['email', 'role', 'languages', 'country', 'name', 'password'])
  ) {
    return res.status(500).json({
      error: {
        generic: i18n.auth.error.missing,
      },
    })
  }

  const { email, role, languages, country, name, password } = req.body

  if (!isEmail(email)) {
    return res.status(500).send({
      error: {
        body: {
          email: i18n.auth.error.email,
        },
      },
    })
  }

  if (!['writer', 'sick', 'assistant'].includes(role)) {
    return res.status(500).send({
      error: {
        body: {
          role: i18n.auth.error.role,
        },
      },
    })
  }

  if (!(await checkExistence(email))) {
    await register(
      {
        name,
        email,
        role,
        languages,
        country,
      },
      password,
    )
  }

  await sendEmailRegister({
    i18n: i18n.auth.email['register'],
    to: email,
    token: generateJWT(email, 24 * 60),
  })

  return res.send(200)
}
