import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="left-section">
          <div className="about-image">
            <img src="/about-img.png" alt="About Us" />
          </div>
          <div className="experience-box">
            <h2>5 Year Of Working Experience</h2>
            <p>With the right people, experience, and drive, any business is destined for growth.</p>
          </div>
        </div>
        <div className="about-text">
          <div className="about-header">
            <h2>About Us</h2>
            <h1>Creative Minds design the best apps and websites for the world</h1>
            <p>We ensure that our employees and clients grow alongside the company by fostering a great work-life culture within the industry.</p>
          </div>
          <div className="vision-mission-container">
            <div className="vision-box">
              <img src="/visioncolor.png" alt="Vision" className="vision-icon" />
              <h2>Our Vision</h2>
              <p>We paint a bright future for businesses operating in digital landscapes, and firmly believe in cultivating productive, long-term business relationships.</p>
            </div>
            <div className="mission-box">
              <img src="/mission.png" alt="Mission" className="mission-icon" />
              <h2>Our Mission</h2>
              <p>We deliver contemporary and futuristic web and mobile software solutions to businesses ranging from startups to enterprises, providing affordability and satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
