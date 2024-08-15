import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* <h1 className="logo">ACTUS</h1>
        <p className="tagline">Join us to explore the intersection of AI and blockchain technology.</p> */}
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#programmes" className="nav-link">Programmes</a></li>
          <li className="nav-item"><a href="#career-fair" className="nav-link">Career Fair</a></li>
          <li className="nav-item"><a href="#news" className="nav-link">News</a></li>
          <li className="nav-item"><a href="#join" className="nav-link">Join the community</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
