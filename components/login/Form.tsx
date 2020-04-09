import React from 'react'
import { toString } from 'lodash'
import { string as yupString, object as yupObject } from 'yup'
import { Translator, useTranslation } from 'services/i18n'
import { hash } from 'services/crypto'
import { Input, Submit, Label, Form } from 'components/coronamail/Form'
import { useRouter } from 'next/router'
import { setAuthCookie } from 'services/auth/protect'

const createValidationSchema = (t: Translator) => {
  return yupObject().shape({
    email: yupString()
      .email(t('auth', 'error', 'email'))
      .required(t('auth', 'error', 'required')),
    password: yupString().required(t('auth', 'error', 'required')),
  })
}

const LoginForm: React.FC<{
  needsVerification: boolean
}> = (props) => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <Form
      initialValues={{ email: toString(router.query.email), password: '' }}
      validationSchema={createValidationSchema(t)}
      routeAPI='/api/auth/login'
      onSubmit={(payload) => {
        setAuthCookie(payload.data.authToken)
        router.replace(
          props.needsVerification ? '/app?onboarding=1' : '/app',
          '/app',
        )
      }}
      mutateAPI={(values) => ({
        ...values,
        password: hash(values.password),
        now: new Date().toString(),
      })}
    >
      {({ isSubmitting }) => (
        <>
          <Label
            name='email'
            label={t('auth', 'login', 'email')}
            className='text-sm font-bold text-gray-700'
          >
            <Input
              name='email'
              type='email'
              placeholder={t('auth', 'login', 'placeholder')}
            />
          </Label>

          <Label
            name='password'
            label={t('auth', 'login', 'password')}
            className='text-sm font-bold text-gray-700'
          >
            <Input name='password' type='password' placeholder={'********'} />
          </Label>

          <Submit
            isSubmitting={isSubmitting}
            text={t('auth', 'login', 'cta')}
          />
        </>
      )}
    </Form>
  )
}

export default LoginForm
