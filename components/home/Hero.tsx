import React from 'react'
import { useTranslation } from 'services/i18n'

const Hero: React.FC<{
  whoRef: React.RefObject<HTMLElement>
}> = (props) => {
  const { t } = useTranslation()

  return (
    <section>
      <div className='bg-indigo-900 md:overflow-hidden'>
        <div className='px-4 py-12 md:py-4'>
          <div className='md:max-w-6xl md:mx-auto'>
            <div className='md:flex md:flex-wrap'>
              <div className='text-center md:w-1/2 md:text-left md:pt-16'>
                <h1 className='mb-4 font-serif text-4xl font-bold leading-tight text-white md:text-5xl'>
                  {t('home', 'claim')}
                </h1>

                <p className='text-indigo-200 md:text-xl md:pr-48'>
                  {t('home', 'body0')}
                  <br />
                  {t('home', 'body1')}
                </p>
                <button
                  className='inline-block px-8 py-3 mt-6 mb-12 font-bold text-white bg-red-500 rounded-lg shadow md:mb-0 md:mt-10 hover:bg-red-600'
                  onClick={() => {
                    try {
                      if (props.whoRef.current) {
                        window.scrollTo(0, props.whoRef.current.offsetTop)
                      } else {
                        location.href = '#who'
                      }
                    } catch (ex) {
                      location.href = '#who'
                    }
                  }}
                >
                  {t('home', 'cta')}
                </button>
              </div>
              <div className='relative md:w-1/2'>
                <div className='hidden md:block'>
                  <div
                    className='absolute top-0 right-0 flex w-full mt-10 overflow-hidden rounded-lg'
                    style={{ zIndex: 1 }}
                  >
                    <div className='w-full' style={{ height: 560 }}>
                      <img
                        src='/images/illustrations/popular.svg'
                        alt='Loving girl'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          className='text-white fill-current md:block'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 300'
        >
          <path fillOpacity='1' d='M0,224L1440,32L1440,320L0,320Z'></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
