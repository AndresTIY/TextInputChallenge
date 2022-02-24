import * as T from '../types/actionTypes';

export const setFirstName = (firstName: string) => ({
  type: T.SET_FIRST_NAME,
  payload: firstName,
});

export const setLastName = (lastName: string) => ({
  type: T.SET_LAST_NAME,
  payload: lastName,
});

export const setZipCode = (zip: string) => ({
  type: T.SET_ZIP_CODE,
  payload: zip,
});
