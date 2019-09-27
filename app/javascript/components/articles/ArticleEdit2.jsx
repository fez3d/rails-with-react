import React, { useState, useEffect } from 'react';

function ArticleEdit2() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`api/articles/${this.props.match.params.id}`)
      .then(response => response.json())  
      .then(data => {
          // Acá asignar el data al state
          this.setTitle(data.title);
      });
  });
}