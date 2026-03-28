// Skills.jsx

const Skills = () => {
    const skills = {
        languages: ['JavaScript', 'Python', 'Java', 'C++'],
        frameworks: ['React', 'Node.js', 'Django', 'Angular'],
        tools: ['Git', 'Docker', 'Jenkins', 'Webpack'],
        databases: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite'],
    };

    return (
        <div>
            <h2>Technical Skills</h2>
            <h3>Languages</h3>
            <ul>
                {skills.languages.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
            <h3>Frameworks</h3>
            <ul>
                {skills.frameworks.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
            <h3>Tools</h3>
            <ul>
                {skills.tools.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
            <h3>Databases</h3>
            <ul>
                {skills.databases.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </div>
    );
};

export default Skills;