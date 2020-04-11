import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react'
import { mdiEyeCheckOutline, mdiNewBox } from '@mdi/js'
import { Mail } from 'services/db'
import { formatMailDate } from 'services/date'
import { useTranslation } from 'services/i18n'
import { RowStyles } from './Row'

const Inbox: React.FC<{
  mails?: { id: string; data: Mail }[]
}> = (props) => {
  const { lang, t } = useTranslation()
  return (
    <ul className='flex flex-col items-center py-2 overflow-x-hidden'>
      {(!props.mails || props.mails.length === 0) && (
        <li className='w-full pb-2 italic text-center text-gray-700 border-b'>
          <p>{t('app', 'inbox-empty')}</p>
        </li>
      )}
      <RowStyles />
      {props.mails?.map(({ data, id }, i) => (
        <li className='relative w-full' key={`inbox-${i}`}>
          <Link href={`/mail/${id}`}>
            <a className={`row ${data.openedAt ? 'bg-red-100' : 'bg-white'}`}>
              <p className='flex-1 text-sm truncate'>
                <Icon
                  path={data.openedAt ? mdiEyeCheckOutline : mdiNewBox}
                  color={data.openedAt ? '#A0AEC0' : '#68D391'}
                  size={0.8}
                  className='inline mr-4'
                />
                <span className={data.openedAt ? '' : 'font-bold'}>
                  {data.subject}
                </span>
                <span className='text-gray-600'>
                  {' — '}
                  {data.raw}
                </span>
              </p>
              <span className='ml-4 text-sm'>
                {formatMailDate(data.createdAt, lang)}
              </span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Inbox
