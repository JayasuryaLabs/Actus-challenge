
import React from 'react';
import './HackathonInfo.css'; // Import the corresponding CSS file

const HackathonInfo = () => {
  return (
    <section className="hackathon-info">
      <div className="hero-text">
        <h1>Create the next generation finance application!</h1>
        <p>Are you ready to lead the next wave of Financial innovation ?<br></br> <br></br>This is your opportunity to develop apps that power next generation Finance.</p>
      <button className="cssbuttons-io">
        <span><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
        fill="currentColor"></path>
    </svg>
    Event has started!</span>
</button>

      </div>
      <div className="bounties">
        <h2>Bounties and Prizes</h2>
        <div className="codepen-button"><span>$47,000 Prize Pool</span></div>
       <br></br>
      </div><br></br><br></br><br></br>
    </section>
  );
};

export default HackathonInfo;
