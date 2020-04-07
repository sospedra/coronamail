import React, { useEffect } from 'react'
import { init } from 'pell'
import Head from 'next/head'
import purify from 'dompurify'
import ReaderStyles from 'components/coronamail/ReaderStyles'

const Editor: React.FC<{ setContent: (content: string) => void }> = (props) => {
  useEffect(() => {
    init({
      element: document.getElementById('js-coronamail-editor') as HTMLElement,
      onChange: (html: string) => props.setContent(purify.sanitize(html)),
      actions: [
        'bold',
        'underline',
        'italic',
        'heading1',
        'heading2',
        'quote',
        'ulist',
        'link',
        {
          name: 'clear',
          title: 'Clear format',
          icon: '<span>&#xd7</span>',
          result: () => {
            document.execCommand('formatBlock', false, 'div')
            document.execCommand('removeFormat')
          },
        },
      ],
    })
  }, [])

  return (
    <div className='flex flex-col flex-1 md:pb-8'>
      <ReaderStyles />
      <Head>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://unpkg.com/pell/dist/pell.min.css'
        />
      </Head>

      <div id='js-coronamail-editor' className='pell viewer' />
    </div>
  )
}

export default Editor
