import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config.js'

export const styles = resolveConfig(tailwindConfig)

export const matchMedia = (screen: 'sm' | 'md' | 'lg' | 'xl') => {
  if (typeof window === 'undefined') {
    return false
  } else {
    if (window.matchMedia) {
      const mq = window.matchMedia(
        `(min-width: ${styles.theme.screens[screen]})`,
      )
      return !!mq.matches
    } else {
      return false
    }
  }
}
