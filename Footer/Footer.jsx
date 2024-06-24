import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';  

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>Created by:</p>
        <ul>
          <li>
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> Koketso Lepulana
            </a>
            |
            <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/teammategithub" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> Angela King
            </a>
            |
            <a href="https://www.linkedin.com/in/teammatename" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

