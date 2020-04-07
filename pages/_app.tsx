import React from 'react'
import App, { AppContext } from 'next/app'
import { Router } from 'next/router'
import CookieBanner from 'components/coronamail/Shell/CookieBanner'
import { initRouter } from 'services/analytics'
import { DefaultSEO } from 'services/seo'
import { sentinel } from 'services/sentinel'
import { findToken } from 'services/auth/protect'
import { AuthProvider } from 'services/auth/AuthProvider'
import { Progress } from 'services/progress'
import {
  TranslationProvider,
  detectLang,
  getLocale,
  Lang,
  Locale,
} from 'services/i18n'
import './tailwind.css'

sentinel()

class Coronamail extends App<{
  lang: Lang
  locale: Locale
  langIntCode: string
  token?: string
}> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {}
    const { langIntCode, lang } = detectLang(ctx.req)
    const locale = await getLocale(lang)
    const token = findToken(ctx.req)

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, lang, locale, langIntCode, token }
  }

  constructor(props: any) {
    super(props)
    Router.events.on('routeChangeComplete', initRouter)
  }

  componentDidMount() {
    document.documentElement.setAttribute('lang', this.props.lang)
  }

  componentWillUnmount() {
    Router.events.off('routeChangeComplete', initRouter)
  }

  render() {
    return (
      <TranslationProvider lang={this.props.lang} locale={this.props.locale}>
        <AuthProvider token={this.props.token}>
          <Progress />
          <DefaultSEO langIntCode={this.props.langIntCode} />
          <this.props.Component {...this.props.pageProps} />
          <CookieBanner />
        </AuthProvider>
      </TranslationProvider>
    )
  }
}

export default Coronamail
