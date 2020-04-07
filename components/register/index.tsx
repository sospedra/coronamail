import React, { useState } from 'react'
import { head, defaultTo, castArray } from 'lodash'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { getLanguages, getCountries, useTranslation } from 'services/i18n'
import { unprotect } from 'services/auth/protect'
import Footer from 'components/coronamail/Shell/Footer'
import Header from './Header'
import Form from './Form'

const Register: NextPage<{
  countries: Unwrap<typeof getCountries>
  languages: Unwrap<typeof getLanguages>
}> = (props) => {
  const { t } = useTranslation()
  const router = useRouter()
  const [didSubmitForm, setDidSubmitForm] = useState(false)

  return (
    <div className='flex flex-col flex-grow min-h-screen'>
      <style jsx global>{`
        body {
          background: #3c366b;
        }
      `}</style>
      <NextSeo
        title={t('auth', 'register', 'seo-title')}
        description={t('auth', 'register', 'seo-description')}
      />

      <div className='flex flex-col justify-center w-full max-w-3xl p-6 mx-auto'>
        <Header />

        <main className='flex flex-col w-full py-8'>
          {didSubmitForm ? (
            <div className='flex flex-col items-center justify-center h-auto p-8 text-center text-indigo-100'>
              <p className='text-xl md:pt-4'>
                {t('auth', 'register', 'success-title')}
              </p>
              <p className='font-bold md:pt-4'>
                {t('auth', 'register', 'success-subtitle')}
              </p>
              <p className='mb-4 text-base'>
                {t('auth', 'register', 'success-indication')}
              </p>
              <img
                src='/images/illustrations/welcome.svg'
                className='h-64'
                alt='Welcome'
              />
            </div>
          ) : (
            <>
              <Form
                countries={props.countries}
                languages={props.languages}
                setDidSubmitForm={() => setDidSubmitForm(true)}
                defaultEmail={defaultTo(head(castArray(router.query.to)), '')}
                defaultRole={defaultTo(
                  head(castArray(router.query.role)),
                  'writer',
                )}
              />
            </>
          )}
        </main>
      </div>

      <Footer disableDecorations />
    </div>
  )
}

Register.getInitialProps = async (ctx) => {
  unprotect(ctx)

  const [countries, languages] = await Promise.all([
    getCountries(),
    getLanguages(),
  ])
  return {
    countries,
    languages,
  }
}

export default Register
