import { SET_PROFILE } from "../store/actions";

const initialState = {
  userName: "",
  password: "",
  posts:[],
};

function profile(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}

export default profile;
