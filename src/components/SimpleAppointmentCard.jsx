

import React from 'react';
 import '../styles/simpleAppointmentCard.css';

const SimpleAppointmentCard = ({ appointment, appointments }) => {
  // Handle both single appointment and array of appointments
  const items = appointments ? appointments : [appointment].filter(Boolean);

  return (
    <div className="appointments-container">
      {items.map((appt, index) => (
        <div key={index} className="appointment-card">
          <img src={appt.icon} alt={appt.title || appt.type} className="appointment-icon" />
          <div className="appointment-details">
            <h4>{appt.title || appt.type}</h4>
            <p>{appt.time}</p>
            {appt.doctor && <p>{appt.doctor}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimpleAppointmentCard;