const createConfig = (config: { [key: string]: any } = {}) =>
  ({
    mode: 'same-origin',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    ...config,
  } as const)

export const fetch = async (route: string, config: RequestInit = {}) => {
  const response = await window.fetch(route, createConfig(config))
  const payload: { [key: string]: any } = response.json
    ? await response.json()
    : {}

  return { response, payload }
}
