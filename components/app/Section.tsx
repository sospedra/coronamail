import React from 'react'

const Section: React.FC<{
  id?: string
  title?: string
  description?: string
  action?: React.ReactNode
  sm?: boolean
}> = (props) => {
  return (
    <section className='mb-10 bg-white' id={props.id}>
      {props.title && (
        <div className='flex justify-between w-full'>
          <h2
            className={`mb-2 font-serif font-bold leading-none text-gray-800 md:text-3xl ${
              props.sm ? 'text-xl' : 'text-2xl'
            }`}
          >
            {props.title}
          </h2>
          {props.action && props.action}
        </div>
      )}
      {props.description && (
        <p className='pr-6 mb-3 text-md'>{props.description}</p>
      )}
      <div className='md:mx-4'>{props.children}</div>
    </section>
  )
}

export default Section
