import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useTranslation } from 'services/i18n'
import { protect } from 'services/auth/protect'
import { createClient, queryUser, User, Mail } from 'services/db'
import Shell from 'components/coronamail/Shell'
import Alert from 'components/coronamail/Alert'
import Section from './Section'
import Inbox from './Inbox'
import Outbox from './Outbox'
import Settings from './Settings'

type Props = {
  token: string
  user: User
  mails: { id: string; data: Mail }[]
  inbox: { id: string; data: Mail }[]
}

const App: NextPage<Props> = (props) => {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <Shell
      title={t('app', 'seo-title')}
      description={t('app', 'seo-description')}
    >
      <div className='flex flex-col flex-grow w-full max-w-4xl px-4 mx-auto md:px-8 xl:px-0 md:-mt-8'>
        <Alert
          message={t('app', 'banner', 'send-message')}
          isVisible={router.query.s === '1'}
          title={t('app', 'banner', 'send-title')}
          mode='info'
          className='w-full mx-auto mb-4 md:w-1/2'
        />
        {['sick', 'assistat'].includes(props.user.role) && (
          <Section title={t('app', 'inbox-title')}>
            <Inbox mails={props.inbox} />
          </Section>
        )}

        <Section title={t('app', 'outbox-title')}>
          <Outbox mails={props.mails} />
        </Section>

        <Section title={t('app', 'settings', 'title')} sm>
          <Settings user={props.user} token={props.token} />
        </Section>
      </div>
    </Shell>
  )
}

App.getInitialProps = async (ctx) => {
  const token = protect(ctx)

  if (!token) return {} as Props

  const db = createClient(token)
  const user = await queryUser(db)

  return { token, ...user }
}

export default App
