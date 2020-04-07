import React, { useState, useEffect } from 'react'
import Icon from '@mdi/react'
import { mdiTwitter, mdiFacebook, mdiLinkedin, mdiContentCopy } from '@mdi/js'
import { useRouter } from 'next/router'
import { HOST } from 'services/env'
import { useTranslation } from 'services/i18n'

const LINKS = [
  {
    getHref: ({
      href,
      body,
      cta,
    }: {
      href: string
      body: string
      cta: string
    }) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${body}\n${cta} ${href}`,
      )}`,
    path: mdiTwitter,
  },
  {
    getHref: ({
      href,
      body,
      cta,
    }: {
      href: string
      body: string
      cta: string
    }) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        `${body}\n${cta} ${href}`,
      )}`,
    path: mdiFacebook,
  },
  {
    getHref: ({
      href,
      body,
      cta,
    }: {
      href: string
      body: string
      cta: string
    }) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        `${body}\n${cta} ${href}`,
      )}`,
    path: mdiLinkedin,
  },
]

const Share: React.FC<{
  isDarkMode: boolean
}> = (props) => {
  const { t } = useTranslation()
  const router = useRouter()
  const [isAlertVisible, setIsAlerVisible] = useState(false)

  useEffect(() => {
    if (isAlertVisible) {
      const timeID = setTimeout(() => {
        setIsAlerVisible(false)
        return () => {
          clearTimeout(timeID)
        }
      }, 2000)
    }
  }, [isAlertVisible])

  return (
    <div className='flex flex-col items-center justify-center px-4 mt-4 text-center'>
      <p
        className={`text-sm ${
          props.isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        {t('mail', 'share', 'message')}
      </p>
      <div className='flex flex-row'>
        {LINKS.map(({ getHref, path }, i) => (
          <a
            href={getHref({
              href: HOST + router.route,
              body: t('mail', 'share', 'link-body'),
              cta: t('mail', 'share', 'link-cta'),
            })}
            target='_blank'
            className='p-4 opacity-50 hover:opacity-75'
            rel='noopener noreferrer'
            key={i}
          >
            <Icon
              path={path}
              size={1}
              color={props.isDarkMode ? 'white' : 'black'}
            />
          </a>
        ))}
        <div>
          <button
            className='p-4 appearance-none focus:outline-none'
            onClick={() => {
              setIsAlerVisible(true)
              navigator.clipboard.writeText(
                `${t('mail', 'share', 'link-body')}\n${t(
                  'mail',
                  'share',
                  'link-cta',
                )} ${HOST}${router.asPath}`,
              )
            }}
          >
            <Icon
              path={mdiContentCopy}
              size={1}
              color={props.isDarkMode ? 'white' : 'black'}
              className='opacity-50 hover:opacity-75'
            />
          </button>
          {isAlertVisible && (
            <p
              className={`absolute px-2 py-1 rounded border mt-2 shadow-lg text-center ${
                props.isDarkMode ? 'border-gray-200' : 'border-gray-600'
              }`}
            >
              {t('mail', 'clipboard')}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Share
