import React from 'react';
import '../styles.css';
import logo from '../assets/images/logo.jpeg'; // Adjust the path according to your file structure

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">
              {/* The logo image */}
              <img src={logo} alt="Acropolis Blockchain Club Logo" className="logo" />
            </a>
          </li>
          <li><a href="/">Home</a></li>
          <li><a href="/tutorials">Tutorials</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
