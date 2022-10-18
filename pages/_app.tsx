import '../styles/globals.css';
import SiteNavigation from '@components/SideNavigation';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Provider, SSRProvider, defaultTheme, Grid, View } from '@adobe/react-spectrum';
import { SpTheme } from '@swc-nextjs/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="/typekit.js" />
      <SpTheme theme="spectrum" color="light" scale="medium">
        <SSRProvider>
          <Provider theme={defaultTheme}>
            <Grid
              areas={['sidebar content', 'footer  footer']}
              columns={['2fr', '10fr']}
              rows={['auto', 'size-1000']}
              height="auto"
              gap="size-10"
            >
              <View gridArea="sidebar">
                <SiteNavigation />
              </View>
              <View backgroundColor="gray-50" gridArea="content" paddingStart="size-500" paddingEnd="size-500">
                <Component {...pageProps} />
              </View>
              <View backgroundColor="magenta-600" gridArea="footer" />
            </Grid>
          </Provider>
        </SSRProvider>
      </SpTheme>
    </>
  );
}

export default MyApp;
