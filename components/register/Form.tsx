import React from 'react'
import { omit } from 'lodash'
import {
  array as yupArray,
  boolean as yupBoolean,
  object as yupObject,
  string as yupString,
} from 'yup'
import { Translator, useTranslation } from 'services/i18n'
import { UserRole } from 'services/db'
import { hash } from 'services/crypto'
import {
  Select,
  Submit,
  Label,
  Input,
  AcceptTerms,
  Form,
  Field,
  FieldProps,
} from 'components/coronamail/Form'
import UserRoleInput from 'components/coronamail/UserRole'
import { Countries, Languages } from 'services/i18n/locales'

const createValidationSchema = (t: Translator) => {
  return yupObject().shape({
    role: yupString().required(t('auth', 'error', 'required')),
    email: yupString()
      .email(t('auth', 'error', 'email'))
      .required(t('auth', 'error', 'required')),
    name: yupString().required(t('auth', 'error', 'required')),
    password: yupString()
      .min(8, t('auth', 'error', 'password-length'))
      .required(t('auth', 'error', 'required')),
    country: yupObject({
      value: yupString().required(t('auth', 'error', 'required')),
      label: yupString(),
    }),
    languages: yupArray()
      .of(yupString())
      .required(t('auth', 'error', 'required')),
    tos: yupBoolean()
      .oneOf([true], t('auth', 'error', 'required'))
      .required(t('auth', 'error', 'required')),
  })
}

const RegisterForm: React.FC<{
  setDidSubmitForm: () => void
  countries: Countries
  languages: Languages
  defaultEmail: string
  defaultRole: string
}> = (props) => {
  const { t } = useTranslation()

  return (
    <Form
      initialValues={{
        name: '',
        email: props.defaultEmail,
        password: '',
        country: {} as Countries[number],
        languages: [] as Languages,
        role: props.defaultRole as UserRole,
        tos: false,
      }}
      mutateAPI={(values) => ({
        ...omit(values, 'tos'),
        country: values.country.value,
        languages: values.languages.map(({ value }) => value),
        password: hash(values.password),
      })}
      onSubmit={props.setDidSubmitForm}
      routeAPI='/api/auth/register'
      theme='dark'
      validationSchema={createValidationSchema(t)}
    >
      {({ isSubmitting }) => (
        <>
          <Label
            name='role'
            label={t('auth', 'register', 'role-title')}
            className='font-bold text-white'
          >
            <p className='text-sm text-indigo-100'>
              {t('auth', 'register', 'role-description')}
            </p>
            <Field name='role'>
              {({ field }: FieldProps) => (
                <div className='text-indigo-100'>
                  <UserRoleInput {...field} />
                </div>
              )}
            </Field>
          </Label>

          <Label
            name='name'
            label={t('auth', 'register', 'name-title')}
            className='font-bold text-white'
          >
            <p className='mb-3 text-sm text-indigo-100'>
              {t('auth', 'register', 'name-description')}
            </p>
            <Input
              name='name'
              type='text'
              placeholder={t('auth', 'register', 'name-placeholder')}
            />
          </Label>

          <Label
            name='email'
            label={t('auth', 'register', 'email-title')}
            className='font-bold text-white'
          >
            <p className='mb-3 text-sm text-indigo-100'>
              {t('auth', 'register', 'email-description')}
            </p>
            <Input
              name='email'
              type='text'
              placeholder={t('auth', 'register', 'email-placeholder')}
            />
          </Label>

          <Label
            name='password'
            label={t('auth', 'register', 'password-title')}
            className='font-bold text-white'
          >
            <p className='mb-3 text-sm text-indigo-100'>
              {t('auth', 'register', 'password-description')}
            </p>
            <Input
              name='password'
              type='password'
              placeholder={t('auth', 'register', 'password-placeholder')}
            />
          </Label>

          <Label
            name='country'
            label={t('auth', 'register', 'country-title')}
            className='font-bold text-white'
            extractError={({ value }) => value}
          >
            <p className='mb-3 text-sm text-indigo-100'>
              {t('auth', 'register', 'country-description')}
            </p>
            <Field name='country'>
              {({ field, form, meta }: FieldProps) => (
                <Select
                  placeholder={t('auth', 'register', 'country-placeholder')}
                  options={props.countries}
                  field={field}
                  form={form}
                  meta={meta}
                />
              )}
            </Field>
          </Label>

          <Label
            name='languages'
            label={t('auth', 'register', 'language-title')}
            className='font-bold text-white'
          >
            <p className='mb-3 text-sm text-indigo-100'>
              {t('auth', 'register', 'language-description')}
            </p>
            <Field name='languages'>
              {({ field, form, meta }: FieldProps) => (
                <Select
                  placeholder={t('auth', 'register', 'language-placeholder')}
                  options={props.languages}
                  isMulti
                  field={field}
                  form={form}
                  meta={meta}
                />
              )}
            </Field>
          </Label>

          <AcceptTerms name='tos' />

          <Submit
            isSubmitting={isSubmitting}
            text={t('auth', 'register', 'cta')}
          />
        </>
      )}
    </Form>
  )
}

export default RegisterForm
