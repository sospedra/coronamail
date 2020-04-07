import React from 'react'
import Link from 'next/link'
import { useAuth } from 'services/auth/AuthProvider'
import { useRouter } from 'next/router'
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'
import { useTranslation } from 'services/i18n'

const Navigation: React.FC<{
  disableDecoration: boolean
}> = (props) => {
  const { t } = useTranslation()
  const { token } = useAuth()
  const router = useRouter()

  return (
    <header className='bg-indigo-900'>
      <div
        className={`flex items-center justify-between max-w-6xl px-4 pt-4 mx-auto ${
          props.disableDecoration ? 'pb-4' : ''
        }`}
      >
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <a className='inline-block py-2 font-serif text-xl font-bold text-white'>
              {t('common', 'name')}
            </a>
          </Link>
        </div>
        {token ? (
          <nav>
            {router.pathname === '/app' ? (
              <Link href='/app/editor'>
                <a className='inline-flex h-6 font-bold text-gray-100 bg-red-500 rounded hover:bg-red-600 md:h-10 md:pr-4 md:py-2 md:pl-2'>
                  <Icon path={mdiPlus} size={1} color='white' />
                  <span className='hidden md:inline'>
                    {t('common', 'header', 'new-mail')}
                  </span>
                </a>
              </Link>
            ) : (
              <Link href='/app'>
                <a className='inline-block px-4 py-2 text-gray-700 bg-white rounded-lg hover:bg-gray-100'>
                  {t('common', 'header', 'app')}
                </a>
              </Link>
            )}
          </nav>
        ) : (
          <nav className='flex flex-col flex-col-reverse sm:block'>
            <Link href='/auth/login'>
              <a className='inline-block py-1 text-center text-gray-500 sm:py-4 hover:text-gray-100 sm:mr-6'>
                {t('common', 'header', 'login')}
              </a>
            </Link>

            <Link href='/#who'>
              <a className='inline-block px-4 py-2 text-gray-700 bg-white rounded-lg hover:bg-gray-100'>
                {t('common', 'header', 'register')}
              </a>
            </Link>
          </nav>
        )}
      </div>

      {!props.disableDecoration && (
        <svg
          className='text-white fill-current md:block'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 200'
        >
          <path fillOpacity='1' d='M0,80L1440,32L1440,220L0,220Z'></path>
        </svg>
      )}
    </header>
  )
}

export default Navigation
