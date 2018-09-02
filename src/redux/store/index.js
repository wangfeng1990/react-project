import { createStore,combineReducers,applyMiddleware } from 'redux';
import * as reducer from '../reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = () => createStore(combineReducers(reducer), composeWithDevTools());

export default configureStore;