import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root.reducer';

// configure middlewares
const middlewares = [thunk];
const enhancer = compose(applyMiddleware(...middlewares));

// initializing state
const initialState = {
};

// configure store
const store = createStore(rootReducer(), initialState, enhancer);

// export store for app
export default store;
