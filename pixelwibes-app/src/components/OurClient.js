import React from 'react';
import './OurClient.css';

const OurClient = () => {
    const logos = [
        '/ourclientlogo/logo2.png',
        '/ourclientlogo/logo3.png',
        '/ourclientlogo/logo4.png',
        '/ourclientlogo/logo5.png',
        '/ourclientlogo/logo7.png',
        '/ourclientlogo/logo10.png',
        '/ourclientlogo/logo11.png',
        '/ourclientlogo/logo12.png'
    ];

    // Create a double array of logos for smooth infinite scroll
    const doubledLogos = [...logos, ...logos];

    return (
        <section className="our-clients-section">
            <div className="our-clients-container">
                <h3 className="our-clients-subtitle">Smile is Powered by</h3>
                <h2 className="our-clients-title">Our Clients</h2>
                <div className="our-clients-logo-grid">
                    <div className="our-clients-logo-slide">
                        {doubledLogos.map((logo, index) => (
                            <div key={index} className="our-clients-logo-item">
                                <img src={logo} alt={`Client Logo ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurClient;
