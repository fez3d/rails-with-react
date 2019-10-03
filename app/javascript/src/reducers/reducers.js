import { combineReducers } from "redux";
import articles from '../reducers/articles';

const reducers = combineReducers({
  articles
});

export default reducers;