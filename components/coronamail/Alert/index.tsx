import React, { useState } from 'react'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'

type Mode = 'danger' | 'warning' | 'info'

const Alert: React.FC<{
  className?: string
  isVisible: boolean
  message: string
  mode: Mode
  title: string
}> = (props) => {
  const [isVisible, setIsVisible] = useState(props.isVisible)

  if (!isVisible) return null

  const bgColor = {
    danger: 'bg-red-100',
    warning: 'bg-yellow-100',
    info: 'bg-teal-100',
  }[props.mode]
  const textColor = {
    danger: 'text-red-900',
    warning: 'text-yellow-900',
    info: 'text-teal-900',
  }[props.mode]
  const borderColor = {
    danger: 'border-red-500',
    warning: 'border-yellow-500',
    info: 'border-teal-500',
  }[props.mode]
  const iconColor = {
    danger: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-teal-500',
  }[props.mode]

  return (
    <aside
      className={`px-4 py-3 border-t-4 rounded shadow-md ${bgColor} ${textColor} ${borderColor} ${props.className ||
        ''}`}
      role='alert'
    >
      <div className='flex justify-between'>
        <div className='flex flex-1'>
          <div className='py-1'>
            <svg
              className={`w-6 h-6 mr-4 fill-current ${iconColor}`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z' />
            </svg>
          </div>
          <div>
            <p className='font-bold'>{props.title}</p>
            <p className='text-sm'>{props.message}</p>
          </div>
        </div>
        <button
          className='flex items-start pl-4 opacity-50'
          onClick={() => setIsVisible(false)}
        >
          <Icon path={mdiClose} size={0.75} />
        </button>
      </div>
    </aside>
  )
}

export default Alert
