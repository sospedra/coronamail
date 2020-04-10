import React, { useRef, useState, useEffect } from 'react'
import ReactSwipe from 'react-swipe'
import { range } from 'lodash'
import { matchMedia, styles } from 'services/styles'
import { useTranslation } from 'services/i18n'

const STEPS = [
  {
    bg: 'bg-indigo-500',
    border: 'bg-indigo-600',
    img: '',
    title: 'indigo title',
    description: 'indigo description',
  },
  {
    bg: 'bg-red-500',
    border: 'bg-red-600',
    img: '',
    title: 'red title',
  },
  {
    bg: 'bg-indigo-800',
    border: 'bg-indigo-900',
    img: '',
    title: 'indigo title',
    description: 'indigo description',
  },
]

const Onboarding: React.FC<{}> = () => {
  const { t } = useTranslation()
  const swipeRef = useRef<ReactSwipe>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [position, setPosition] = useState(0)
  const [swipeOptions, setSwipeOptions] = useState<object>({
    continuous: false,
    callback: (index: number) => setPosition(index),
    startSlide: position,
  })

  useEffect(() => {
    if (matchMedia('sm')) {
      setSwipeOptions({
        continuous: false,
      })
    }
  }, [])

  if (!isVisible) return null

  return (
    <aside className='fixed top-0 bottom-0 left-0 right-0 z-40 flex items-center justify-center w-screen onboarding'>
      <style jsx global>{`
        body,
        html {
          @apply overflow-hidden;
        }

        .onboarding {
          background-color: rgba(0, 0, 0, 0.6);
        }

        .onboarding__nav {
          @apply items-center justify-center hidden w-12 h-12 mx-4 text-lg text-gray-800 bg-gray-200 rounded-full shadow-lg;
        }

        .onboarding__nav svg {
          @apply flex-shrink-0 inline-block w-6 h-6 text-2xl text-gray-700 select-none fill-current;
        }

        .onboarding__nav:focus {
          @apply outline-none shadow-outline;
        }

        @screen sm {
          .onboarding__nav {
            @apply flex;
          }
          .onboarding__box {
            max-height: 35rem;
          }
        }

        .react-swipe-container > div {
          @apply h-full bg-transparent;
        }

        .mobile-paddings {
          @apply absolute z-10 w-full h-full left-0 right-0;
          border-bottom-width: 12rem;
        }
      `}</style>
      <div className='relative w-full h-full max-w-screen-sm onboarding__box'>
        <div className='flex flex-row items-center justify-center h-full'>
          <button
            className='onboarding__nav'
            onClick={() => {
              swipeRef.current?.prev()
            }}
          >
            <svg
              focusable='false'
              viewBox='0 0 24 24'
              aria-hidden='true'
              role='presentation'
            >
              <path fill='none' d='M0 0h24v24H0z'></path>
              <path d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'></path>
            </svg>
          </button>
          <div
            className={`mobile-paddings sm:hidden ${
              position === 0
                ? 'bg-indigo-500 border-indigo-600 '
                : 'bg-indigo-800 border-indigo-900'
            }`}
          ></div>
          <ReactSwipe
            swipeOptions={swipeOptions}
            ref={swipeRef}
            className='absolute z-20 flex flex-col flex-1 h-full text-white bg-transparent shadow-lg sm:rounded'
          >
            {STEPS.map(({ bg, border, title, description }, i) => (
              <div className='flex flex-col flex-1 h-full' key={i}>
                <div className={`flex flex-1 p-4 ${bg}`}>{title}</div>
                <div
                  className={`flex flex-col h-48 p-4 pb-12 sm:pb-4 ${border}`}
                >
                  <div className='flex flex-1'>{description}</div>

                  {i === STEPS.length - 1 && (
                    <button
                      onClick={() => setIsVisible(false)}
                      className='self-center hidden px-2 py-4 text-lg text-gray-700 bg-white rounded shadow-md sm:block'
                    >
                      {t('app', 'onboarding', 'start')}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </ReactSwipe>
          <button
            className='onboarding__nav'
            onClick={() => {
              swipeRef.current?.next()
            }}
          >
            <svg
              focusable='false'
              viewBox='0 0 24 24'
              aria-hidden='true'
              role='presentation'
            >
              <path fill='none' d='M0 0h24v24H0z'></path>
              <path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z'></path>
            </svg>
          </button>
        </div>
        <div className='absolute bottom-0 left-0 right-0 z-30 flex flex-row items-center px-4 py-4 text-gray-200 sm:relative'>
          <div className='flex flex-row items-center flex-1 sm:justify-center'>
            <button
              className='w-5 h-5 sm:hidden'
              onClick={() => swipeRef.current?.prev()}
            >
              {position !== 0 && (
                <svg
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  role='presentation'
                >
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path
                    fill={styles.theme.colors.gray[200]}
                    d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'
                  ></path>
                </svg>
              )}
            </button>
            <div className='flex flex-row mx-2'>
              {range(STEPS.length).map((i) => (
                <button
                  key={i}
                  onClick={() => swipeRef.current?.slide(i, 300)}
                  className={`w-2 h-2 m-1 bg-white rounded-full focus:outline-none focus:shadow-outline ${
                    i === position ? '' : 'opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className='flex justify-end flex-1 sm:hidden'>
            <button
              className='px-2 py-1 text-sm text-gray-700 bg-white rounded shadow-md'
              onClick={() => {
                position === STEPS.length - 1
                  ? setIsVisible(false)
                  : swipeRef.current?.next()
              }}
            >
              {position === STEPS.length - 1
                ? t('app', 'onboarding', 'start')
                : t('app', 'onboarding', 'next')}
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Onboarding
