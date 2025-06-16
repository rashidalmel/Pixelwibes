import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './Header.css';
import WhyUs from './components/WhyUs';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Login from './components/Login';
import Register from './components/Register';
import OurClient from './components/OurClient';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import Footer from './components/Footer';

// Add global styles
const globalStyles = {
  fontFamily: "'Poppins', sans-serif"
};

function MainContent() {
  const navigate = useNavigate();
  const [companyDropdown] = useState([
    'About Us',
    'Team members',
    'Careers',
  ]);

  const [servicesDropdown] = useState({
    'WEB Technologies': [
      'Codeigniter Development',
      'Laravel Web Development',
      'Wordpress Development',
      'Yii Development',
      'Zend Development'
    ],
    'Mobility & Cross Platform Apps': [
      'Android App Development',
      'Flutter App Development',
      'Iphone App Development',
      'React Native App Development',
      'Xamarin App Development'
    ],
    'Frontend Technologies': [
      'Angular Development',
      'Meteor Development',
      'Nodejs Development',
      'React Development',
      'Vuejs Development'
    ],
    'UI/UX & Design Services': [
      'Design Prototyping',
      'Mobile App Design',
      'Psd to Html Development',
      'Responsive Web Design',
      'Scss Development'
    ],
    'Security & Audit': [
      'ISO Certifications',
      'VAPT Services'
    ]
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close any open dropdown when closing mobile menu
    if (isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="App" style={globalStyles}>
      <header className="header">
        <nav className="nav">
          <div className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src="/logo.png" alt="Pixelwibes Logo" className="logo" />
            <span className="company-title">Pixelwibes</span>
          </div>

          <div className="header-right">
            <div className="mobile-user">
              <button className="icon-btn user-icon" onClick={handleLoginClick}>
                <i className="fas fa-user"></i>
              </button>
            </div>
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>

          <div className={`nav-items ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className={`dropdown company-dropdown ${activeDropdown === 'company' ? 'active' : ''}`}>
              <span className="nav-item" onClick={() => toggleDropdown('company')}>
                Company
                <i className={`fas fa-chevron-down dropdown-icon ${activeDropdown === 'company' ? 'rotated' : ''}`}></i>
              </span>
              <div className="dropdown-content">
                {companyDropdown.map((item, index) => (
                  <a key={index} href="#" className="dropdown-item">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className={`dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
              <span className="nav-item" onClick={() => toggleDropdown('services')}>
                Services
                <i className={`fas fa-chevron-down dropdown-icon ${activeDropdown === 'services' ? 'rotated' : ''}`}></i>
              </span>
              <div className="dropdown-content services-mega-menu">
                {Object.entries(servicesDropdown).map(([category, items], categoryIndex) => (
                  <div key={categoryIndex} className="services-category">
                    <div className="category-title">{category}</div>
                    <div className="category-items">
                      {items.map((item, itemIndex) => (
                        <a key={itemIndex} href="#" className="dropdown-item">
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a href="#" className="nav-item">Portfolio</a>
            <a href="#" className="nav-item">Hire Us</a>
            <div className="button-container">
              <button className="btn btn-outline">Contact Us</button>
              <button className="btn btn-gradient">Templates</button>
              <div className="icon-buttons">
                <button className="icon-btn user-icon" onClick={handleLoginClick}>
                  <i className="fas fa-user"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <>
            <section className="hero">
              <div className="hero-container">
                <div className="hero-content">
                  <h1>Connecting Pixel From Design To Development</h1>
                  <div className="service-icons">
                    <div className="service-icon">
                      <i className="fas fa-pencil-ruler service-icon-img"></i>
                      <span className="service-icon-text">We Design.</span>
                    </div>
                    <div className="service-icon">
                      <i className="fas fa-code service-icon-img"></i>
                      <span className="service-icon-text">We Develop.</span>
                    </div>
                    <div className="service-icon">
                      <i className="fas fa-rocket service-icon-img"></i>
                      <span className="service-icon-text">We Deliver.</span>
                    </div>
                  </div>
                </div>
                <div className="hero-image">
                  <img src="/Heroimage.png" alt="Hero" />
                </div>
              </div>
            </section>
            <WhyUs />
            <AboutUs />
            <Services />
            <Testimonial />
            <OurClient />
            <Blog />
            <ContactUs />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={globalStyles}>
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;