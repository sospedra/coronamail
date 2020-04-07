import React from 'react'

const Switch: React.FC<{
  defaultValue?: boolean
  onChange?: () => any
}> = (props) => {
  return (
    <>
      <style jsx global>{`
        .toggle__dot {
          top: 0.15rem;
          left: 0.15rem;
          transition: all 0.3s ease-in-out;
        }

        input:checked ~ .toggle__dot {
          transform: translateX(115%);
          @apply bg-white;
        }

        .toggle__line {
          height: 1.5rem;
          width: 3rem;
          background-color: #0f1114;
        }
      `}</style>
      <label htmlFor='switch' className='flex items-center cursor-pointer'>
        <div className='relative'>
          <input
            id='switch'
            type='checkbox'
            className='hidden'
            defaultChecked={props.defaultValue}
            onChange={props.onChange}
          />
          <div className='flex flex-row items-center justify-between p-1 rounded-full shadow-inner toggle__line'>
            <span className='w-4 h-4 text-xs'>🌙</span>
            <span className='w-4 h-4 text-xs'>🔆</span>
          </div>
          <div className='absolute inset-y-0 left-0 w-5 h-5 bg-white rounded-full shadow bg-white-200 toggle__dot'></div>
        </div>
      </label>
    </>
  )
}

export default Switch
