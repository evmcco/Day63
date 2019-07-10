import { ACTION_SET_NAME } from "./actionTypes";

export const setName = name => {
  return {
    type: ACTION_SET_NAME,
    payload: {
      name
    }
  };
};
