import React, { useState } from 'react'
import { NextPage } from 'next'
import { upperCase } from 'lodash'
import Router from 'next/router'
import Link from 'next/link'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'
import {
  Mail,
  createClient,
  queryMail,
  queryMailAndUserID,
  updateMailOpenedAt,
} from 'services/db'
import { findToken } from 'services/auth/protect'
import { FAUNA_CLIENT_SECRET } from 'services/env'
import { formatMailDate } from 'services/date'
import { useTranslation } from 'services/i18n'
import ReaderStyles from 'components/coronamail/ReaderStyles'
import Shell from 'components/coronamail/Shell'
import Switch from 'components/coronamail/Switch'
import { ReactionEnable, ReactionDisable } from './Reaction'
import Share from './Share'

type Props = {
  mail: Mail
  isAuth: boolean
  token: string
  isDestination: boolean
  mailID: string
}

const MailReader: NextPage<Props> = (props) => {
  const { t, lang } = useTranslation()
  const [readMode, setReadMode] = useState<'light' | 'dark'>('light')

  return (
    <Shell
      title={props.mail.subject}
      description={`${t('mail', 'seo-description')} ${props.mail.subject}`}
      disableDecoration
    >
      <style jsx global>{`
        body {
          transition: all 0.3s ease-in-out;
          background-color: ${readMode === 'light' ? '#f9fafb' : '#282c35'};
          color: ${readMode === 'light' ? '#222' : 'hsla(0,0%,100%,0.88)'};
        }
      `}</style>
      <ReaderStyles />
      <div className='flex-grow w-full max-w-4xl p-4 mx-auto md:p-8'>
        <aside className='flex flex-row items-start justify-between'>
          <div className='flex flex-col flex-1'>
            {props.isAuth && (
              <Link href='/app'>
                <a className='flex flex-row items-center mb-1 opacity-75 hover:opacity-100 xl:-ml-6'>
                  <Icon
                    path={mdiArrowLeft}
                    size={0.75}
                    color={readMode === 'light' ? '#000' : '#fff'}
                  />
                  <span
                    className={`ml-1 font-serif ${
                      readMode === 'light' ? 'text-black' : 'text-gray-400'
                    }`}
                  >
                    {t('mail', 'home')}
                  </span>
                </a>
              </Link>
            )}
            <h1 className='font-serif text-2xl font-bold'>
              {props.mail.subject}
            </h1>
            <p
              className={`text-base italic ${
                readMode === 'light' ? 'text-gray-700' : 'text-gray-400'
              }`}
            >
              {t('mail', 'created-at')}{' '}
              {formatMailDate(props.mail.createdAt, lang)}
              <br />
              {t('mail', 'by')} {upperCase(props.mail.author)}
            </p>
            {props.isDestination ? (
              props.mail.reaction ? (
                <ReactionDisable mail={props.mail} />
              ) : (
                <ReactionEnable token={props.token} mailID={props.mailID} />
              )
            ) : null}
          </div>
          <Switch
            onChange={() =>
              setReadMode(readMode === 'light' ? 'dark' : 'light')
            }
          />
        </aside>

        <div className='pt-4 pb-6 mt-4 border-t border-b'>
          <div
            className='viewer'
            dangerouslySetInnerHTML={{ __html: props.mail.content }}
          />
        </div>
      </div>
      <Share isDarkMode={readMode === 'dark'} />
    </Shell>
  )
}

MailReader.getInitialProps = async (ctx) => {
  const authToken = findToken(ctx.req)
  const isAuth = !!authToken
  const token = isAuth ? authToken : FAUNA_CLIENT_SECRET
  const db = createClient(authToken)
  const { id } = ctx.query as { id: string }
  let mail, isDestination

  try {
    const payload = (await (isAuth ? queryMailAndUserID : queryMail)(
      db,
      id,
    )) as {
      mail: Mail
      userID?: string
    }

    mail = payload.mail
    isDestination = payload.mail.destinationID === payload.userID

    if (isDestination) {
      await updateMailOpenedAt(db, id)
    }
  } catch (ex) {
    if (ctx.res) {
      ctx.res.writeHead(302, { Location: '/404' })
      ctx.res.end()
    } else {
      Router.push('/404')
    }
    return {} as Props
  }

  return { mail, token, isAuth, isDestination, mailID: id }
}

export default MailReader
