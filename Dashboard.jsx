import React from 'react';
import './Dashboard.css';
import logo from './logo.png';
import logo2 from './playlogo.png';

function Dashboard() {

  const handleButtonClick = (route) => {
    window.open(route, '_blank');
  };

  return (
    <div className="dashboard-header">
      <div className="button-container">
        <img src={logo} alt="Logo" className="dashboard-logo" />
        <div>
          <button onClick={() => handleButtonClick('/')} className="dashboard-button">Home</button>
          <button className="dashboard-button">Health Conditions</button>
          <button className="dashboard-button2">Lab Tests</button>
          <button className="dashboard-button">Medicines</button>
        </div>
        <div>
          <button className="dashboard-button3">For Patients</button>
          <button className="dashboard-button3">For Hospitals</button>
        </div>
        <div>
          <a href="https://play.google.com/store/apps/details?id=notinline.org.notinline&hl=en_IN&gl=US" className="dashboard-button4">
            <img src={logo2} className="dashboard-logo2" alt="Play Store Logo" />
            Play Store
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
