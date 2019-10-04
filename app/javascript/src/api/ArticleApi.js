class ArticleApi {
  static getAllArticles() {
    return fetch("api/articles").then(response => {
      return response.json();
    });
  }

  static getArticle(id) {
    return fetch(`api/articles/${id}`).then(response => {
      return response.json();
    });
  }

  static deleteArticle(id) {
    return fetch(`api/articles/${id}`, { method: "DELETE" });
  }
}

export default ArticleApi;
