import React from 'react'
import { toString } from 'lodash'
import { string as yupString, object as yupObject } from 'yup'
import { useRouter } from 'next/router'
import { Translator, useTranslation } from 'services/i18n'
import { Input, Submit, Label, Form } from 'components/coronamail/Form'

const createValidationSchema = (t: Translator) => {
  return yupObject().shape({
    email: yupString()
      .email(t('auth', 'error', 'email'))
      .required(t('auth', 'error', 'required')),
  })
}

const RecoverForm: React.FC<{
  setDidSubmitForm: () => void
}> = (props) => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <Form
      initialValues={{ email: toString(router.query.email) }}
      validationSchema={createValidationSchema(t)}
      routeAPI='/api/auth/recover-request'
      onSubmit={props.setDidSubmitForm}
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

          <Submit
            isSubmitting={isSubmitting}
            text={t('auth', 'login', 'recover-form-cta')}
          />
        </>
      )}
    </Form>
  )
}

export default RecoverForm
