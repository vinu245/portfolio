import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'Description of Project One',
        technologies: ['React', 'CSS', 'JavaScript'],
        links: {
            demo: 'https://demo.projectone.com',
            repo: 'https://github.com/vinu245/project-one',
        },
    },
    {
        title: 'Project Two',
        description: 'Description of Project Two',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        links: {
            demo: 'https://demo.projecttwo.com',
            repo: 'https://github.com/vinu245/project-two',
        },
    },
    {
        title: 'Project Three',
        description: 'Description of Project Three',
        technologies: ['Node.js', 'Express', 'MongoDB'],
        links: {
            demo: 'https://demo.projectthree.com',
            repo: 'https://github.com/vinu245/project-three',
        },
    },
];

const ProjectCard = ({ project }) => (
    <div className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">View Demo</a>
        <a href={project.links.repo} target="_blank" rel="noopener noreferrer">View Repository</a>
    </div>
);

const Projects = () => (
    <div className="projects">
        {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
        ))}
    </div>
);

export default Projects;