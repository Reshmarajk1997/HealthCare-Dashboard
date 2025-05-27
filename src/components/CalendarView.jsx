

import React from 'react';
import arrowLeft from '../assets/icons/left arrow.png';
import arrowRight from '../assets/icons/right arrow.png';
import { calendarTimes } from '../data/calendarData.js';
import '../styles/calender.css';

const CalendarView = () => {
  const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const days = Array.from({ length: 7 }, (_, i) => (25 + i).toString()); // Days 25 to 31

  return (
    <div className="card calendar-view">
      <div className="calendar-header">
        <h3>October 2021</h3>
        <div className="calendar-nav">
          <img src={arrowLeft} alt="Previous" className="calendar-nav-icon" />
          <img src={arrowRight} alt="Next" className="calendar-nav-icon" />
        </div>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="calendar-day-header">{day}</div>
        ))}
        {days.map((day, index) => (
          <div key={index} className="calendar-day">
            <div className="calendar-day-number">{day}</div>
            {calendarTimes[day] && calendarTimes[day].map((time, timeIndex) => (
              <div key={timeIndex} className="calendar-time-slot">
                <span className="time-label">{time}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;