import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '/app.png',
      title: 'App Development',
      description: 'Building powerful and scalable applications tailored to your needs'
    },
    {
      icon: '/design.png',
      title: 'Creative Design',
      description: 'Crafting visually stunning designs that capture your brand essence'
    },
    {
      icon: '/development.png',
      title: 'Development Solutions',
      description: 'Comprehensive development services using modern technologies'
    },
    {
      icon: '/freamwork.png',
      title: 'Framework Expertise',
      description: 'Leveraging popular frameworks for robust application development'
    },
    {
      icon: '/frontend.png',
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces'
    },
    {
      icon: '/mobile.png',
      title: 'Mobile Solutions',
      description: 'Developing innovative mobile applications for all platforms'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <div className="header-group">
          <span className="section-subtitle">Services</span>
          <h2>Our Best Services</h2>
          <p className="section-description">Comprehensive digital solutions to help your business grow and succeed</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>              <div className="services-section-icon">
                <img src="/dots.round.png" alt="background dots" className="dots-bg" />
                <img src={service.icon} alt={service.title} className="icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
