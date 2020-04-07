import nodemailer from 'nodemailer'
import pug from 'pug'
import { HOST, EMAIL_SECRET } from 'services/env'
import { getTemplate } from './renderTemplate'

export type SendEmailOptions = {
  to: string
  i18n: {
    body0: string
    body1: string
    body2: string
    cta: string
    footer0: string
    footer1: string
    subject: string
  }
}

export const sendEmail = async ({
  to,
  i18n,
  pathname,
  illustration,
}: SendEmailOptions & {
  pathname: string
  illustration: string
}) => {
  const url = `${HOST}${pathname}`

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    service: 'gmail',
    auth: {
      user: 'coronamail19@gmail.com',
      pass: EMAIL_SECRET,
    },
  })

  return await transporter.sendMail({
    from: '"CoronaMail Support" <support@coronamail.org>',
    to: to,
    subject: i18n.subject,
    text: `${i18n.body0} ${i18n.body1} ${to} ${i18n.body2} ${url} ${i18n.footer0} ${i18n.footer1}`,
    html: pug.render(getTemplate(), {
      body0: i18n.body0,
      body1: i18n.body1,
      body2: i18n.body2,
      cta: i18n.cta,
      footer0: i18n.footer0,
      footer1: i18n.footer1,
      illustration,
      to,
      url,
    }),
  })
}
