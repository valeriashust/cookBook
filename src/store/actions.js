import { createAction } from "redux-actions";

export const ADD_USER = "ADD_USER";
export const SET_PROFILE = "SET_PROFILE";
export const LOG_OUT = "LOG_OUT";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";
export const ADD_POST = "ADD_POST";

const addUser = createAction(ADD_USER);
const setProfile = createAction(SET_PROFILE);
const logOutAction = createAction(LOG_OUT);
const deleteAction = createAction(DELETE_POST);
const editAction = createAction(DELETE_POST);
const addPost = createAction(ADD_POST);

export function logOut() {
  return dispatch => {
    dispatch(logOutAction());
  };
}

export function deletePost(username, postIndex) {
  return (dispatch, getState) => {
    const state = getState();
    const userPosts = state.users.users.find(item => {
      return item.userName === username;
    }).posts;
    const newProfile = state.users.users.find(item => {
      return item.userName === username;
    });
    userPosts.splice(postIndex, 1);
    dispatch(deleteAction(state.users.users));
    dispatch(setProfile(newProfile));
  };
}

export function editPost(username, postIndex, newPost) {
  return (dispatch, getState) => {
    const state = getState();
    const userPosts = state.users.users.find(item => {
      return item.userName === username;
    }).posts;
    const newProfile = state.users.users.find(item => {
      return item.userName === username;
    });
    userPosts[postIndex] = newPost;
    dispatch(editAction(state.users.users));
    dispatch(setProfile(newProfile));
  };
}

export function addingPost(username, newPost) {
    return (dispatch, getState) => {
        const state = getState();
        const userPosts = state.users.users.find(item => {
            return item.userName === username;
        }).posts;
        const newProfile = state.users.users.find(item => {
            return item.userName === username;
        });
        userPosts.push(newPost);
        dispatch(addPost(state.users.users));
        dispatch(setProfile(newProfile));
    };
}

export function addingUser(newUser, history) {
  return (dispatch, getState) => {
    const state = getState();
    const isUserExist = state.users.users.find(item => {
      return item.userName === newUser.userName;
    });
    if (!isUserExist) {
      const newUsersList = [...state.users.users, newUser];
      dispatch(addUser(newUsersList));
      dispatch(setProfile(newUser));
      history.push("home");
    } else {
      if (isUserExist.password !== newUser.password) {
        alert("Wrong password!");
      } else {
        dispatch(setProfile(isUserExist));
        history.push("home");
      }
    }
  };
}
