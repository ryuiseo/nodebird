import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

//reducer : (이전상태, 액션) => 다음상태
// const rootReducer = combineReducers({
//   index: (state = {}, action) => {
//     switch (action.type) {
//       case HYDRATE:
//         return { ...state, ...action.payload };

//       default:
//         return state;
//     }
//   },
//   user,
//   post,
// });

//serversiderendering하면서 바꿔준 형태
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user,
        post,
      });
      return combinedReducer(state, action);
    }
  }
};
export default rootReducer;
