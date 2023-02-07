import '../styles/globals.css';
import SiteNavigation from '@components/SideNavigation';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Provider, SSRProvider, defaultTheme, Grid, View } from '@adobe/react-spectrum';
import { SpTheme } from '@utils/theme';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const isDarkTheme = useThemeDetector();
  return (
    <>
      <Script src="/typekit.js" />
      <SpTheme theme="spectrum" color={isDarkTheme ? 'dark' : 'light'} scale="medium">
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

const useThemeDetector = () => {
  const getCurrentTheme = () =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e: { matches: boolean | ((prevState: boolean) => boolean) }) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);
    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);
  return isDarkTheme;
};

export default MyApp;
