import { ActionTypes } from "./../action/actionTypes";

const initialCount = {
  count: 0,
};
const countReducer = (state = initialCount, action) => {
  switch (action.type) {
    case "INCREASE_NUMBER":
      return {
        ...state,
        count: action.payload,
      };
    case "DECREASE_NUMBER":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export default countReducer;
