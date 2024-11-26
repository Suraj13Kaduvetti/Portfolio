import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: "Mithibai College",
      degree: "Master of Science (Computer Science)",
      duration: "July 2024 – April 2026",
      location: "Mumbai, India",
    },
    {
      institution: "Rizvi College of Arts, Science, and Commerce",
      degree: "Bachelor of Science (Computer Science) | CGPA: 8.9",
      duration: "September 2021 – May 2024",
      location: "Mumbai, India",
    },
    {
      institution: "Mithibai College",
      degree: "Higher and Secondary School Certificate | 82.67%",
      duration: "August 2019 – September 2021",
      location: "Mumbai, India",
    },
    {
      institution: "St. Joseph’s High School (Juhu)",
      degree: "Secondary School Certificate (SSC) | 83%",
      duration: "July 2018 – March 2019",
      location: "Mumbai, India",
    },
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((item, index) => (
          <div key={index} className="education-item">
            <h3>{item.institution}</h3>
            <p>{item.degree}</p>
            <p>{item.duration}</p>
            <p>{item.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
