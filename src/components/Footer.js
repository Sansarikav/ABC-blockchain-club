// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Acropolis Blockchain Club. All rights reserved.</p>
      <motion.button 
        className="join-button"
        whileHover={{ scale: 1.1, backgroundColor: "#B5B6B6" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Join the Membership
      </motion.button>
    </footer>
  );
}

export default Footer;
