import React from 'react';
import Card from './Card';
import contacts from '../contacts';

export default function App() {
  return (
    <div className="container">
      <h1 className="heading">
        <i class="fab fa-react"></i>
        REACT (Props & Mapping Components): Contact Cards
        <i class="fab fa-react"></i>
      </h1>
      {contacts.map((contact) => (
        <Card
          key={contact.id}
          name={contact.name}
          title={contact.title}
          src={contact.src}
          linkedInURL={contact.linkedInURL}
          twitterURL={contact.twitterURL}
          facebookURL={contact.facebookURL}
        />
      ))}
    </div>
  );
}
