import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react'
import { mdiTwitter, mdiInstagram, mdiGithub } from '@mdi/js'
import { useTranslation } from 'services/i18n'

const Footer: React.FC<{
  disableDecorations: boolean
}> = (props) => {
  const { t } = useTranslation()
  return (
    <footer>
      {!props.disableDecorations && (
        <svg
          className='text-indigo-900 fill-current md:block'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 200'
        >
          <path fillOpacity='1' d='M0,124L1440,32L1440,220L0,220Z'></path>
        </svg>
      )}
      <div className='bg-indigo-900'>
        <div className='flex flex-col flex-col-reverse p-4 pb-8 md:max-w-6xl md:mx-auto md:flex-row'>
          <div className='flex justify-center flex-1 mt-2 mb-4 text-sm text-center text-white md:w-auto md:mr-6 md:mb-0 md:text-base md:mt-0 md:justify-start'>
            {t('common', 'footer', 'text')}
            <a
              className='ml-1 text-blue-500 hover:text-blue-300'
              href='https://twitter.com/sospedra_r'
              rel='noopener noreferrer'
              target='_blank'
            >
              @sospedra_r
            </a>
          </div>
          <div className='flex flex-col flex-1 w-full md:flex-row md:justify-end'>
            <div className='flex flex-row justify-center md:justify-end'>
              <Link href='/about'>
                <a className='inline-block mt-0 text-gray-400 hover:text-gray-100'>
                  {t('common', 'footer', 'about')}
                </a>
              </Link>
              <Link href='/#faq'>
                <a className='inline-block mt-0 ml-8 text-gray-400 hover:text-gray-100'>
                  {t('common', 'footer', 'faq')}
                </a>
              </Link>
              <Link href='/#who'>
                <a className='inline-block mt-0 ml-8 text-gray-400 hover:text-gray-100'>
                  {t('common', 'footer', 'join')}
                </a>
              </Link>
            </div>
            <div className='flex justify-center my-2 md:justify-end md:my-0 md:ml-8'>
              <a
                href='https://twitter.com/coronamail'
                target='_blank'
                rel='noopener noreferral'
                className='w-6 h-6 mr-4 opacity-75 hover:opacity-100'
              >
                <Icon path={mdiTwitter} color='#fff' />
              </a>
              <a
                href='https://instagram.com/coronamail'
                target='_blank'
                rel='noopener noreferral'
                className='w-6 h-6 opacity-75 hover:opacity-100'
              >
                <Icon path={mdiInstagram} color='#fff' />
              </a>
              <a
                href='https://github.com/sospedra/coronamail'
                target='_blank'
                rel='noopener noreferral'
                className='w-6 h-6 opacity-75 hover:opacity-100'
              >
                <Icon path={mdiGithub} color='#fff' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
