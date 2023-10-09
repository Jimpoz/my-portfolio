import React from 'react';
import './about.css';

function About() {
  // Define your GitHub profile link
  const githubProfileLink = 'https://github.com/yourusername';

  // Define your personal projects with titles, descriptions, and images
  const personalProjects = [
    {
      title: 'Project 1',
      description: 'A description of your first project.',
      imageSrc: '/images/project1.jpg', // Replace with the actual image source
    },
    {
      title: 'Project 2',
      description: 'A description of your second project.',
      imageSrc: '/images/project2.jpg', // Replace with the actual image source
    },
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