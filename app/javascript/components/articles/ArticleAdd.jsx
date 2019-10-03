import React, { Component } from "react";
import Form from "../Form";
import{addArticle} from "../../src/actions/actions"
import { connect } from 'react-redux';

class ArticleAdd extends Component {
  constructor() {
    super();
    this.state = { title: "", content: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleSubmit(event) {
    /*event.preventDefault();
    fetch("api/articles", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(data => {
        this.props.history.push(`/articles/${data.id}`);
      })
      .catch(error => console.log("error", error));*/
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCancel() {
    this.props.history.push("/articles");
  }

  handleOnClick(title, content) {
    this.props.createArticle(title, content);
    console.log("handleOnClick linea 40, ArticleAdd");
  }

  render() {
    const formInfo = {
      title: "Create Article Post",
      button: "Create",
      handleSubmit: this.handleSubmit,
      handleCancel: this.handleCancel,
      handleChange: this.handleChange,
      handleOnClick: this.handleOnClick,
      postTitle: this.state.title,
      postContent: this.state.content
    };
    
    return (
      <div>
        <Form info={formInfo} />
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
    createArticle: (title, content) => dispatch(addArticle(title, content))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAdd);


