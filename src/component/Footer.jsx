import './Footer.css';
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Connect with me on email:    
          <a href="mailto:tommytang9958@gmail.com">   tommytang9958@gmail.com</a>
        </p>
        <p>© {year} Yizhou Tang. All rights reserved.</p>
      </div>
    </footer>
  );
};


export default Footer;
