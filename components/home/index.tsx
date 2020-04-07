import React, { useRef } from 'react'
import { head, castArray } from 'lodash'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Shell from 'components/coronamail/Shell'
import Hero from './Hero'
import Who from './Who'
import FAQ from './FAQ'
import Features from './Features'
import { useTranslation } from 'services/i18n'

const Home: NextPage<{}> = () => {
  const { t } = useTranslation()
  const whoRef = useRef<HTMLElement>(null)
  const router = useRouter()
  const email = head(castArray(router.query.to)) || null

  return (
    <Shell
      title={t('home', 'seo-title')}
      description={t('home', 'seo-description')}
      disableDecoration
    >
      <Hero whoRef={whoRef} />
      <Who register={whoRef} email={email} />
      <Features />
      <FAQ />
    </Shell>
  )
}

export default Home
