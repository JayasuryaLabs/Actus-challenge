
import React from 'react';
import './HackathonInfo.css'; // Import the corresponding CSS file

const HackathonInfo = () => {
  return (
    <section className="hackathon-info">
      <div className="hero-text">
        <h1>Create the next big Web3 AI dApp!</h1>
        <p>Are you ready to lead the next wave of digital innovation?<br></br> <br></br>This is your opportunity to develop dApps that leverages the power of web3 & AI.</p>
        <button className="event-button">Event has started!</button>
      </div>
      <div className="bounties">
        <h2>Bounties and Prizes</h2>
        <div className="prize-pool">$47,000 Prize Pool</div>
       <br></br>
      </div><br></br><br></br><br></br>
    </section>
  );
};

export default HackathonInfo;
