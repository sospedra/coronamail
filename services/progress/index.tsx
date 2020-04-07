import nprogress from 'nprogress'
import { Router } from 'next/router'
import Head from 'next/head'

Router.events.on('routeChangeComplete', () => nprogress.done())
Router.events.on('routeChangeError', () => nprogress.done())
Router.events.on('routeChangeStart', () => nprogress.start())

export const Progress: React.FC<{}> = () => {
  return (
    <Head>
      <style jsx global>{`
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          @apply bg-red-500 z-50 fixed top-0 left-0 w-full;
          height: 1.5px;
        }

        #nprogress .peg {
          @apply block absolute right-0 opacity-100 h-full;
          width: 100px;
          box-shadow: 0 0 10px #f56565, 0 0 5px #f56565;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
        }
      `}</style>
    </Head>
  )
}
