import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: "Inventory Management System (IMS)",
      languages: "Python, SQLite",
      tools: "VS Code, Python IDLE",
      description:
        "A dynamic multi-platform software to manage the inventory, adaptable to the nature of the organization's management.",
    },
    {
      name: "Chemistry Laboratory Management System (CLMS)",
      languages: "Python, Java, C++, MySQL",
      tools: "VS Code, Python IDLE",
      description:
        "A highly maintained management system for chemistry laboratories, managing experiments and specialized materials.",
    },
    {
      name: "Chemistry Lab Simulator",
      languages: "C#, Java, C++, SQL",
      tools: "VS Code, VS Studio",
      description:
        "A simulator for all platforms, offering an extraordinary virtual experience for conducting chemistry experiments.",
    },
    {
      name: "Homework Management System",
      languages: "PHP (Laravel), HTML, CSS, JavaScript, MySQL",
      tools: "VS Code, Xampp, Postman",
      description:
        "A project for generating question papers based on inputs like board, marks, and number of questions, built for a real customer.",
    },
    {
      name: "E-Commerce Website",
      languages:
        "ReactJs, Tailwind CSS, HTML, CSS, JavaScript, MongoDB, Express, Angular, NextJS",
      tools: "VS Code, Postman, MongoDB Compass, Node.js",
      description:
        "An e-commerce website for a grocery store entering the online market, featuring modern web technologies.",
    },
    {
      name: "Portfolio Page",
      languages: "HTML, CSS, JavaScript, ReactJS, Express",
      tools: "VS Code, Postman",
      description:
        "A portfolio page demonstrating modern React features and modules.",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.name}</h3>
            <p><strong>Languages:</strong> {project.languages}</p>
            <p><strong>Tools:</strong> {project.tools}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
