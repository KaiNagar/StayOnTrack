import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { ingredientReducer } from './reducers/ingredientReducer';
import { mealReducer } from './reducers/mealReducer';
import { userReducer } from './reducers/userReducer';
// import { reviewReducer } from './reducers/reviewReducer';
// import { wineReducer } from './reducers/wineReducer';
// import { wineryReducer } from './reducers/wineryReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  userModule: userReducer,
  ingredientModule: ingredientReducer,
  mealModule: mealReducer
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

window.store = store;

// meal actions
// meal reducer
// shopping cart