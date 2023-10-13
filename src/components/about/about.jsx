import React from 'react';
import './about.css';

function About() {
  // Define your GitHub profile link
  const githubProfileLink = 'https://github.com/Jimpoz';

  // Define your personal projects with titles, descriptions, and images
  const personalProjects = [
    {
      title: 'Sentiment Analysis of Twitter Users towards the Climate Crisis Based on Actions of Environmental Movements',
      description: 'The objective of this project was to research and analyze the behavior that users had during the manifestation of environmental movements that were trying to spread their beliefs through actions. Though they were not well received since their actions were either damaging pieces of art or being a hindrance to others.',
      writtenIn: 'Python, Natural Language Processing (NLP), R',
      imageSrc: '/images/project1.jpg', // Replace with the actual image source
    },
    {
      title: 'Exam Manager WebApp',
      description: 'The Exam Manager WebApp is designed to be used by professors of a faculty to efficiently manage exams and tests. It was developed mainly using Python for the backend and Bootstrap for the user interface.',
      writtenIn: 'Python, Flask, JavaScript, CSS, HTML, SQL, PostreSQL',
      imageSrc: '/images/project2.jpg', // Replace with the actual image source
    },
    {
      title: 'JSON-like File Parser',
      description: 'The JSON-like File Parser was a university project that aimed to read and write JSON-like files. It was implemented in Java to handle file I/O and data manipulation.',
      writtenIn: 'C++',
      imageSrc: '/images/project3.jpg', // Replace with the actual image source
    }
    // Add more projects as needed
  ];
  

  return (
    <section id='about'>
      <div className='container about_container'>
        <h2>About Me</h2>
      </div>
      <div className='container about_text_container'>
        <p>
          I am a computer science student at the University of Venice Ca' Foscari, currently in my third year. Since I have no previous experience in the field, I am looking for an internship that will allow me to learn and grow. I am a very ambitious person and I am always looking for new challenges in order to improve myself.
        </p>
        <h3>Personal Projects</h3>
        <div className='projects-container'>
          {personalProjects.map((project, index) => (
            <div className='project-card' key={index}>
              <img src={project.imageSrc} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <div className='github-link'>
          <a href={githubProfileLink} target='_blank' rel='noopener noreferrer'>
            View my GitHub profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;