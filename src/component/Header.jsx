import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Yizhou's HOME</Link></li>
          <li><Link to="/photos">PHOTOS</Link></li>
          <li><a href="https://github.com/skyeyestang99">GITHUB</a></li>
          <li><a href="https://www.linkedin.com/in/yizhou-tang-53b6b5231/">Linkedin</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
