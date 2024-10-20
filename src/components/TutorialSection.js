import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const TutorialSection = ({ tutorials }) => {
  return (
    <section className="tutorial-section">
      <h2>Tutorials</h2>
      <div className="tutorial-cards">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="tutorial-card">
            <h3>{tutorial.name}</h3>
            <p>{tutorial.description}</p>
            <Link to={tutorial.link} className="tutorial-link">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TutorialSection;
