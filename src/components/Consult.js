import React from 'react';
import { Link } from 'react-router-dom';

const Consult = () => {

  return (
    <div className="consult-book-container">
      <div className="floating-text-box">
        <h1>Consult with Us</h1>
        <p>We offer the best dental care services. Consult with our experts and book your appointment today!</p>
        <button><Link to="/Contact">Book a Consult</Link></button>
      </div>
    </div>
  );
};

export default Consult;
