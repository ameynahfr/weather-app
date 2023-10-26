import React from 'react';
import instagram from '../images/instagram.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-content">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Weather Forecast App By Aminah Shahzad
          </div>
          <div className="social-links">
            <a href="https://github.com/ameynahfr" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/ameynahfr/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
