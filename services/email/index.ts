import { sendEmail, SendEmailOptions } from './send-email'

export const sendEmailRegister = async ({
  token,
  ...emailOptions
}: SendEmailOptions & {
  token: string
}) => {
  return await sendEmail({
    ...emailOptions,
    pathname: `/auth/login?email=${encodeURIComponent(
      emailOptions.to,
    )}&v=${token}`,
    illustration: 'https://i.imgur.com/SiqnXa3.png',
  })
}

export const sendEmailNotification = async (emailOptions: SendEmailOptions) => {
  return await sendEmail({
    ...emailOptions,
    pathname: `/app?o=email`,
    illustration: 'https://i.imgur.com/RJ26i9N.png',
  })
}

export const sendRecoverLink = async ({
  token,
  ...emailOptions
}: SendEmailOptions & {
  token: string
}) => {
  return await sendEmail({
    ...emailOptions,
    pathname: `/auth/recover/${token}`,
    illustration: 'https://i.imgur.com/pkuOxO2.png',
  })
}
