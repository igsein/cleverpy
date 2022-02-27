import { createStore, combineReducers ,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
 
import postReducer from "../reducer/postsReducer";
import loginReducer from "../reducer/loginReducer"
import showReducer from "../reducer/showReducer"

const rootReducer = combineReducers({
  posts: postReducer,
  login: loginReducer, 
  show: showReducer
});

export type AppState = ReturnType<typeof rootReducer> 

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
