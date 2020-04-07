import React, { useState, MouseEvent } from 'react'
import { head } from 'lodash'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Select from 'react-select'
import Link from 'next/link'
import Icon from '@mdi/react'
import { mdiArrowLeft, mdiSend } from '@mdi/js'
import { ApiMailSend } from 'pages/api/mail/send'
import { createClient, queryUser, User } from 'services/db'
import { fetch } from 'services/api'
import { getLanguages, useTranslation } from 'services/i18n'
import { protect } from 'services/auth/protect'
import Footer from 'components/coronamail/Shell/Footer'
import Loading from 'components/coronamail/Loading'
import PellEditor from './Editor'

type Props = {
  userRef: string
  user: User
  availableLanguages: Unwrap<typeof getLanguages>
}

const Editor: NextPage<Props> = (props) => {
  const { t } = useTranslation()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [lang, setLang] = useState(head(props.user.languages) as string)
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onSendMail = async (e: MouseEvent) => {
    e.preventDefault()

    if (!subject) {
      return setErrorMessage(t('editor', 'error', 'mandatory-subject'))
    }
    if (!content) {
      return setErrorMessage(t('editor', 'error', 'mandatory-content'))
    }

    const payload: ApiMailSend = {
      content,
      country: props.user.country,
      lang,
      subject,
      userRef: props.userRef,
    }

    setIsLoading(true)

    const { response } = await fetch('/api/mail/send', {
      method: 'POST',
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      router.push('/app?s=1', '/app')
    } else {
      setIsLoading(false)
      setErrorMessage(t('editor', 'error', 'generic'))
    }
  }

  return (
    <div className='flex flex-col min-h-screen md:pt-2 lg:pt-4'>
      <NextSeo
        title={t('editor', 'seo-title')}
        description={t('editor', 'seo-description')}
      />
      {isLoading && <Loading />}

      <main className='flex flex-col flex-grow w-full max-w-4xl min-h-screen mx-auto md:min-h-0'>
        <div className='flex flex-row items-end justify-between p-4'>
          <div className='flex flex-col flex-1 md:mr-16'>
            <Link href='/app'>
              <a className='flex flex-row items-center mb-1 opacity-50 hover:opacity-100 xl:-ml-6'>
                <Icon path={mdiArrowLeft} size={0.75} />
                <span className='ml-1 font-serif text-black'>
                  {t('editor', 'home')}
                </span>
              </a>
            </Link>
            <h1 className='mb-4 font-serif text-2xl font-bold '>
              {t('editor', 'title')}
            </h1>
            {errorMessage && (
              <div
                className='fixed top-0 left-0 right-0 w-full px-4 py-3 m-auto text-red-700 bg-red-100 border border-t-0 border-red-400 rounded-b md:w-1/3'
                role='alert'
              >
                <span className='block sm:inline'>{errorMessage}</span>
                <button
                  onClick={() => setErrorMessage('')}
                  className='absolute top-0 bottom-0 right-0 px-4 py-3'
                >
                  <svg
                    className='w-6 h-6 text-red-500 fill-current'
                    role='button'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                  >
                    <title>{t('editor', 'close')}</title>
                    <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
                  </svg>
                </button>
              </div>
            )}
            <div>
              <Select
                value={props.availableLanguages.find(
                  ({ value }) => value === lang,
                )}
                options={props.availableLanguages}
                className='w-64 mb-4'
                onChange={(selected) =>
                  setLang(
                    (selected as typeof props.availableLanguages[number]).value,
                  )
                }
              />
            </div>
            <div className='flex items-end w-full border-b border-gray-700'>
              <label
                className='px-2 mr-2 text-lg text-gray-800'
                htmlFor='title'
              >
                {t('editor', 'subject-title')}:
              </label>
              <input
                id='title'
                type='text'
                value={subject}
                autoComplete='off'
                autoCapitalize='on'
                onChange={(e) => setSubject(e.target.value)}
                placeholder={t('editor', 'subject-placeholder')}
                className='w-full p-1 text-lg leading-tight text-gray-900 appearance-none focus:outline-none focus:shadow-outline'
              />
            </div>
          </div>
          <button
            className='flex-row items-center hidden px-4 py-2 font-bold bg-red-500 rounded md:flex hover:bg-red-600'
            onClick={onSendMail}
          >
            <span className='mr-2 text-white'>{t('editor', 'send-mail')}</span>
            <Icon path={mdiSend} size={0.75} color='white' />
          </button>
        </div>

        <PellEditor setContent={setContent} />

        <button
          onClick={onSendMail}
          className='fixed bottom-0 right-0 flex items-center justify-center w-16 h-16 m-4 text-white bg-red-500 rounded-full shadow-lg md:hidden'
        >
          <Icon path={mdiSend} size={1} color='white' />
        </button>
      </main>

      <Footer disableDecorations />
    </div>
  )
}

Editor.getInitialProps = async (ctx) => {
  const token = protect(ctx)

  if (!token) return {} as Props

  const db = createClient(token)
  const user = await queryUser(db)
  const languages = await getLanguages()
  const availableLanguages = languages.filter(({ value }) =>
    user.user.languages.includes(value),
  )

  return { token, ...user, availableLanguages }
}

export default Editor
