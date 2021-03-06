import React, { useState } from 'react'
import Link from 'next/link'
import Icon from '@mdi/react'
import { mdiCloseCircle } from '@mdi/js'
import { useTranslation } from 'services/i18n'
import { useStorage, createStorage, STORE_KEY_LEGAL } from 'services/storage'

const CookieBanner: React.FC<{}> = () => {
  const { t, tReplace } = useTranslation()
  const [didAccept, setDidAccept] = useState(true)
  useStorage((storage) => {
    setDidAccept(storage.getItem(STORE_KEY_LEGAL) === 'true')
  })

  if (didAccept) return null

  return (
    <div
      onClick={() => {
        setDidAccept(true)
        createStorage().setItem(STORE_KEY_LEGAL, 'true')
      }}
      className='fixed bottom-0 z-30 flex items-center w-full max-w-xl p-4 overflow-visible bg-white rounded-t cursor-pointer'
      style={{
        left: '50%',
        transform: 'translateX(-50%)',
        boxShadow:
          '0 -4px 12px 0 rgba(0, 0, 0, 0.1), 0 2px 6px -3px rgba(0, 0, 0, 0.2)',
      }}
    >
      <p className='text-base text-gray-800'>
        {tReplace(
          t('common', 'cookies', 'text'),
          'legal',
          <Link href='/legal'>
            <a className='text-blue-500 hover:text-blue-300' target='_blank'>
              {t('common', 'cookies', 'legal')}
            </a>
          </Link>,
        )}
      </p>
      <button className='p-2 ml-2 text-white bg-indigo-500 rounded-full hover:bg-indigo-900'>
        <Icon path={mdiCloseCircle} size={1} color='white' />
      </button>
    </div>
  )
}

export default CookieBanner
