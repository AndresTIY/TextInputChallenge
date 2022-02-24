import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {DisplayScreen, NameScreen, ZipScreen} from '../screens';

type RootStackParamList = {
  NameScreen: undefined;
  ZipScreen: undefined;
  DisplayScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="NameScreen">
      <Stack.Screen
        options={{headerTitle: 'Enter Your Name'}}
        name="NameScreen"
        component={NameScreen}
      />
      <Stack.Screen
        options={{headerTitle: 'Enter Your Zip Code'}}
        name="ZipScreen"
        component={ZipScreen}
      />
      <Stack.Screen
        options={{headerTitle: 'Your Information'}}
        name="DisplayScreen"
        component={DisplayScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

//props
type NameScreenProps = NativeStackScreenProps<RootStackParamList, 'NameScreen'>;
type ZipScreenProps = NativeStackScreenProps<RootStackParamList, 'ZipScreen'>;
type DisplayScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DisplayScreen'
>;
// navigation props
export type NameScreenNavigationProps = NameScreenProps['navigation'];
export type ZipScreenNavigationProps = ZipScreenProps['navigation'];
export type DisplayScreenNavigationProps = DisplayScreenProps['navigation'];

export default RootStack;
