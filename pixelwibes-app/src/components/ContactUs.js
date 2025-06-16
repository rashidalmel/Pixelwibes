import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [selectedService, setSelectedService] = useState(null);
    
    const services = [
        "MOBILE APP DEVELOPMENT",
        "WEB DEVELOPMENT",
        "UI/UX DESIGN",
        "HIRE DEVELOPER",
        "MAINTENANCE & SUPPORT",
        "OTHER SERVICES"
    ];

    const handleServiceClick = (service) => {
        setSelectedService(service === selectedService ? null : service);
    };

    const socialLinks = [
        {
            name: "Evento Market",
            icon: "https://pixelwibes.com/public/front/images/envato.svg"
        },
        {
            name: "Dribbble",
            icon: "https://pixelwibes.com/public/front/images/dribbble.svg"
        },
        {
            name: "Behance",
            icon: "https://pixelwibes.com/public/front/images/behance.svg"
        },
        {
            name: "Linkdin",
            icon: "https://pixelwibes.com/public/front/images/linkedin.svg"
        },
        {
            name: "Instagram",
            icon: "https://pixelwibes.com/public/front/images/instagram.svg"
        }
    ];

    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-left">
                    <h3 className="contact-subtitle">Say</h3>
                    <div className="contact-title-group">
                        <h1 className="contact-hello">Hello..</h1>
                    </div>

                    <div className="main-content-wrapper">
                        <div>
                            <h2 className="contact-form-title">Got a project in mind? Share the details of your project.</h2>
                            
                            <div className="services-buttons">
                                {services.map((service, index) => (
                                    <button 
                                        key={index} 
                                        className={`service-btn ${selectedService === service ? 'active' : ''}`}
                                        onClick={() => handleServiceClick(service)}
                                    >
                                        {service}
                                    </button>
                                ))}
                            </div>

                            <form className="contact-form">
                                <input type="text" placeholder="Full Name" className="form-input full-width" />
                                
                                <div className="form-row">
                                    <input type="email" placeholder="Email address" className="form-input" />
                                    <input type="tel" placeholder="Phone Number +1 (000) 000 0000" className="form-input" />
                                </div>
                                
                                <textarea placeholder="Description" className="form-input full-width description-input"></textarea>
                                
                                <button type="submit" className="inquire-btn">INQUIRE NOW</button>
                            </form>

                            <div className="other-contacts">
                                <h3>Other Ways Contact Us</h3>
                                <div className="contact-info-grid">
                                    <div className="contact-info-item">
                                        <span className="contact-icon">
                                            <i className="fab fa-skype"></i>
                                        </span>
                                        <div className="contact-detail">
                                            <span className="contact-label">Skype</span>
                                            <span className="contact-value">Pixelwibes</span>
                                        </div>
                                    </div>
                                    <div className="contact-info-item">
                                        <span className="contact-icon">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                        <div className="contact-detail">
                                            <span className="contact-label">Email</span>
                                            <span className="contact-value">info@pixelwibes.com</span>
                                        </div>
                                    </div>
                                    <div className="contact-info-item">
                                        <span className="contact-icon">
                                            <i className="fas fa-phone"></i>
                                        </span>
                                        <div className="contact-detail">
                                            <span className="contact-label">Phone</span>
                                            <span className="contact-value">+91-910-670-3549</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <a key={index} href="#" className="social-link">
                                    <span className="social-icon">
                                        <img src={social.icon} alt={social.name} />
                                    </span>
                                    <span className="social-name">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
