import { combineReducers } from "redux";
import articlesReducer from '../reducers/articles';

const reducers = combineReducers({
  articles: articlesReducer
});

export default reducers;