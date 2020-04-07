import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'services/i18n'

const userTypes = [
  {
    illustration: '/images/illustrations/writer.svg',
    name: 'writer' as 'writer',
  },
  {
    illustration: '/images/illustrations/social-distancing.svg',
    name: 'sick' as 'sick',
  },
  {
    illustration: '/images/illustrations/doctor.svg',
    name: 'assistant' as 'assistant',
  },
]

const getQueryParams = (role: string, email: string | null) => {
  const params: { [key: string]: string } = { role }

  if (email) params.email = email

  const queryParams = new URLSearchParams(params)

  return queryParams.toString()
}

const Who: React.FC<{
  register: React.RefObject<HTMLElement>
  email: string | null
}> = (props) => {
  const { t } = useTranslation()
  return (
    <section ref={props.register} id='who' className='px-4 pb-12'>
      <style jsx global>{`
        .card {
          width: 22rem;
        }

        @screen md {
          .card {
            width: 14rem;
          }
        }

        @screen lg {
          .card {
            width: 16rem;
          }
        }
      `}</style>
      <div className='w-full max-w-2xl mx-auto text-center'>
        <h2 className='mt-2 mb-6 font-serif text-3xl font-bold leading-tight md:text-5xl font-heading'>
          {t('home', 'who', 'title')}
        </h2>
        <p className='flex flex-col mb-8 leading-relaxed text-gray-600'>
          <span>{t('home', 'who', 'body0')}</span>
          <span className='text-sm italic'>{t('home', 'who', 'body1')}</span>
        </p>
      </div>
      <div className='w-full max-w-4xl mx-auto'>
        <div className='flex flex-wrap justify-center'>
          {userTypes.map((userType) => (
            <div
              key={userType.name}
              className={`flex flex-col m-2 overflow-hidden rounded shadow-lg card`}
            >
              <img
                className='w-full h-48 p-4 bg-red-100'
                src={userType.illustration}
                alt={`Illustration of ${userType.name}`}
              />
              <div className='flex-grow px-6 py-4'>
                <div className='mb-2 text-xl font-bold'>
                  {t('home', 'who', userType.name, 'title')}
                </div>
                <p className='text-base text-gray-700'>
                  {t('home', 'who', userType.name, 'description')}
                </p>
              </div>
              <div className='px-6 py-4'>
                <Link
                  as='/auth/register'
                  href={`/auth/register${getQueryParams(
                    userType.name,
                    props.email,
                  )}`}
                >
                  <a className='inline-block w-full px-8 py-4 mr-6 font-bold leading-none text-center text-white bg-red-500 rounded shadow hover:bg-red-600'>
                    {t('home', 'who', userType.name, 'cta')}
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Who
