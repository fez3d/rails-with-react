import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  ALL_ARTICLES,
  EDIT_ARTICLE,
  INFO_ARTICLE,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLE_SUCCESS
} from "./actionTypes";
import ArticleApi from "../api/ArticleApi.js";

export function addArticle(title, content) {
  return {
    type: ADD_ARTICLE,
    title: title,
    content: content
  };
}

export function removeArticle(id) {
  return function(dispatch) {
    return ArticleApi.deleteArticle(id)
      .then(() => {
        dispatch(removeArticleSuccess());
      })
      .catch(error => {
        throw error;
      });
  };
}

function removeArticleSuccess(article) {
  console.log("actions, loadArticlesSuccess");
  return { type: REMOVE_ARTICLE };
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
  return function(dispatch) {
    return ArticleApi.getArticle(id)
      .then(article => {
        dispatch(loadArticleSuccess(article));
      })
      .catch(error => {
        throw error;
      });
  };
}

function loadArticleSuccess(article) {
  console.log("actions, loadArticlesSuccess");
  return { type: LOAD_ARTICLE_SUCCESS, article };
}

export function loadArticles() {
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
