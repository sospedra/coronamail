import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useTranslation, Translator } from 'services/i18n'
import { protect } from 'services/auth/protect'
import { createClient, queryUser, User, Mail } from 'services/db'
import Shell from 'components/coronamail/Shell'
import Alert from 'components/coronamail/Alert'
import Tour from 'components/coronamail/Tour'
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

const selectSteps = (t: Translator, doesUserHasInbox: boolean) => {
  let steps = [
    {
      content: t('app', 'tour', 'outbox'),
      target: '#outbox',
    },
    {
      content: t('app', 'tour', 'send-mail'),
      target: '#nav__create-mail',
    },
  ]

  if (doesUserHasInbox) {
    steps.unshift({
      content: t('app', 'tour', 'inbox'),
      target: '#inbox',
    })
  }

  return steps
}

const App: NextPage<Props> = (props) => {
  const router = useRouter()
  const { t } = useTranslation()
  const routerDidSendMail = router.query.s === '1'
  const doesUserHasInbox = ['sick', 'assistat'].includes(props.user.role)

  return (
    <Shell
      title={t('app', 'seo-title')}
      description={t('app', 'seo-description')}
    >
      <Tour
        lastMessage='Escribir una carta'
        steps={selectSteps(t, doesUserHasInbox)}
        callback={({ status }) => {
          if (status === 'finished') {
            router.push('/app/editor')
          }
        }}
      />
      <div className='flex flex-col flex-grow w-full max-w-4xl px-4 mx-auto md:px-8 xl:px-0 md:-mt-8'>
        <Alert
          message={t('app', 'banner', 'send-message')}
          isVisible={routerDidSendMail}
          title={t('app', 'banner', 'send-title')}
          mode='info'
          className='w-full mx-auto mb-4 md:w-1/2'
        />

        {doesUserHasInbox && (
          <Section title={t('app', 'inbox-title')} id='inbox'>
            <Inbox mails={[]} />
          </Section>
        )}

        <Section title={t('app', 'outbox-title')} id='outbox'>
          <Outbox mails={[]} />
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
