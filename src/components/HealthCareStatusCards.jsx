import React from 'react';
import '../styles/healthStatusCards.css';

const HealthCareStatusCards = ({ healthStatus }) => {
  const cardsData = healthStatus.filter((indicator) => indicator.date);

  return (
    <div className="health-status-cards">
      {cardsData.map((status, index) => (
        <div key={index} className="card health-status-card">
          <div className="health-status-left">
            <img
              src={status.icon}
              alt={`${status.name} icon`}
              className="health-status-icon"
            />
            <div className="health-status-text">
              <h3 className="health-status-title">{status.name}</h3>
              <p className="health-status-date">{status.date}</p>
            </div>
          </div>

          <div className="range-bar">
            <div className={`range-fill range-${status.status}`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthCareStatusCards;
