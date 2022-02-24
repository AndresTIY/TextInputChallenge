import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';

import StoreWrapper from '../testUtils/StoreWrapper';

import {useNavigation} from '@react-navigation/native';

test('Zip Screen', async () => {
  const {getByPlaceholderText, getByText} = render(
    <StoreWrapper routeName="ZipScreen" />,
  );

  const zipInput = getByPlaceholderText('ZipCode');

  expect(zipInput.props.value).toEqual('');

  fireEvent(zipInput, 'onChangeText', '75216');

  const afterFirstChangeInput = getByPlaceholderText('ZipCode');

  expect(afterFirstChangeInput.props.value).toEqual('75216');

  const navButton = getByText('Next');

  fireEvent.press(navButton);

  const {navigate} = useNavigation();

  expect(navigate).toBeCalled();
});
