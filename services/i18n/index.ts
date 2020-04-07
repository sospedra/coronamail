import { NextApiRequest } from 'next'
import { detectLang } from './detect-lang'
import { Lang as LangType } from './config'
import {
  getLocale,
  Locale as LocaleType,
  getCountries,
  getLanguages,
} from './locales'

export * from './TranslationProvider'
export { detectLang, getLocale, getCountries, getLanguages }
export type Lang = LangType
export type Locale = LocaleType

export const useApiTranslation = async (
  req: NextApiRequest,
  forceLang?: Lang,
) => {
  const reqLang = detectLang(req).lang
  const lang = forceLang || reqLang || 'en'
  const locale = await getLocale(lang)

  if (locale) {
    return locale
  } else {
    return await getLocale(reqLang)
  }
}
