import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Icon from '@mdi/react'
import { mdiLoading } from '@mdi/js'
import { string as yupString, object as yupObject, ref as yupRef } from 'yup'
import { useTranslation, Translator } from 'services/i18n'
import { fetch } from 'services/api'
import { hash } from 'services/crypto'
import { unprotect, setAuthCookie } from 'services/auth/protect'
import Shell from 'components/coronamail/Shell'
import { Form, Label, Input, Submit } from 'components/coronamail/Form'

const createValidationSchema = (t: Translator) => {
  return yupObject().shape({
    password: yupString()
      .min(8, t('auth', 'error', 'password-length'))
      .required(t('auth', 'error', 'required')),
    contrast: yupString()
      .min(8, t('auth', 'error', 'password-length'))
      .oneOf([yupRef('password'), null], t('auth', 'error', 'match'))
      .required(t('auth', 'error', 'required')),
  })
}

const Recover: NextPage<{}> = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const emailToken = router.query.token.toString()
  const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'load' | 'error' | 'form' | 'success'>(
    'load',
  )

  useEffect(() => {
    ;(async () => {
      const { response, payload } = await fetch(
        `/api/auth/verify/${emailToken}`,
      )

      if (response.ok) {
        setEmail(payload.data.email)
        setStatus('form')
      } else {
        setErrorMessage(payload.error.generic)
        setStatus('error')
      }
    })()
  }, [])

  return (
    <Shell
      title={t('auth', 'recover', 'seo-title')}
      description={t('auth', 'recover', 'seo-description')}
      disableDecoration
    >
      <style jsx global>{`
        body {
          background: #3c366b;
        }
      `}</style>
      <NextSeo nofollow noindex />
      <div className='flex w-full h-full max-w-3xl py-4 mx-auto'>
        <div className='flex flex-col items-center justify-center flex-1 px-2 text-center text-indigo-100 md:px-0'>
          {status === 'load' && (
            <>
              <Icon path={mdiLoading} size={3} color='#667EEA' spin={1} />
              <h3 className='text-lg text-white'>
                {t('auth', 'recover', 'loading')}
              </h3>
            </>
          )}

          {status === 'form' && (
            <Form
              theme='dark'
              initialValues={{ password: '', contrast: '' }}
              routeAPI='/api/auth/recover'
              method='PATCH'
              onSubmit={(payload) => {
                setAuthCookie(payload.data.authToken)
                setStatus('success')
                router.replace('/app')
              }}
              validationSchema={createValidationSchema(t)}
              mutateAPI={(values) => ({
                email,
                password: hash(values.password),
              })}
            >
              {({ isSubmitting }) => (
                <>
                  <h3 className='mb-4 text-lg text-white'>
                    {t('auth', 'recover', 'title')}
                  </h3>
                  <Label
                    name='password'
                    label={t('auth', 'recover', 'password-title')}
                    className='font-bold text-white'
                  >
                    <p className='mb-3 text-sm text-indigo-100'>
                      {t('auth', 'recover', 'password-description')}
                    </p>
                    <Input
                      name='password'
                      type='password'
                      placeholder={t('auth', 'recover', 'password-placeholder')}
                    />
                  </Label>

                  <Label
                    name='contrast'
                    label={t('auth', 'recover', 'contrast-title')}
                    className='font-bold text-white'
                  >
                    <p className='mb-3 text-sm text-indigo-100'>
                      {t('auth', 'recover', 'contrast-description')}
                    </p>
                    <Input
                      name='contrast'
                      type='password'
                      placeholder={t('auth', 'recover', 'contrast-placeholder')}
                    />
                  </Label>

                  <Submit
                    isSubmitting={isSubmitting}
                    text={t('auth', 'recover', 'cta')}
                  />
                </>
              )}
            </Form>
          )}

          {status === 'error' && (
            <>
              <p className='text-2xl'>{'😢'}</p>
              <h3 className='text-xl text-white'>
                {t('auth', 'recover', 'error')}
              </h3>
              <p className='mt-2 mb-4 md:text-md'>{errorMessage}</p>
              <Link href='/auth/login' replace>
                <a className='px-4 py-2 font-bold text-white bg-red-500 hover:bg-red-600'>
                  {t('auth', 'recover', 'error-button')}
                </a>
              </Link>
            </>
          )}

          {status === 'success' && (
            <>
              <p className='text-2xl'>{'🥳'}</p>
              <h3 className='text-xl text-white'>
                {t('auth', 'recover', 'success')}
              </h3>
              <p className='mt-2 mb-4 md:text-md'>
                {t('auth', 'recover', 'success-message')}
              </p>
            </>
          )}
        </div>
      </div>
    </Shell>
  )
}

Recover.getInitialProps = async (ctx) => {
  unprotect(ctx)
}

export default Recover
