/// <reference types="next" />
/// <reference types="next/types/global" />

declare module 'tailwindcss/resolveConfig' {
  export default (config: object) => object
}

type Unarray<T> = T extends Array<infer U> ? U : T

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never

type Unwrap<T> = T extends Promise<infer U>
  ? U
  : T extends (...args: any) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : T

type Dictionary = string | DictionaryObject
type DictionaryObject = { [K: string]: Dictionary }

interface UnwrapDictionary<D extends Dictionary> {
  <K extends keyof D>(args: K): D[K]
  <K extends keyof D, K1 extends keyof D[K]>(...args: [K, K1]): D[K][K1]
  <K extends keyof D, K1 extends keyof D[K], K2 extends keyof D[K][K1]>(
    ...args: [K, K1, K2]
  ): D[K][K1][K2]
  <
    K extends keyof D,
    K1 extends keyof D[K],
    K2 extends keyof D[K][K1],
    K3 extends keyof D[K][K1][K2]
  >(
    ...args: [K, K1, K2, K3]
  ): D[K][K1][K2][K3]
}
