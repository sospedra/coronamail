import React from 'react'
import { range } from 'lodash'
import { useTranslation } from 'services/i18n'

const FAQ: React.FC<{}> = () => {
  const { t } = useTranslation()
  return (
    <section id='faq' className='px-4 py-12 opacity-0 opacity-100'>
      <div className='max-w-3xl mx-auto transla'>
        <h2 className='mt-2 mb-6 font-serif text-3xl font-bold leading-tight text-center md:text-5xl font-heading'>
          {t('home', 'faq', 'title')}
        </h2>
        {range(9).map((index) => (
          <details key={index} className='p-4 mb-2 border-b'>
            <summary className='flex items-baseline w-full font-semibold text-left cursor-pointer'>
              <span className='flex flex-1'>
                {t('home', 'faq', `${index}` as '0', 'question')}
              </span>
            </summary>
            <p className='mt-1'>
              {t('home', 'faq', `${index}` as '0', 'answer')}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQ
