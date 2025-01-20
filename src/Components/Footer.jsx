import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left" data-aos="fade-right" data-aos-offset="200">
          <h2 id="contact">
            DO YOU HAVE A PROJECT TO <span>DISCUSS?</span>
          </h2>
          <p>GET IN TOUCH 💬</p>
          <div className="contact-details">
            <p><strong>CONTACT:</strong> allitoheebishola1@gmail.com</p>
            <p><strong>SOCIAL MEDIA:</strong></p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/toheeb-alli" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin social-icon"></i>
              </a>
              <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook social-icon"></i>
              </a>
              <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram social-icon"></i>
              </a>
              <a href="https://wa.me/2347064835520" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp social-icon"></i>
              </a>
              <a href="https://t.me/your-telegram-handle" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-telegram social-icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right" data-aos="fade-left" data-aos-offset="200">
          <h3>Contact Form</h3>
          <form
            action="https://formsubmit.co/allitoheebishola1@gmail.com"
            method="POST"
          >
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit" className="btn-submit">Send</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom" data-aos="fade-up">
  <p>
    &copy; {new Date().getFullYear()} - All rights reserved. <br /> Developed By
    <span> Superpen-Dev</span>.
  </p>
</div>

    </footer>
  );
};

export default Footer;
