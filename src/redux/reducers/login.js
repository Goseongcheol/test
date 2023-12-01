import { ActionTypes } from "./../action/actionTypes";

const initialState = {
  userInfo: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        userInfo: action.payload,
      };

    case "LOGIN_FAIL":
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
