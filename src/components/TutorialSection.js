// src/components/TutorialSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles.css';

const TutorialSection = ({ tutorials }) => {
  return (
    <section className="tutorial-section">
      <h2>Tutorials</h2>
      <div className="tutorial-cards">
        {tutorials.map((tutorial, index) => (
          <motion.div 
            key={index} 
            className="tutorial-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={tutorial.image} alt={tutorial.name} className="tutorial-image" />
            <h3>{tutorial.name}</h3>
            <p>{tutorial.description}</p>
            <Link to={tutorial.link} className="tutorial-link">
              Read more
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TutorialSection;
