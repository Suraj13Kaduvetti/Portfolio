import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["C++", "C", "Python", "Java", "JavaScript", "PHP"],
    },
    {
      category: "Web Technologies",
      skills: [
        "ReactJs",
        "Tailwind",
        "Laravel",
        "Django",
        "Angular",
        "Express",
      ],
    },
    {
      category: "Tools",
      skills: ["Excel", "PowerPoint", "VS Code", "Xampp", "Postman", "MongoCompass"],
    },
    {
      category: "Soft Skills",
      skills: [
        "Communication",
        "Problem Solving",
        "Adaptability",
        "Creativity",
        "Attention to Details",
        "Time Management",
      ],
    },
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skillsData.map((item, index) => (
          <div key={index} className="skills-category">
            <h3>{item.category}</h3>
            <ul>
              {item.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
