import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  ALL_ARTICLES,
  EDIT_ARTICLE,
  INFO_ARTICLE,
  LOAD_ARTICLES_SUCCESS
} from "../../constants/actionTypes";
import ArticleApi from "../api/ArticleApi";

export function addArticle(title, content) {
  return {
    type: ADD_ARTICLE,
    title: title,
    content: content
  };
}

export function removeArticle(id) {
  return {
    type: REMOVE_ARTICLE,
    id: id
  };
}

export function allArticles() {
  return {
    type: ALL_ARTICLES
  };
}

export function editArticle(id) {
  return {
    type: EDIT_ARTICLE,
    id: id
  };
}

export function infoArticle(id) {
  console.log("infoArticle, actions");
  return function(dispatch) {
    return ArticleApi.getArticle(id)
      .then(article => {
        dispatch(loadArticlesSuccess(article));
      })
      .catch(error => {
        throw error;
      });
  };










  /*return {
    type: INFO_ARTICLE,
    payload: response
  };*/
}

export function loadArticles() {
  console.log("actions, loadArticles");
  return function(dispatch) {
    return ArticleApi.getAllArticles()
      .then(articles => {
        dispatch(loadArticlesSuccess(articles));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadArticlesSuccess(articles) {
  console.log("actions, loadArticlesSuccess");
  return { type: LOAD_ARTICLES_SUCCESS, articles };
}
