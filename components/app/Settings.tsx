import React, { useState } from 'react'
import { mdiLogout } from '@mdi/js'
import Icon from '@mdi/react'
import { useTranslation } from 'services/i18n'
import { User, updateUser, createClient } from 'services/db'
import { signout } from 'services/auth/protect'
import { sleep } from 'services/sleep'
import Loading from 'components/coronamail/Loading'
import UserRole from 'components/coronamail/UserRole'

const Settings: React.FC<{
  user: User
  token: string
}> = (props) => {
  const { t } = useTranslation()
  const [role, setRole] = useState(props.user.role)
  const [isLoading, setIsLoading] = useState(false)
  const onChangeRole = async () => {
    setIsLoading(true)
    await updateUser(createClient(props.token), { role })
    await sleep(2000)
    location.reload(true)
  }

  return (
    <ul className='flex flex-col py-2'>
      {isLoading && <Loading />}
      <li className='flex flex-col w-full max-w-lg mb-6'>
        <h4 className='mb-2 text-lg font-semibold'>
          {t('app', 'settings', 'status-title')}
        </h4>
        <UserRole
          value={role}
          onChange={(e) => setRole(e.target.value as typeof role)}
        />

        {role !== props.user.role && (
          <div className='flex flex-row items-center justify-end px-2 py-1 mt-2 text-red-800 border-t-4 border-red-800 rounded shadow-md'>
            <p>{t('app', 'settings', 'role-confirm')}</p>
            <button
              onClick={onChangeRole}
              className='px-2 text-white bg-red-800 rounded hover:bg-red-900'
            >
              {t('app', 'settings', 'role-accept')}
            </button>
          </div>
        )}
      </li>

      <li className='flex flex-col w-full max-w-lg mb-6'>
        <h4 className='mb-2 text-lg font-semibold'>
          {t('app', 'settings', 'remove-title')}
        </h4>
        <p>
          {t('app', 'settings', 'remove-message')}
          <a
            className='text-blue-500 hover:text-blue-600'
            href='mailto:support@coronamail.org'
          >
            support@coronamail.org
          </a>
        </p>
      </li>

      <li className='max-w-lg mb-6'>
        <button
          className='flex flex-row px-4 py-2 font-bold text-white bg-red-800 rounded hover:bg-red-600'
          onClick={signout}
        >
          <Icon path={mdiLogout} size={1} color='white' className='mr-2' />
          {t('app', 'settings', 'signout')}
        </button>
      </li>
    </ul>
  )
}

export default Settings
