import React, { useContext, ReactElement } from 'react'
import { get } from 'lodash'
import { Lang, DEFAULT_LANG } from './config'
import { Locale } from './locales'

const i18nContext = React.createContext<{
  lang: Lang
  locale: Locale | {}
}>({ lang: DEFAULT_LANG, locale: {} })

export type Translator = UnwrapDictionary<Locale>

export const useTranslation = () => {
  const { locale, lang } = useContext(i18nContext)
  return {
    t: ((...keys: string[]): string => {
      return get(locale, keys, keys.join('.'))
    }) as Translator,
    lang,
    tUnsafe: (keys: string[]) => get(locale, keys, null),
    tReplace: (literal: string, token: string, Component: ReactElement) => {
      const chunks = literal.split(`#{${token}}`)
      return (
        <>
          {chunks[0]}
          {Component}
          {chunks[1]}
        </>
      )
    },
  }
}

export const TranslationProvider: React.FC<{
  lang: Lang
  locale: Locale
}> = (props) => {
  return (
    <i18nContext.Provider
      value={{
        lang: props.lang,
        locale: props.locale,
      }}
    >
      {props.children}
    </i18nContext.Provider>
  )
}
