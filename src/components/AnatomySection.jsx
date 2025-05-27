import React from 'react';
import anatomyImg from '../assets/images/human_anatomy.png';
import '../styles/anatomySection.css';

const AnatomySection = ({ healthStatus }) => {
  if (!healthStatus?.length) return <p>No health data available.</p>;

  const filteredIndicators = healthStatus.filter(
    (indicator) =>
      indicator.name === 'Healthy Leg' || indicator.name === 'Healthy Heart'
  );

  return (
    <div className="card anatomy-section">
      <img
        src={anatomyImg}
        alt="Anatomical Illustration"
        className="anatomy-image"
      />
      {filteredIndicators.map((indicator, index) => (
        <div
          key={index}
          className={`anatomy-indicator ${indicator.position}`}
        >
          <div className={`anatomy-text text-${indicator.status}`}>
            {indicator.name}
            {indicator.date && (
              <small className="anatomy-date">{indicator.date}</small>
            )}
            <img
              src={indicator.icon}
              alt={`${indicator.name} icon`}
              className="anatomy-icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnatomySection;
