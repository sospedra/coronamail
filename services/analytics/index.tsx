import { GA_TRACKING_ID } from 'services/env'

export const view = (
  url = window.location.pathname,
  title = document.title,
) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
    page_title: title,
  })
}

export const track = (event: Gtag.EventNames, params?: Gtag.EventParams) => {
  window.gtag('event', event, params)
}

export const trackAction = (name: string, id: string) => {
  track('select_content', {
    content_id: id,
    content_type: name,
  })
}

export const trackView = (name: string, id: string) => {
  track('view_item', {
    items: [{ id, name }],
  })
}

export const trackLogin = (method: 'magic-link') => {
  track('login', { method })
}

export const initRouter = (url: string) => {
  setTimeout(() => view(url, document.title), 0)
}

export const AnalyticsTags = () => (
  <>
    <link rel='preconnect' href='https://www.google-analytics.com' />
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `,
      }}
    />
  </>
)
