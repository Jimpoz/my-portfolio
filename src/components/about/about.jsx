import React from 'react';
import './about.css';

import sna_image from '../../assets/Projects/SNA/ML_Event/Mention_network_D5.png';

import webapp from '../../assets/Projects/Exam_Manager/webapp_pj.png';

import bookito from '../../assets/Projects/Bookito/bookito_pj.png';

import json from '../../assets/Projects/json_parser/json_pj.png';

function About() {
  const githubProfileLink = 'https://github.com/Jimpoz';

  const personalProjects = [
    {
      title: 'Sentiment Analysis of Twitter Users towards the Climate Crisis Based on Actions of Environmental Movements',
      description: 'The objective of this project was to research and analyze the behavior that users had during the manifestation of environmental movements that were trying to spread their beliefs through actions. Though they were not well received since their actions were either damaging pieces of art or being a hindrance to others.',
      writtenIn: 'The tools I used are the following: Python, Natural Language Processing (NLP), R',
      imageSrc: sna_image,
    },
    {
      title: 'Exam Manager WebApp',
      description: 'The Exam Manager WebApp is designed to be used by professors of a faculty to efficiently manage exams and tests. It was developed mainly using Python for the backend and Bootstrap for the user interface.',
      writtenIn: ' Tools: Python, Flask, JavaScript, CSS, HTML, SQL, PostreSQL',
      imageSrc: webapp
    },
    {
      title: 'Mobile application for the exchange of books',
      description: 'This application was developed for the Android platform and it was designed to be used by students to exchange books with other students. It was developed using Java and Android Studio.',
      writtenIn: 'Tools: Java, Android Studio',
      imageSrc: bookito
    },
    {
      title: 'JSON-like File Parser',
      description: 'The JSON-like File Parser was a university project that aimed to read and write JSON-like files. It was implemented in Java to handle file I/O and data manipulation.',
      writtenIn: 'Tools: C++, CLion, JSON',
      imageSrc: json
    },
  ];

  return (
    <section id='about'>
      <div className='container about_container'>
        <h2>About Me</h2>
      </div>
      <div className='container about_text_container'>
        <p>
          I am a computer science student at the University of Venice Ca' Foscari pursuing a bachelor degree, and I am eager to learn and improve myself, always looking forward to new experiences.
          During my time at the University, I've learned some valuable skills and I've been able to put them to the test in some projects, both personal and university-related.
          Here below you can find some of the projects I've worked on, for more information you can check my GitHub profile <a href={githubProfileLink} target='_blank' rel='noopener noreferrer'>here</a>
        </p>
      </div>

      {/* Add a divider */}
      <hr />

      <section id='personal-projects'>
        <div className='container about_text_container'>
          <h1>Personal Projects</h1>
          <div className='projects-container'>
            {personalProjects.map((project, index) => (
              <div className='project-card' key={index}>
                <img src={project.imageSrc} alt={project.title} />
                <div className='project-details'>
                  <h4 className='project-title'>{project.title}</h4>
                  <p className='project-description'>{project.description}</p>
                  <p className='project-written-in'>{project.writtenIn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;