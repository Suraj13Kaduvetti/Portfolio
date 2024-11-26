import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#header">Home</a></li>
        <li><a href="#summary">Summary</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#hobbies">Hobbies</a></li>
        <li><a href="#contact-info">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
