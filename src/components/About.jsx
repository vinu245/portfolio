import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Assuming you have some styles for the component

const About = () => {
    return (
        <div className="about">
            <h2>Professional Summary</h2>
            <p>
                I am a dedicated and detail-oriented professional with a passion for building impactful user experiences.
                I specialize in frontend development using modern technologies to create aesthetically pleasing and functional websites.
            </p>
            <h3>Skills</h3>
            <div className="skills">
                {['JavaScript', 'React', 'CSS', 'Node.js'].map((skill) => (
                    <div className="skill-bar" key={skill}>
                        <span>{skill}</span>
                        <motion.div 
                            className="bar"
                            initial={{ width: 0 }}
                            animate={{ width: '80%' }}
                            transition={{ duration: 1 }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;