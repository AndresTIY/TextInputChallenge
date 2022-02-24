/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import RootStack from './src/navigation/navigation';
import store from './src/store/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};

export default App;
