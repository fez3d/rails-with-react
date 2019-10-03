import React from 'react';
import styled from 'styled-components';

function Form(props) {
  const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
  return (
    <div>
      <h1>{props.info.title}</h1>
      <form onSubmit={props.info.handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" value={props.info.postTitle} onChange={props.info.handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea name="content" rows="5" value={props.info.postContent} onChange={props.info.handleChange} className="form-control" />
        </div>
        <div className="btn-group">
          <button type="submit" onClick={props.info.handleOnClick(props.info.postTitle, props.info.postContent )} className="btn btn-dark">{props.info.button}</button>
          <button type="button" onClick={props.info.handleCancel} className="btn btn-secondary">Cancel</button>
          <Button>I am a Button</Button>
        </div>
      </form>
    </div>
  )
}

export default Form;