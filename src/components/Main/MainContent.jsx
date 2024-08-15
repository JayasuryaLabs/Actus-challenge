import React, { useEffect, useRef } from 'react';
import './MainContent.css'; // Link to the updated CSS file

const MainContent = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.classList.add('reveal');
      }
    }, 100); // Delay to allow for initial render

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ marginTop: '0' }}>
    <div className="main-content" ref={contentRef}>
      <header className="main-header">
        <h1 className="main-title">Unleash Your Potential: The Actus 4-Week Modeling Challenge Awaits!</h1>
        <p className="main-subtitle">Are you ready to take your RISK modeling skills to new heights? Join our 4-week Actus Challenge and put your models to the ultimate test.</p>
      </header>
    </div>
    </div>
  );
};

export default MainContent;
