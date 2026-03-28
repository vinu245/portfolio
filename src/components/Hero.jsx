import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="typing-animation">Welcome to My Portfolio</h1>
                <div className="cta-buttons">
                    <button className="cta-button">View Projects</button>
                    <button className="cta-button">Contact Me</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;