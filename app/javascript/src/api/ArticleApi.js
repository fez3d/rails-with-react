class ArticleApi {
  static getAllArticles() {
    console.log("articleAPI, getAllArticles");
    return fetch("api/articles")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static getArticle(id){
    console.log("articleAPI, getArticle" + id);
    fetch(`api/articles/${id}`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
  }
}

export default ArticleApi;
