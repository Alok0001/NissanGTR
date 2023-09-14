import React from 'react';
import './home.css';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Home() {
  return (
    <div className="Home">
      <header>
        <img src="https://img.gta5-mods.com/q85-w800/images/nissan-gtr-r35-add-on-tuning-extras-bodykits/75a58b-Screenshot_7.png" alt="Nissan GTR R35" />
        <h1>Nissan GTR R35</h1>
        <nav>
          <ul>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/login">Login</Link></li> {/* Link to the Login page */}
            <li><Link to="/register">Register</Link></li> {/* Link to the Register page */}
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Welcome to the Nissan GTR R35 Page</h2>
          <p>Explore the legendary Nissan GTR R35 with its powerful performance and iconic design.</p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>3.8-liter twin-turbocharged V6 engine</li>
            <li>All-wheel drive system</li>
            <li>Advanced aerodynamics</li>
            <li>High-quality interior</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Nissan GTR R35</p>
      </footer>
    </div>
  );
}

export default Home;

