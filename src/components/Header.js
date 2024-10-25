// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles.css';
import logo from '../assets/images/logo.jpeg';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">
              <motion.img 
                src={logo} 
                alt="Acropolis Blockchain Club Logo" 
                className="logo" 
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </a>
          </li>
          <li><motion.a href="/" whileHover={{ color: "#3EB0B4" }}>Home</motion.a></li>
          <li><motion.a href="/tutorials" whileHover={{ color: "#3EB0B4" }}>Tutorials</motion.a></li>
          <li><motion.a href="/blog" whileHover={{ color: "#3EB0B4" }}>Blog</motion.a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
