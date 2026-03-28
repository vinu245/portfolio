import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <div className="social-media-links">
        <h3>Follow Me</h3>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default Contact;