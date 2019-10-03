import React, { Component } from 'react';
import Form from "../Form";

class ArticleEdit extends Component {
  constructor() {
    super();
    this.state = { title: '', content: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    /*fetch(`api/articles/${this.props.match.params.id}`)
      .then(response => response.json())  
      .then(data => {
          // Acá asignar el data al state
          this.setState(data);
      });*/
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`api/articles/${this.props.match.params.id}`, {
        method: 'PUT',
        body: JSON.stringify(this.state),     
        headers: {'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(data => {
        this.props.history.push(`/articles/${data.id}`);
      })
      .catch(error => console.log('error', error)
    );
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCancel() {
    this.props.history.push("/articles");
  }

  render() {
    const formInfo = {
      title: "Edit Article Post",
      button: "Edit",
      handleSubmit: this.handleSubmit,
      handleCancel: this.handleCancel,
      handleChange: this.handleChange,
      postTitle: this.state.title,
      postContent: this.state.content
    };

    const settings = {
      
    }

    return (
      <div>
        <Form info={formInfo} />
      </div>
    );
  }
}


export default ArticleEdit;