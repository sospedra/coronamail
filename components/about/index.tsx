import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useTranslation } from 'services/i18n'
import Shell from 'components/coronamail/Shell'

const About: NextPage<{}> = () => {
  const { t } = useTranslation()
  return (
    <Shell
      title={t('about', 'seo-title')}
      description={t('about', 'seo-description')}
    >
      <article className='w-full max-w-2xl p-4 mx-auto text-center'>
        <h1 className='mb-12 font-serif text-3xl font-bold leading-tight md:text-4xl'>
          {t('about', 'title')}
        </h1>

        <h3 className='mt-2 mb-6 font-serif text-2xl font-bold leading-tight md:text-3xl font-heading'>
          {t('about', 'what', 'title')}
        </h3>
        <p className='mb-8 leading-relaxed text-gray-600'>
          {t('about', 'what', 'body0')}
        </p>
        <div className='w-full p-4 pb-8'>
          <img
            className='w-full h-64'
            src='/images/illustrations/social-distancing.svg'
            alt='Social distancing'
          />
        </div>

        <h3 className='mt-2 mb-6 font-serif text-2xl font-bold leading-tight md:text-3xl font-heading'>
          {t('about', 'who', 'title')}
        </h3>
        <p className='flex flex-col mb-8 leading-relaxed text-gray-600'>
          <span>{t('about', 'who', 'body0')}</span>
          <span>{t('about', 'who', 'body1')}</span>
        </p>
        <div className='flex justify-center w-full px-4'>
          <img
            className='w-64 h-64'
            src='/images/coronamail-logo.png'
            alt='CoronaMail logo'
          />
        </div>

        <h3 className='mb-6 font-serif text-2xl font-bold leading-tight md:text-3xl font-heading'>
          {t('about', 'contribute', 'title')}
        </h3>
        <p className='mb-8 leading-relaxed text-gray-600'>
          {t('about', 'contribute', 'body0')}
        </p>
        <Link href='/#who'>
          <a className='inline-block px-8 py-3 mt-6 mb-12 font-bold text-white bg-red-500 rounded-lg shadow md:mb-0 md:mt-10 hover:bg-red-600'>
            {t('about', 'join')}
          </a>
        </Link>
      </article>
    </Shell>
  )
}

export default About
