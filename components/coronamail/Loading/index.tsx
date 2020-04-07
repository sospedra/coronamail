import React, { useState, useEffect } from 'react'
import Icon from '@mdi/react'
import { mdiLoading } from '@mdi/js'
import { useTranslation } from 'services/i18n'

const Loading: React.FC<{}> = () => {
  const { t } = useTranslation()
  const [isAlterVisible, setIsAlterVisible] = useState(false)

  useEffect(() => {
    const timeID = setTimeout(() => {
      setIsAlterVisible(true)
      return () => {
        clearTimeout(timeID)
      }
    }, 4000)
  }, [])

  return (
    <aside className='fixed top-0 bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center bg__transparent'>
      <style jsx global>{`
        .bg__transparent {
          background: rgba(0, 0, 0, 0.76);
        }
        body {
          @apply overflow-hidden;
        }
      `}</style>
      <Icon path={mdiLoading} size={3} color='#667EEA' spin={1} />
      <p className='text-lg text-gray-100'>{t('common', 'loading', 'title')}</p>
      <p
        className={`text-gray-100 text-sm duration-1000 transition transition-opacity ${
          isAlterVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {t('common', 'loading', 'alert')}
      </p>
    </aside>
  )
}

export default Loading
