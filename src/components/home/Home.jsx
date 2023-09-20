import React from 'react';
import './Home.css';

const Home = () => (
  <section className="welcome-container">
    <h2 className="welcome-title">Welcome to our page!</h2>
    <p className="welcome-text">
      &quot;Math~Mystics&quot; is a website for all mathematics lovers 🧡.
    </p>
    <p className="welcome-text">
      This is a Single Page Application (SPA) that allows users to:
    </p>
    <ul className="welcome-points">
      <li>Make simple calculations.</li>
      <li>Read a random quote.</li>
    </ul>
  </section>
);
export default Home;
