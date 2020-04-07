import { get, toLower, head } from 'lodash'
import { NextPageContext } from 'next'
import { supportedLangs, Lang } from './config'

const localeToValidLang = (locale: string = '') => {
  const lang = toLower(head(locale.replace('-', '_').split('_')))
  const isValidLang = supportedLangs.includes(lang as Lang)
  return {
    lang: (isValidLang ? lang : 'en') as Lang,
    langIntCode: locale,
  }
}

const getServerLang = (req: NextPageContext['req']) => {
  const acceptLanguage = get(req, ['headers', 'accept-language'], '')
  return localeToValidLang(head(acceptLanguage.split(',')))
}

const getBrowserLang = () => {
  return localeToValidLang(get(navigator, ['languages', 0]))
}

export const detectLang = (req?: NextPageContext['req']) => {
  return req ? getServerLang(req) : getBrowserLang()
}
