import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { ingredientsReducer } from './reducers/ingredientsReducer';
import { userReducer } from './reducers/userReducer';
// import { reviewReducer } from './reducers/reviewReducer';
// import { wineReducer } from './reducers/wineReducer';
// import { wineryReducer } from './reducers/wineryReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  userModule: userReducer,
  ingredientsModule: ingredientsReducer
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

window.store = store;

// meal actions
// meal reducer
// shopping cart