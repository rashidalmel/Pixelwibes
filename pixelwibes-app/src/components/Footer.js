import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company-info">          
          <img src="/logo.png" alt="Pixelwibes" className="footer-logo" />
          <div className="brand-identity">
            <img src="/brand ra.png" alt="Brand Identity" className="brand-logo" />
          </div>
          <p className="company-description">
            Pixelwibes It Solutions Pvt. Ltd. is the world's leading community for creatives to share, grow, and get hired.
          </p>
          <p className="tagline">We Creative.</p>
          <div className="rating">
            <span>5/5</span>
            {'★'.repeat(5)} Reviews
          </div>
          <div className="social-icons">
            <a href="#" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Confidentiality</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>SERVICES</h3>
          <ul>
            <li><a href="#">WEB Technologies</a></li>
            <li><a href="#">Mobility & Cross Platform Apps</a></li>
            <li><a href="#">Frontend Technologies</a></li>
            <li><a href="#">UI/UX & Design Services</a></li>
            <li><a href="#">BlockChain</a></li>
            <li><a href="#">Other Services</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CONTACT</h3>
          <ul>
            <li><a href="mailto:info@pixelwibes.com">info@pixelwibes.com</a></li>
            <li><a href="mailto:hr@pixelwibes.com">hr@pixelwibes.com</a></li>
            <li><a href="tel:+919106703549">+91 9106703549</a></li>
            <li className="address">
              Titanium Heights, B-909,<br />
              Corporate Rd, Prahlad Nagar,<br />
              Ahmedabad, Gujarat 380015
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-container">
          <p>© 2025 PixelWibes It Solutions Pvt. Ltd. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#">Refund Payments</a>
            <a href="#">Terms of use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
