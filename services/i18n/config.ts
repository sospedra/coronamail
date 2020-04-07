export const DEFAULT_LANG = 'en'
export const supportedLangs = [DEFAULT_LANG, 'es', 'ca'] as const
export type Lang = typeof supportedLangs[number]
