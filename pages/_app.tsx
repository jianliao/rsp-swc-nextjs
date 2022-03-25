import '../styles/globals.css';
import SiteNavigation from '../components/SideNavigation';

import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Provider, SSRProvider, defaultTheme, Grid, View } from '@adobe/react-spectrum';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="/typekit.js" />
      <SSRProvider>
        <Provider theme={defaultTheme}>
          <Grid
            areas={['sidebar content', 'footer  footer']}
            columns={['2fr', '10fr']}
            rows={['auto', 'size-1000']}
            height='auto'
            gap='size-10'>
            <View gridArea='sidebar'>
              <SiteNavigation />
            </View>
            <View backgroundColor='static-white' gridArea='content' paddingStart='size-500' paddingEnd='size-500'>
              <Component {...pageProps} />
            </View>
            <View backgroundColor='magenta-600' gridArea='footer' />
          </Grid>
        </Provider>
      </SSRProvider>
    </>
  )
}

export default MyApp;
