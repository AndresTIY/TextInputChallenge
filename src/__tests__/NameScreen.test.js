import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';

import StoreWrapper from '../testUtils/StoreWrapper';
import {useNavigation} from '@react-navigation/native';

test('Name Screen', async () => {
  const {getByPlaceholderText, getByText} = render(
    <StoreWrapper routeName="NameScreen" />,
  );

  const firstInput = getByPlaceholderText('First Name');
  const lastInput = getByPlaceholderText('Last Name');

  expect(firstInput.props.value).toEqual('');
  expect(lastInput.props.value).toEqual('');

  fireEvent(firstInput, 'onChangeText', 'John');

  const afterFirstChangeInput = getByPlaceholderText('First Name');

  expect(afterFirstChangeInput.props.value).toEqual('John');

  fireEvent(lastInput, 'onChangeText', 'Smith');

  const afterLastChangeInput = getByPlaceholderText('Last Name');

  expect(afterLastChangeInput.props.value).toEqual('Smith');

  const navButton = getByText('Next');

  fireEvent.press(navButton);

  const {navigate} = useNavigation();

  expect(navigate).toBeCalledWith('ZipScreen');
});
