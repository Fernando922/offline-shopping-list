import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './theme';
import codePush from 'react-native-code-push';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

let App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

App = codePush(codePushOptions)(App);

export default App;
