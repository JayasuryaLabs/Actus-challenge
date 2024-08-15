// src/ThemeToggle.jsx

import React, { useState, useEffect } from 'react';
import './Styles.css'; // Import your styles

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div>
      <img
        src={darkMode ? '/logo-dark.png' : '/logo-light.png'}
        alt="Logo"
        className="logo"
      />
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
