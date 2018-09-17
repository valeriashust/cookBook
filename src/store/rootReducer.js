import { combineReducers } from 'redux';
import users from "../reducers/users";
import profile from "../reducers/profile";

const appReducer = combineReducers({
  users,
  profile,
});

const rootReducer = ( state, action ) => {
  if ( action.type === "LOG_OUT" ) {
    state = undefined;
  }
  return appReducer(state, action)
};

export default rootReducer;
