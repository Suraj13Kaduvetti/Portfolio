import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img
          src="https://via.placeholder.com/150"
          alt="Suraj Kaduvetti"
          className="profile-pic"
        />
        <h1>Suraj Kaduvetti</h1>
        <p>Computer Science Student</p>
      </div>
    </header>
  );
};

export default Header;
