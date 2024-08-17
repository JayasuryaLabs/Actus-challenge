import React, { useState } from 'react';
import './InfoSection.css';

const InfoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`info-section ${isOpen ? 'open' : ''}`}>
      <div className="section-header">
        <div className="header-content">
          <h1 className="button-info" data-text="Awesome" onClick={toggleSection}>
            <span className="actual-text">&nbsp;ACTUS&nbsp;</span>
            <span aria-hidden="true" className="front-text">&nbsp;Actus&nbsp;</span>
          </h1>
        </div>
        {isOpen && (
          <button className="close-button" onClick={toggleSection}>
            &times; {/* X symbol to close */}
          </button>
        )}
      </div>

      {isOpen && (
        <div className="section-content">
          <p className="section-subtitle">The Best RISK Models Developed with <span style={{ fontWeight: 'bold' }}>ACTUS</span>

          </p>

          <div className="content-body">
            <h2 className="content-heading">Prizes:</h2>
            <ul className="prizes-list">
              <li>1st place: $5000</li>
              <li>2nd place: $1000</li>
              <li>3rd place: $500</li>
            </ul>

            <h2 className="content-heading">List of project ideas:</h2>
            <ul className="ideas-list">
              <li>Loan Default Assessment </li>
              <li>Market volatility prediction </li>
              <li>Forex Risk Assessment </li>
              
            </ul>

            <h2 className="content-heading">Judging Criteria:</h2>
            <p>Must use the following features:</p>
            <ul className="criteria-list">
              <li>Should apply the Cash Flow distribution pattern</li>
              <li>Architectural simplification of existing systems</li>
            </ul>

            <h2>Additional Points:</h2>
            <ul className="extra-points-list">
              <li>Usage of External Risk APIs</li>
              <li>Advanced visualization tools</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoSection;
