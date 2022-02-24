import React from 'react';

import {render} from '@testing-library/react-native';

import StoreWrapper from '../testUtils/StoreWrapper';
import {useAppDispatch} from '../utils/hooks';
import {setZipCode, setFirstName, setLastName} from '../store/actions/action';
import {Provider} from 'react-redux';
import store from '../store/store';

const DispatchedComponent = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setFirstName('John'));
    dispatch(setLastName('Smith'));
    dispatch(setZipCode('75216'));
  }, [dispatch]);

  return <StoreWrapper routeName="DisplayScreen" />;
};

test('Display Screen', async () => {
  const {getByText} = render(
    <Provider store={store}>
      <DispatchedComponent />
    </Provider>,
  );

  const firstName = getByText('John');
  const lastName = getByText('Smith');
  const zipCode = getByText('75216');

  expect(firstName).toBeTruthy();
  expect(lastName).toBeTruthy();
  expect(zipCode).toBeTruthy();
});
