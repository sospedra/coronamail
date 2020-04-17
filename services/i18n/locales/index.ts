import { Lang } from '../config'

export type Locale = Unwrap<typeof getLocale>
export type Countries = Unwrap<typeof getCountries>
export type Languages = Unwrap<typeof getLanguages>

export const getLocale = async (lang: Lang) => {
  switch (lang) {
    case 'ca': {
      return (await import('./ca.json')).default
    }
    case 'es':
    default: {
      return (await import('./es.json')).default
    }
  }
}

export const getCountries = async () => {
  return (await import('./countries.json')).default
}

export const getLanguages = async () => {
  return (await import('./languages.json')).default
}
