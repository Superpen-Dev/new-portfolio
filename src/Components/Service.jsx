import React, { useEffect } from 'react';
import './Service.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default duration for all animations
  }, []);

  return (
    <section className="services-section">
      <h2 className="services-title">MY SERVICES</h2>
      <div className="services-container">
        <div className="service-card" data-aos="fade-right" data-aos-delay="100">
          <div className="service-icon">🖥️</div>
          <h3 className="new">Website Development</h3>
          <p className="new">
            I create websites based on your ready-made design. Whether it's a landing page or a business card website, I will make it look great and work smoothly on any device.
          </p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <div className="service-icon">🎨</div>
          <h3 className="new">Web Design</h3>
          <p className="new">
            I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.
          </p>
        </div>
        <div className="service-card" data-aos="fade-left" data-aos-delay="300">
          <div className="service-icon">🔧</div>
          <h3 className="new">WordPress Development</h3>
          <p className="new">
            I build websites on WordPress, making them easy to update and manage. It’s a great choice for blogs, small businesses, or portfolios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
