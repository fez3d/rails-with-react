import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  ALL_ARTICLES,
  EDIT_ARTICLE,
  INFO_ARTICLE,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLE_SUCCESS
} from "../actions/actionTypes";

function articleReducer(state = [], action) {
  console.log("articleReducer, articles");
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, { title: action.title, content: action.content }];

    case REMOVE_ARTICLE:
      return {

      };

    case ALL_ARTICLES:
      return {

      };

    case EDIT_ARTICLE:
      return {

      };

    case INFO_ARTICLE:
      console.log("info_Article, en articles");
      return [...state, {article: action.payload}]

    case LOAD_ARTICLES_SUCCESS:
        return action.articles;

    case LOAD_ARTICLE_SUCCESS:
        return [action.article];

    default:
      return state;
  }
}

export default articleReducer;