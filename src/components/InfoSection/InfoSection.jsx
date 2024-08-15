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
            <span className="actual-text">&nbsp;Actus&nbsp;</span>
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
          <p className="section-subtitle">The best on-chain AI agent(s) built with Galadriel</p>

          <div className="content-body">
            <h2 className="content-heading">Prizes:</h2>
            <ul className="prizes-list">
              <li>1st place: $5000</li>
              <li>2nd place: $1000</li>
              <li>3rd place: $500</li>
            </ul>

            <h2 className="content-heading">Additional Info:</h2>
            <p>Build and deploy on-chain AI agent(s) on Galadriel Devnet...</p>
            <ul className="info-list">
              <li><strong>Dusty:</strong> fully autonomous AI software engineer</li>
              <li><strong>GPT Researcher:</strong> autonomous agent that does comprehensive research on any given topic</li>
              <li><strong>Agent Sims:</strong> multiple autonomous AI agents as characters in a game</li>
            </ul>

            <h2 className="content-heading">List of project ideas:</h2>
            <ul className="ideas-list">
              <li>AI-economy manager/On-chain Hedge Fund</li>
              <li>AI prediction agent</li>
              <li>Agent Swarm / Team of Agents (Agent Sims)</li>
              <li>On-chain fraud detection & insurance</li>
              <li>AI Clone & Digital Twin</li>
              <li>Autonomous Gaming NPCs</li>
              <li>Agent-governed DAO</li>
            </ul>

            <h2 className="content-heading">Judging Criteria:</h2>
            <p>Must use the following features:</p>
            <ul className="criteria-list">
              <li>LLMs with a loop</li>
              <li>Use of tools</li>
            </ul>

            <p>Extra points for:</p>
            <ul className="extra-points-list">
              <li>Use of EVMs</li>
              <li>Multiple agents interacting (like Agent Sims)</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoSection;
