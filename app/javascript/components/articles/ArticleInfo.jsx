import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {infoArticle} from "../../src/actions/actions"

class ArticleInfo extends Component {
  constructor() {
    super();
    this.state = { article: {} };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    console.log("componentWillMount, articleInfo");
    this.props.showInfo(1);
  }

  handleDelete() {
    
  }

  render() {
    return (
      <div>
        <h2>{this.state.article.id}: {this.state.article.title}</h2>
        <p>{this.state.article.content}</p>
        <p>
          <Link to={`/articles/${this.state.article.id}/edit`} className="btn btn-outline-dark">Edit</Link> 
          <button onClick={this.handleDelete} className="btn btn-outline-dark">Delete</button> 
          <Link to="/articles" className="btn btn-outline-dark">Close</Link>
        </p>
        <hr/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps, articleInfo");
  return {
    articles: state.article
  };
}

function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps, articlInfo");
  return {
    showInfo: (id) => dispatch(infoArticle(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleInfo);