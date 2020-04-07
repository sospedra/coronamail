import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'
import { useTranslation } from 'services/i18n'

const Header: React.FC<{}> = () => {
  const { t } = useTranslation()
  return (
    <header className='w-full max-w-2xl text-white bg-indigo-900 max'>
      <div className='flex flex-col'>
        <Link href='/'>
          <a className='inline-flex flex-row items-center py-2 font-serif opacity-75 hover:opacity-100'>
            <Icon
              path={mdiArrowLeft}
              size={0.75}
              color='white'
              className='mr-2'
            />
            <span>{t('common', 'name')}</span>
          </a>
        </Link>
        <h1 className='font-serif text-3xl font-bold'>
          {t('auth', 'register', 'title')}
        </h1>
        <h3 className='mb-1 text-lg'>{t('auth', 'register', 'body0')}</h3>
        <p className='text-lg'>{t('auth', 'register', 'body1')}</p>
      </div>
    </header>
  )
}

export default Header
