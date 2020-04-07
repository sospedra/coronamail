import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Shell from 'components/coronamail/Shell'
import { useTranslation } from 'services/i18n'

const NotFound: NextPage<{}> = () => {
  const { t } = useTranslation()
  return (
    <Shell
      title={t('404', 'seo-title')}
      description={t('404', 'seo-description')}
    >
      <section className='px-4 py-8 text-center'>
        <div className='flex flex-col justify-center mx-auto max-w-auto md:max-w-lg'>
          <img
            className='mb-8'
            style={{ height: 350 }}
            src='/images/illustrations/404.svg'
            alt='Page not found'
          />
          <h2 className='mb-2 text-5xl font-heading'>{t('404', 'title')}</h2>
          <p className='mb-6 text-gray-600'>{t('404', 'description')}</p>
          <div>
            <Link href='/'>
              <a className='inline-block px-8 py-3 text-white bg-red-500 rounded-lg shadow hover:bg-red-600'>
                {t('404', 'cta')}
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  )
}

export default NotFound
