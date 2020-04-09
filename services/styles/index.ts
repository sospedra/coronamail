import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config.js'

export const styles = resolveConfig(tailwindConfig)

export const matchMedia = (screen: 'sm' | 'md' | 'lg' | 'xl') => {
  if (window && window.matchMedia) {
    const mq = window.matchMedia(`(min-width: ${styles.theme.screens[screen]})`)
    console.log(mq)
    return !!mq.matches
  } else {
    return false
  }
}
