import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = ({ upcomingSchedule }) => {
  return (
    <div className="card upcoming-schedule">
      <h3 className="upcoming-schedule-title">THE UPCOMING SCHEDULE</h3>
      {upcomingSchedule.map((schedule, index) => (
        <div key={index} className="schedule-group">
          <h4 className="schedule-day">{`On ${schedule.day}`}</h4>
          <div className="schedule-appointments">
            {schedule.items.map((appt, apptIndex) => (
              <SimpleAppointmentCard key={apptIndex} appointment={appt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;