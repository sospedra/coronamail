import { DefaultSeo } from 'next-seo'
import { HOST } from 'services/env'

export const DefaultSEO: React.FC<{ langIntCode: string }> = (props) => (
  <DefaultSeo
    titleTemplate={'%s | CoronaMail'}
    additionalMetaTags={[
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status', content: 'default' },
      { name: 'application-name', content: 'CoronaMail' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'msapplication-tap-highlight', content: 'noe' },
      { name: 'theme-color', content: '#fff' },
      { name: 'viewport', content: 'initial-scale=1.0, width=device-width' },
    ]}
    openGraph={{
      type: 'website',
      locale: props.langIntCode,
      url: HOST,
      site_name: 'CoronaMail',
      images: [
        {
          url: `${HOST}/images/coronamail-logo.png`,
          width: 520,
          height: 520,
          alt: 'CoronaMail Logo',
        },
      ],
    }}
    twitter={{
      handle: '@coronamail',
      site: '@coronamail',
      cardType: 'summary_large_image',
    }}
  />
)
