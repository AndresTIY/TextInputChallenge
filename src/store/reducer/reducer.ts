// import {setDataIsLoading, setData, showError} from '../actions/actions';
import {setFirstName, setLastName, setZipCode} from '../actions/action';
import * as T from '../types/actionTypes';

interface iInitialState {
  firstName: string;
  lastName: string;
  zipCode: string;
}

const INITIAL_STATE: iInitialState = {
  firstName: '',
  lastName: '',
  zipCode: '',
};

type Action = ReturnType<
  typeof setFirstName | typeof setLastName | typeof setZipCode
>;

export const reducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case T.SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case T.SET_LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };
    case T.SET_ZIP_CODE:
      return {
        ...state,
        zipCode: action.payload,
      };

    default:
      return state;
  }
};
