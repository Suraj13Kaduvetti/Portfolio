import React from 'react';
import './CoursesAndCertifications.css';

const CoursesAndCertifications = () => {
  const courses = [
    "MS-CIT (Maharashtra State Certificate in Information Technology) - March 2019",
    "Cyber Security and Ethical Hacking Level 1 - March 2021",
    "C Programming and Assembly Language - August 2022",
    "Database Management System - August 2023",
  ];

  return (
    <section className="courses-certifications">
      <h2>Courses and Certifications</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </section>
  );
};

export default CoursesAndCertifications;
