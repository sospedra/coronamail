import React, { useState, useEffect } from 'react'
import { toString } from 'lodash'
import { NextPage } from 'next'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Icon from '@mdi/react'
import { mdiArrowLeft, mdiClose, mdiEmailCheckOutline } from '@mdi/js'
import { useTranslation } from 'services/i18n'
import { unprotect } from 'services/auth/protect'
import { decodeJWT } from 'services/auth/jwt'
import { fetch } from 'services/api'
import Footer from 'components/coronamail/Shell/Footer'
import Form from './Form'
import RecoverForm from './RecoverForm'

const Login: NextPage<{
  needsVerification: boolean
  tokenEmail: string
}> = (props) => {
  const { t } = useTranslation()
  const [status, setStatus] = useState<'login' | 'success' | 'recover'>('login')

  useEffect(() => {
    if (props.needsVerification) {
      fetch('/api/auth/verification', {
        method: 'PATCH',
        body: JSON.stringify({ email: props.tokenEmail }),
      })
    }
  }, [])

  return (
    <div className='flex flex-col flex-grow min-h-screen'>
      <style jsx global>{`
        body {
          background: #3c366b;
        }
      `}</style>
      <NextSeo
        title={t('auth', 'login', 'seo-title')}
        description={t('auth', 'login', 'seo-description')}
      />

      <div className='flex flex-col items-center justify-center flex-grow w-full max-w-5xl mx-auto'>
        <div className='flex justify-center px-6 my-6 transition-all transform'>
          <main className='flex w-full rounded-lg shadow-lg xl:w-3/4 md:w-11/12'>
            <aside className='hidden w-full h-auto p-4 bg-gray-400 rounded-l-lg md:block md:w-1/2'>
              <Link href='/'>
                <a className='inline-flex mb-4 font-serif text-xs font-bold leading-4 opacity-50'>
                  <Icon path={mdiArrowLeft} size={0.7} />
                  <span className='ml-1'>{t('common', 'name')}</span>
                </a>
              </Link>
              <img src='/images/illustrations/login.svg' />
            </aside>

            <div className='w-full p-5 bg-white rounded-lg md:w-1/2 md:rounded-l-none'>
              <div className='absolute flex justify-end opacity-75 md:hidden'>
                <Link href='/'>
                  <a>
                    <Icon path={mdiClose} size={1} />
                  </a>
                </Link>
              </div>

              {status === 'success' && (
                <div className='flex flex-col items-center justify-center w-full h-auto text-center md:p-8'>
                  <Icon path={mdiEmailCheckOutline} size={2} color='#F56565' />
                  <p className='text-xl md:pt-4'>
                    {t('auth', 'login', 'success-title')}
                  </p>
                  <p className='font-bold md:pt-4'>
                    {t('auth', 'login', 'success-subtitle')}
                  </p>
                  <p>{t('auth', 'login', 'success-indication')}</p>
                </div>
              )}

              {status === 'login' && (
                <>
                  <h3 className='text-2xl text-center md:pt-4'>
                    {t('auth', 'login', 'title')}
                  </h3>
                  <div className='pt-6 mb-4 bg-white rounded'>
                    <Form needsVerification={props.needsVerification} />
                  </div>
                </>
              )}

              {status === 'recover' && (
                <>
                  <h3 className='text-2xl text-center md:pt-4'>
                    {t('auth', 'login', 'recover-title')}
                  </h3>
                  <div className='pt-6 mb-4 bg-white rounded'>
                    <RecoverForm
                      setDidSubmitForm={() => setStatus('success')}
                    />
                  </div>
                </>
              )}

              <hr className='mb-6 border-t' />
              <div className='text-center md:px-8 md:pb-8'>
                <p className='text-sm text-gray-700'>
                  {t('auth', 'login', 'register-text')}
                </p>
                <Link href='/#who'>
                  <a className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-700'>
                    {t('auth', 'login', 'register-cta')}
                  </a>
                </Link>

                {status === 'login' && (
                  <>
                    <p className='text-sm text-gray-700'>
                      {t('auth', 'login', 'recover-text')}
                    </p>
                    <button
                      onClick={() => setStatus('recover')}
                      className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-700'
                    >
                      {t('auth', 'login', 'recover-cta')}
                    </button>
                  </>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer disableDecorations />
    </div>
  )
}

Login.getInitialProps = async (ctx) => {
  unprotect(ctx)

  let props = { needsVerification: false, tokenEmail: '' }

  if (ctx.req) {
    const registerToken = toString(ctx.query.v)

    if (registerToken) {
      const { isValid, email } = decodeJWT(registerToken)
      props.needsVerification = isValid
      props.tokenEmail = email
    }
  }

  return props
}

export default Login
