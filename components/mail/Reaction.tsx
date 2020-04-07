import React from 'react'
import { Mail, updateMailReaction, createClient } from 'services/db'
import { REACTIONS } from 'services/reaction'
import { useTranslation } from 'services/i18n'

export const ReactionEnable: React.FC<{
  token: string
  mailID: string
}> = (props) => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col w-full pt-2 -mb-2'>
      <p className='text-sm'>{t('mail', 'do-reaction')}</p>
      <div className='flex flex-row w-full'>
        {REACTIONS.map((reaction) => (
          <button
            key={reaction.key}
            className='flex items-center justify-center w-12 h-12'
            onClick={async () => {
              const db = createClient(props.token)
              await updateMailReaction(db, props.mailID, reaction.key)
              location.reload()
            }}
          >
            <span>{reaction.render}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export const ReactionDisable: React.FC<{
  mail: Mail
}> = (props) => {
  const { t } = useTranslation()
  const emoji = REACTIONS.find(({ key }) => props.mail.reaction === key)

  return (
    <div className='flex items-baseline w-full pt-2 -mb-2'>
      <p className='mr-2 text-sm'>{t('mail', 'did-reaction')}</p>
      <div className='flex items-center justify-center text-lg'>
        <span>{emoji?.render}</span>
      </div>
    </div>
  )
}
