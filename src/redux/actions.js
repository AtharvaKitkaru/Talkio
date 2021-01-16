import * as actions from "./actionTypes";

export const addWord = (message, by) => ({
  type: actions.ADD_MESSAGE,
  payload: {
    message: message,
    by: by,
  },
});
