export const BUILD_ID = process.env.BUILD_ID as string
export const EMAIL_SECRET = process.env.EMAIL_SECRET as string
export const FAUNA_SECRET = process.env.FAUNA_SECRET as string
export const FAUNA_CLIENT_SECRET = 'fnADoWuB7vACC2yyeCOvdd0emCGIPo-TMdyGxJEl'
export const GA_TRACKING_ID = 'UA-161844048-2'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const HOST = IS_PROD ? 'https://coronamail.org' : 'http://localhost:3000'
export const JWT_SECRET = process.env.JWT_SECRET as string
export const SENTRY_SECRET =
  'https://f426880932084c31aa5ed861461330d5@sentry.io/5178528'
