import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './screens/routes';
import stores from './redux/stores';

const App = () => {
  return (
    <StoreProvider store={stores}>
      <PaperProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
