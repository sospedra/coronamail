import * as Sentry from '@sentry/browser'
import { SENTRY_SECRET, BUILD_ID, IS_PROD } from 'services/env'

export const sentinel = () => {
  const config: Sentry.BrowserOptions = {
    dsn: SENTRY_SECRET,
    release: BUILD_ID,
    maxBreadcrumbs: 50,
    attachStacktrace: true,
  }

  if (!IS_PROD) {
    const SentryIntegrations = require('@sentry/integrations')
    config.beforeSend = () => null
    config.integrations = [
      new SentryIntegrations.Debug({
        debugger: false,
      }),
    ]
  }

  Sentry.init(config)

  return {
    Sentry,
  }
}
