import React from 'react'
import { useTranslation } from 'services/i18n'

const Features: React.FC<{}> = () => {
  const { t } = useTranslation()
  return (
    <section className='px-4 py-12'>
      <div className='container w-full max-w-4xl mx-auto'>
        <div className='w-full max-w-2xl mx-auto text-center'>
          <h2 className='mt-2 mb-6 font-serif text-3xl font-bold leading-tight text-center md:text-5xl font-heading'>
            {t('home', 'features', 'title')}
          </h2>
          <p className='mb-8 leading-relaxed text-gray-600'>
            {t('home', 'features', 'description')}
          </p>
        </div>

        <div className='w-full max-w-4xl mx-auto'>
          <div className='flex flex-wrap'>
            <div className='w-full px-6 sm:py-6 sm:w-1/2'>
              <h3 className='mb-3 text-2xl font-bold leading-none text-gray-800 md:text-3xl'>
                {t('home', 'features', 'send', 'title')}
              </h3>
              <p className='mb-3 text-gray-600'>
                {t('home', 'features', 'send', 'description')}
              </p>
              <p className='mb-8 text-gray-600'>
                {t('home', 'features', 'send', 'body0')}
              </p>
            </div>
            <div className='w-full p-4 pb-8 sm:w-1/2'>
              <img
                className='w-full h-48'
                src='/images/illustrations/typewriter.svg'
                alt='Send love'
              />
            </div>
          </div>

          <div className='flex flex-col-reverse flex-wrap my-8 sm:flex-row'>
            <div className='w-full p-4 pb-8 sm:w-1/2'>
              <img
                className='w-full h-48'
                src='/images/illustrations/spread-love.svg'
                alt='Receive love'
              />
            </div>
            <div className='w-full px-6 sm:py-6 sm:w-1/2'>
              <div className='align-middle'>
                <h3 className='mb-3 text-2xl font-bold leading-none text-gray-800 md:text-3xl'>
                  {t('home', 'features', 'receive', 'title')}
                </h3>
                <p className='mb-8 text-gray-600'>
                  {t('home', 'features', 'receive', 'description')}
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap'>
            <div className='w-full px-6 sm:py-6 sm:w-1/2'>
              <h3 className='mb-3 text-2xl font-bold leading-none text-gray-800 md:text-3xl sm:text'>
                {t('home', 'features', 'assist', 'title')}
              </h3>
              <p className='mb-8 text-gray-600'>
                {t('home', 'features', 'assist', 'description')}
              </p>
            </div>
            <div className='w-full sm:w-1/2'>
              <img
                className='w-full h-48'
                src='/images/illustrations/sick.svg'
                alt='Assist others'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
