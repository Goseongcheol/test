import { ActionTypes } from "./../action/actionTypes";

const initialState = {
  userInfo: null,
  isLoading: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        payload: action.payload,
      };

    case "LOGIN_FAIL":
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
