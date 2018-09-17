import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import persistState from 'redux-localstorage';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

import rootReducer from "./rootReducer";

const enhancer = compose(
    composeWithDevTools(applyMiddleware(thunk, logger)),
    persistState(/*paths, config*/),
);

export const store = createStore(rootReducer, enhancer);

export default store;
