import React, { useState } from 'react'
import ReactJoyride, { Step, CallBackProps } from 'react-joyride'
import {
  useStorage,
  STORE_KEY_ONBOARDING,
  createStorage,
} from 'services/storage'
import { useTranslation } from 'services/i18n'
import { styles } from 'services/styles'

const Tour: React.FC<{
  callback?: (data: CallBackProps) => void
  endOnFinish?: boolean
  lastMessage?: string
  steps: Array<Step>
}> = (props) => {
  const { t } = useTranslation()
  const [isTourRunning, setIsTourRunning] = useState(false)

  useStorage((storage) => {
    setIsTourRunning(storage.getItem(STORE_KEY_ONBOARDING) === 'true')
  })

  if (!isTourRunning) return null

  return (
    <ReactJoyride
      callback={(data) => {
        if (data.action === 'close' || data.action === 'skip') {
          setIsTourRunning(false)
          createStorage().removeItem(STORE_KEY_ONBOARDING)
        }

        if (props.endOnFinish && data.status === 'finished') {
          createStorage().removeItem(STORE_KEY_ONBOARDING)
        }

        props.callback && props.callback(data)
      }}
      continuous
      disableCloseOnEsc
      showSkipButton
      run={isTourRunning}
      steps={props.steps}
      locale={{
        back: t('common', 'tour', 'back'),
        close: t('common', 'tour', 'close'),
        last: props.lastMessage || t('common', 'tour', 'last'),
        next: t('common', 'tour', 'next'),
        skip: t('common', 'tour', 'skip'),
      }}
      styles={{
        spotlight: {
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        },
        tooltip: {
          fontSize: styles.theme.fontSize.base,
          borderRadius: styles.theme.borderRadius.default,
          padding: styles.theme.spacing[2],
        },
        tooltipContent: {
          padding: styles.theme.spacing[4],
        },
        tooltipFooter: {
          marginTop: 0,
        },
        buttonClose: {
          height: 0,
          display: 'none',
          width: 0,
        },
        buttonNext: {
          borderRadius: styles.theme.borderRadius.default,
          boxShadow: styles.theme.boxShadow.md,
          backgroundColor: styles.theme.colors.red[500],
        },
        buttonBack: {
          color: styles.theme.colors.red[500],
        },
        options: {
          arrowColor: 'white',
          backgroundColor: 'white',
          beaconSize: styles.theme.spacing[10],
          overlayColor: 'rgba(0, 0, 0, 0.60)',
          primaryColor: styles.theme.colors.indigo[500],
          textColor: styles.theme.colors.gray[900],
          width: undefined,
          zIndex: 100,
        },
      }}
    />
  )
}

export default Tour
