import React from 'react';
// const classNames = require('classnames');

function Card(props) {
  const { previewURL, tags, largeImageURL, pageURL } = props;

  return (
    <div className="card">
      <img
        className="card-img-top img-responsive"
        src={previewURL}
        alt={tags}
        style={{ width: '100%', height: 'auto', backgroundSize: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{tags}</h5>
        <p className="card-text">{tags}</p>
        <a href={pageURL} rel="noreferrer" target="_blank" className="card-link ">
          Visite Page
        </a>
        <a href={largeImageURL} rel="noreferrer" target="_blank" className="card-link ">
          Open Image
        </a>
      </div>
    </div>
  );
}

export default Card;
