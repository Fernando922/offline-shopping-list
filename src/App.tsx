import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './theme';
import codePush from 'react-native-code-push';
import * as Sentry from '@sentry/react-native';
import { SENTRY_KEY } from '@env';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

let App = () => {
  useEffect(() => {
    Sentry.init({
      dsn: SENTRY_KEY,
      tracesSampleRate: 1.0,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

App = codePush(codePushOptions)(App);

export default Sentry.wrap(App);
