import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleInfo extends Component {
  constructor() {
    super();
    this.state = { article: {} };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    fetch(`api/articles/${this.props.match.params.id}`)
      .then(response => response.json())  
      .then(data => {
          // Acá asignar el data al state
          this.setState({article: data});
      })
      .catch(error => console.log('error', error)
    );
  }

  handleDelete() {
    // Acá poner la petición a eliminar y si es exitoso redirigir a ver todos los artículos. Para eliminar es DELETE
    fetch(`api/articles/${this.props.match.params.id}`, {method: 'DELETE'})
      .then(this.props.history.push(`/articles`)
    );
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

export default ArticleInfo;