import React from 'react'
import Icon from '@mdi/react'
import { mdiEyeOffOutline } from '@mdi/js'
import Link from 'next/link'
import { Mail } from 'services/db'
import { formatMailDate } from 'services/date'
import { REACTIONS } from 'services/reaction'
import { useTranslation } from 'services/i18n'
import { RowStyles } from './Row'

const Outbox: React.FC<{
  mails?: { id: string; data: Mail }[]
}> = (props) => {
  const { t, lang } = useTranslation()
  return (
    <ul className='flex flex-col items-center py-2 overflow-x-hidden'>
      <RowStyles />
      {props.mails?.map(({ data, id }, i) => (
        <li key={`outbox-${i}`} className='relative w-full'>
          <Link href={`/mail/${id}`}>
            <a className='bg-red-100 row'>
              <span className='hidden w-20 text-sm sm:inline-block md:w-40'>
                {data.openedAt ? (
                  <span>
                    <span className='hidden md:inline'>
                      {t('app', 'readed-at')}
                    </span>
                    <span>{formatMailDate(data.openedAt, lang)}</span>
                  </span>
                ) : (
                  <Icon
                    path={mdiEyeOffOutline}
                    color={'silver'}
                    size={0.8}
                    className='inline'
                  />
                )}
              </span>
              <p className='inline-flex flex-1 text-sm truncate'>
                <span className={data.openedAt ? '' : 'font-bold'}>
                  {data.subject}
                </span>
                <span className='text-gray-600'>
                  {' — '}
                  {data.raw}
                </span>
              </p>
              {data.reaction && (
                <span className='ml-4 text-sm'>
                  {REACTIONS.find(({ key }) => data.reaction === key)?.render}
                </span>
              )}
              <span className='ml-4 text-sm'>
                {formatMailDate(data.createdAt, lang)}
              </span>
            </a>
          </Link>
        </li>
      ))}
      <li className='relative flex flex-row justify-center w-full text-sm border-t'>
        <Link href='/app/editor'>
          <a className='px-6 py-2 font-bold text-red-500 text-md hover:text-red-700'>
            <span>{t('app', 'send-mail')}</span>
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default Outbox
