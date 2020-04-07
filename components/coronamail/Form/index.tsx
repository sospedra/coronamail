import React, { useState, useContext } from 'react'
import { identity, noop } from 'lodash'
import {
  ErrorMessage as FormikErrorMessage,
  ErrorMessageProps,
  Field,
  FieldAttributes,
  FieldProps as FieldPropsT,
  Formik,
  Form as FormikForm,
  FormikConfig,
  FormikProps,
} from 'formik'
import ReactSelect, { Props as SelectProps } from 'react-select'
import Icon from '@mdi/react'
import { mdiLoading } from '@mdi/js'
import Link from 'next/link'
import { useTranslation } from 'services/i18n'
import { fetch } from 'services/api'

export { Field }
export type FieldProps = FieldPropsT

type Theme = 'light' | 'dark'
const FormContext = React.createContext<{ theme: Theme; genericError: string }>(
  { theme: 'light', genericError: '' },
)

export const Form = <
  T extends { [key: string]: any },
  ApiPayload extends { [key: string]: any },
  F extends FormikConfig<T>
>({
  children,
  initialValues,
  mutateAPI = identity,
  onSubmit = noop,
  routeAPI,
  theme = 'light',
  validationSchema,
  method = 'POST',
}: {
  children: (props: FormikProps<T>) => React.ReactNode
  initialValues: T
  mutateAPI?: (values: T) => ApiPayload
  onSubmit?: (payload?: any) => void
  routeAPI: string
  theme?: Theme
  validationSchema: F['validationSchema']
  method?: string
}) => {
  const [genericError, setGenericError] = useState('')

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setErrors }) => {
        setGenericError('')

        const { response, payload } = await fetch(routeAPI, {
          method,
          body: JSON.stringify(mutateAPI(values)),
        })

        if (response.ok) {
          onSubmit(payload)
        } else {
          payload.error.generic
            ? setGenericError(payload.error.generic)
            : setErrors(payload.error.body)
        }
      }}
    >
      {(formikProps) => (
        <FormContext.Provider value={{ theme, genericError }}>
          <FormikForm noValidate className='w-full max-w-md'>
            {children(formikProps)}
          </FormikForm>
        </FormContext.Provider>
      )}
    </Formik>
  )
}

export const Submit: React.FC<{
  isSubmitting: boolean
  text: string
}> = (props) => {
  const { theme, genericError } = useContext(FormContext)

  return (
    <div className='relative mt-5 mb-5 text-center'>
      <button
        className={`inline-flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline ${
          props.isSubmitting && 'opacity-50 cursor-wait'
        }`}
        type='submit'
        disabled={props.isSubmitting}
      >
        {props.isSubmitting && (
          <Icon path={mdiLoading} spin={1} size={1} color='#fff' />
        )}
        <span className='pl-2'>{props.text}</span>
      </button>
      {genericError && (
        <p
          className={`absolute left-0 leading-4 text-left ${
            theme === 'light' ? 'text-red-700' : 'text-red-300'
          }`}
        >
          {'⚠'} <span className='text-sm align-baseline'>{genericError}</span>
        </p>
      )}
    </div>
  )
}

export const ErrorMessage: React.FC<
  ErrorMessageProps & {
    extractError?: (source: any) => string
  }
> = ({ extractError = identity, ...props }) => {
  const { theme } = useContext(FormContext)

  return (
    <FormikErrorMessage {...props}>
      {(error) => (
        <span
          className={`absolute left-0 flex text-xs ${
            theme === 'light' ? 'text-red-700' : 'text-red-300'
          }`}
        >
          <span className='inline-block mx-1 transform rotate-180'>{'⤵'}</span>
          <span className='pt-1 leading-3'>{extractError(error)}</span>
        </span>
      )}
    </FormikErrorMessage>
  )
}

export const Input: React.FC<FieldAttributes<{}>> = (props) => {
  return (
    <Field
      {...props}
      className='w-full px-3 py-2 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
      id={props.name}
    />
  )
}

export const Label: React.FC<{
  name: string
  label: string
  className?: string
  extractError?: (source: any) => string
}> = (props) => {
  return (
    <section className='pb-2'>
      <div className='relative pb-4'>
        <label className={`block mb-2 ${props.className}`} htmlFor={props.name}>
          {props.label}
        </label>
        {props.children}
        <ErrorMessage name={props.name} extractError={props.extractError} />
      </div>
    </section>
  )
}

Label.defaultProps = {
  className: '',
}

type SelectOption = { value: string; label: string }

export const Select: React.SFC<
  FieldProps &
    SelectProps & {
      options: SelectOption[]
    }
> = ({ options, field, form, ...props }) => (
  <>
    <style jsx global>{`
      .coronamail__placeholder,
      .coronamail__indicator,
      .coronamail__single-value,
      .coronamail__option {
        color: #1a202c;
        font-size: 0.875rem;
      }
      .coronamail__placeholder {
        color: #a0aec0 !important;
      }
      .coronamail__control {
        padding-top: 0.065rem;
        padding-bottom: 0.065rem;
      }
    `}</style>
    <ReactSelect<SelectOption>
      {...props}
      classNamePrefix='coronamail'
      options={options}
      name={field.name}
      instanceId={field.name}
      inputId={field.name}
      value={options.find((option) => option.value === field.value)}
      onChange={(option) => form.setFieldValue(field.name, option)}
      onBlur={field.onBlur}
    />
  </>
)

export const AcceptTerms: React.FC<{
  name: string
}> = (props) => {
  const { t } = useTranslation()

  return (
    <section className='relative pb-4'>
      <div className='flex items-baseline'>
        <Field type='checkbox' id={props.name} name={props.name} />
        <label
          htmlFor={props.name}
          className='inline-block ml-2 text-sm text-indigo-100'
        >
          {t('auth', 'register', 'tos-message')}
          <Link href='/legal#tos' replace={false}>
            <a
              target='_blank'
              className='text-indigo-400 hover:text-indigo-200'
            >
              {t('auth', 'register', 'tos')}
            </a>
          </Link>
          {t('auth', 'register', 'privacy-message')}
          <Link href='/legal#privacy'>
            <a
              target='_blank'
              className='text-indigo-400 hover:text-indigo-200'
            >
              {t('auth', 'register', 'privacy')}
            </a>
          </Link>
          .
        </label>
      </div>
      <ErrorMessage name={props.name} />
    </section>
  )
}
