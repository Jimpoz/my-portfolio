import React from 'react';
import './about.css';

function About() {
  // Define your GitHub profile link
  const githubProfileLink = 'https://github.com/Jimpoz';

  // Define your personal projects with titles, descriptions, and images
  const personalProjects = [
    {
      title: 'Sentiment analysis of Twitter users towards the Climate crisis based on actions of environmental movements',
      description: 'The objective of this project was to reasearch and analye the behaviour that Users had during the manifestation of environmental movements that were trying to spread their beliefs through actions. Though they were not well received since their actions were either damaging pieces of art or being a hindrance to others. ',
      imageSrc: '/images/project1.jpg', // Replace with the actual image source
    },
    {
      title: 'Exam Manager WebApp',
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