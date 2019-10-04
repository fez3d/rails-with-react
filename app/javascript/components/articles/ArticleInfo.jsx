import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {infoArticle, removeArticle} from "../../src/actions/actions"

class ArticleInfo extends Component {
  constructor(props) {
    super(props);
    //this.state = { article: {} };
    this.handleDelete = this.handleDelete.bind(this);
    props.showArticle(props.match.params.id);
  }

  componentDidMount() {
    console.log("componentWillMount, articleInfo", this.props.match.params.id);
  }

  handleDelete() {
    this.props.deleteArticle(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.article[0].id}: {this.props.article[0].title}</h2>
        <p>{this.props.article[0].content}</p>
        <p>
          <Link to={`/articles/${this.props.article[0].id}/edit`} className="btn btn-outline-dark">Edit</Link> 
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
    article: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps, articlInfo");
  return {
    showArticle: (id) => dispatch(infoArticle(id)),
    deleteArticle: (id) => dispatch(removeArticle(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleInfo);