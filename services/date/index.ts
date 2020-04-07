import { format, isSameDay, isSameYear } from 'date-fns'
import { es, ca } from 'date-fns/locale'
import { Lang } from 'services/i18n/config'

const getLocaleDate = (lang: Lang) => {
  switch (lang) {
    case 'ca':
      return ca
    case 'es':
    default: {
      return es
    }
  }
}

export const formatMailDate = (fromMailDate: string, lang: Lang) => {
  const date = new Date(fromMailDate)

  if (isSameDay(date, new Date())) {
    return format(date, "HH:mm'h'", { locale: getLocaleDate(lang) })
  }

  if (isSameYear(date, new Date())) {
    return format(date, 'MMM dd', { locale: getLocaleDate(lang) })
  }

  return format(date, 'd MMM yy', { locale: getLocaleDate(lang) })
}
