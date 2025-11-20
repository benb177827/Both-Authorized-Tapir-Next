import './style.css'

import { GlobalProvider } from '../global-context'
import { NextIntlProvider } from 'next-intl'
import { SiteSettingsProvider } from '../site-settings-context'
export default function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps?.messages}>
      <GlobalProvider>
        <SiteSettingsProvider>
          <Component {...pageProps} />
        </SiteSettingsProvider>
      </GlobalProvider>
    </NextIntlProvider>
  )
}
