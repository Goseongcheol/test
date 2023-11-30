import { useState } from "react";
import { ActionTypes } from "./../action/actionTypes";

const initialcount = {
  count: 0,
};
const countReducer = (state = initialcount, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.increaseNumber:
      return {
        payload: state.count + 1,
      };
    default:
      return state;
  }
};

export default countReducer;
