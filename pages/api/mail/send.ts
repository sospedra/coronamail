import { NextApiResponse, NextApiRequest } from 'next'
import { every, identity } from 'lodash'
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import { findToken } from 'services/auth/protect'
import { sendMail } from 'services/db/privileged'
import { sendEmailNotification } from 'services/email'
import { useMiddlewares } from 'services/middlewares'
import { useApiTranslation } from 'services/i18n'

const { sanitize } = createDOMPurify(
  (new JSDOM('').window as unknown) as Window,
)

const parseBody = (req: NextApiRequest) => ({
  content: sanitize(req.body.content),
  country: req.body.country as string,
  lang: req.body.lang as string,
  raw: sanitize(req.body.content as string, { ALLOWED_TAGS: [] }).replace(
    /&nbsp;/g,
    ' ',
  ),
  subject: req.body.subject as string,
  userRef: req.body.userRef as string,
})

export type ApiMailSend = Omit<ReturnType<typeof parseBody>, 'raw'>

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useMiddlewares(req, res)

    if (!findToken(req)) {
      return res.status(403).send({})
    }

    const { userRef, ...body } = parseBody(req)

    if (!every(req.body, identity)) {
      return res.status(500).send({
        error: {
          message: 'Missing one of the required params',
        },
      })
    }

    const i18n = await useApiTranslation(req, req.body.lang)
    const { destinationEmail } = await sendMail(userRef, body)

    await sendEmailNotification({
      to: destinationEmail,
      i18n: i18n.mail['notification'],
    })

    res.status(200).send({})
  } catch (ex) {
    return res.status(500).json({
      error: {
        internal: ex.message,
      },
    })
  }
}
