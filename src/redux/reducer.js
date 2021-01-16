import { combineReducers } from "redux";
import * as actions from "./actionTypes";
import { produce } from "immer";

const initState = {
  conversations: [],
  messages: [["nishavak", "hey"]],
  uid: {
    name: "nishavak",
  },
};

// const chatReducer = (state = initState, action) => {
//   const { type, payload } = action;
//   const {message, by} = payload;
//   if (type === actions.ADD_MESSAGE) {
//     return {
//       ...state,
//       messages: [

//       ],
//     };
//   }
//   return state;
// };

const chatReducer = produce((state, action) => {
  const { type, payload } = action;

  if (type == actions.ADD_MESSAGE) {
    state.messages.push([payload.by, payload.message]);
  }
}, initState);

const rootReducer = combineReducers({ chatReducer });

export default rootReducer;
