import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  ALL_ARTICLES,
  EDIT_ARTICLE,
  INFO_ARTICLE
} from "../constants/actionTypes";

function rootReducer(state = [], action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return {};

    case REMOVE_ARTICLE:
      return {};

    case ALL_ARTICLES:
      return;

    case EDIT_ARTICLE:
      return;

    case INFO_ARTICLE:
      return;

    default:
      return state;
  }
}

export default rootReducer;