import React from 'react';

const Experience = () => {
  const workExperiences = [
    {
      title: 'Software Engineer',
      company: 'Tech Company',
      date: '2025-01 - Present',
      details: 'Working on various software development projects.'
    },
    {
      title: 'Web Developer',
      company: 'Web Agency',
      date: '2024-06 - 2024-12',
      details: 'Developed and maintained client websites.'
    }
  ];

  const internships = [
    {
      title: 'Intern',
      company: 'Startup Inc',
      date: '2024-01 - 2024-05',
      details: 'Assisted in software development and testing.'
    }
  ];

  return (
    <div>
      <h2>Work Experience</h2>
      <ul>
        {workExperiences.map((job, index) => (
          <li key={index}>
            <h3>{job.title} at {job.company}</h3>
            <p><strong>Date:</strong> {job.date}</p>
            <p>{job.details}</p>
          </li>
        ))}
      </ul>
      <h2>Internships</h2>
      <ul>
        {internships.map((internship, index) => (
          <li key={index}>
            <h3>{internship.title} at {internship.company}</h3>
            <p><strong>Date:</strong> {internship.date}</p>
            <p>{internship.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;