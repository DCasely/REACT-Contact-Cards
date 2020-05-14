import React from 'react';

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>

          <img className="circle-img" src={props.src} alt={props.name} />
        </div>
        <div className="bottom info">
          <h3>{props.title}</h3>
          <a href={props.linkedInURL} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={props.twitterURL} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={props.facebookURL} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  name: 'Default Prop',
  title: 'CEO of The Casely Group',
  src: './images/profilepic.jpg',
  linkedInURL: 'https://www.linkedin.com/in/davincasely/',
  twitterURL: 'https://twitter.com/davincasely',
  facebookURL: 'https://www.facebook.com/davin.casely/',
};
