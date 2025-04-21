import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
function About() {
  return (
    <div className="about-container">
      <h1>Pizza Order App</h1>
      <p>This is a simple app where users can order their favorite pizzas and see a summary of their order.</p>
      <h3>Features:</h3>
      <ul>
        <li>Add multiple pizzas with quantity</li>
        <li>View total items and price</li>
        <li>Data is saved using LocalStorage</li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li>React.js</li>
        <li>Redux Toolkit</li>
        <li>React Router</li>
        <li>CSS</li>
      </ul>
      <Link to='/'><p>Go to Order's Page</p></Link>
    </div>
  );
}

export default About;
