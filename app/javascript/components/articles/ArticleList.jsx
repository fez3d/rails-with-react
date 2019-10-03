import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {loadArticles} from "../../src/actions/actions"

class ArticleList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.listArticles(); 
  }
  
  render() { 
    return (
      <div>
        {this.props.articles.map((article) => {          
          return(
            <div key={article.id}>
              <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
              {article.content}
              <hr/>
            </div>
          )
        })}
        <Link to="/articles/new" className="btn btn-outline-primary">Create Article</Link> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    listArticles: () => dispatch(loadArticles())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);