import React, { useState, useEffect } from 'react';
import './Testimonial.css';

const Testimonial = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [testimonials] = useState([
    {
      id: 1,
      text: "I was really pleased with the design and the simplicity.",
      author: "Ervinbosenbacher",
      location: "United Kingdom",
      joinDate: "Member since August 2014",
      logo: "/envato.png"
    },
    {
      id: 2,
      text: "Exceptional service and outstanding results! The team went above and beyond our expectations.",
      author: "Sarah Johnson",
      location: "United States",
      joinDate: "Member since March 2015",
      logo: "/testimonial-6.jpg"
    }
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setAutoPlay(false); // Stop auto-play when manually navigating
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setAutoPlay(false); // Stop auto-play when manually navigating
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Effect for auto-changing slides
  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Change every 5 seconds
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [autoPlay, testimonials.length]);

  const handleSliderInteraction = () => {
    setAutoPlay(false); // Stop auto-play on user interaction
  };

  return (
    <section className="testimonial-section">
      <div className="background-curve"></div>
      <div className="container">
        <div className="testimonial-wrapper">          
          <div className="header-group">
            <span className="section-subtitle">Testimonial</span>
            <h2>What's Our Successful Client Says</h2>
          </div>
            <div 
            className="testimonial-slider"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <div className="testimonial-content">
              <div className="testimonial-text">
                <p>{testimonials[currentSlide].text}</p>
              </div>
              <div className="testimonial-info">
                <div className="client-logo">
                  <img src={testimonials[currentSlide].logo} alt="Client Logo" />
                </div>
                <div className="client-details">
                  <h3>{testimonials[currentSlide].author}</h3>
                  <p>{testimonials[currentSlide].location}, {testimonials[currentSlide].joinDate}</p>
                </div>
              </div>
              <div className="testimonial-navigation">
                <button className="nav-btn prev" onClick={prevSlide}>
                  <i className="fas fa-arrow-left"></i>
                </button>
                <button className="nav-btn next" onClick={nextSlide}>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
