import React from 'react';
import './Hobbies.css';

const Hobbies = () => {
  const hobbies = [
    "Playing Sports",
    "Exploring Technology",
    "Coding",
    "Learning New Skills",
  ];

  return (
    <section className="hobbies">
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
};

export default Hobbies;
