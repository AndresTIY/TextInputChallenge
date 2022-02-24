import React from 'react';
import {Provider} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import store from '../store/store';
import {DisplayScreen, NameScreen, ZipScreen} from '../screens';

interface Props {
  routeName: string;
}

const Stack = createNativeStackNavigator();

const StoreWrapper: React.FC<Props> = ({routeName}) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={routeName}>
          <Stack.Screen name="NameScreen" component={NameScreen} />
          <Stack.Screen name="ZipScreen" component={ZipScreen} />
          <Stack.Screen name="DisplayScreen" component={DisplayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default StoreWrapper;
