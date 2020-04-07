// @ts-ignore
import sha512 from 'hash.js/lib/hash/sha/512'

export const hash = (secret: string): string => {
  return sha512()
    .update(secret)
    .digest('hex')
}
