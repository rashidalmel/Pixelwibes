import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  const features = [
    {
      icon: '/web.png',
      title: 'Web Development',
      description: 'Expert web development solutions using cutting-edge technologies'
    },
    {
      icon: '/uiux.png',
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences'
    },
    {
      icon: '/mobile.png',
      title: 'Mobile Development',
      description: 'Cross-platform mobile solutions for your business needs'
    }
  ];
  return (
    <section className="why-us">      <div className="container">
        <div className="header-group">          <span className="section-subtitle">Feature</span>
          <h2>Why Choose Us</h2>
          <p className="section-description">We are driven to transform your ideas into software that works and wins</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <img src="/dots.round.png" alt="background dots" className="dots-bg" />
                <img src={feature.icon} alt={feature.title} className="icon" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
