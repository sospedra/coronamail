import React from 'react'
import { useTranslation } from 'services/i18n'

const ROLES = [
  { name: 'writer', trans: 'role-writer' as 'role-writer' },
  { name: 'sick', trans: 'role-sick' as 'role-sick' },
  { name: 'assistant', trans: 'role-assistant' as 'role-assistant' },
]

const UserRole: React.FC<{
  value: string
  onChange: (e: React.ChangeEvent<any>) => void
  onBlur?: (e: React.FocusEvent<any>) => void
}> = (props) => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col'>
      {ROLES.map(({ name, trans }) => (
        <div key={name} className='flex flex-row items-baseline pt-3'>
          <input
            {...props}
            checked={props.value === name}
            id={name}
            name='role'
            type='radio'
            value={name}
          />
          <label htmlFor={name} className='ml-2'>
            {t('auth', 'register', trans)}
          </label>
        </div>
      ))}
    </div>
  )
}

export default UserRole
