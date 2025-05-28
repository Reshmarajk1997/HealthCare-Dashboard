

import React from 'react';
import '../styles/ActivityFeed.css';

const ActivityFeed = () => {
  
  // const activityData = [
  //   { day: 'Mon', value: 5 },
  //   { day: 'Tues', value: 8 },
  //   { day: 'Wed', value: 3 },
  //   { day: 'Thurs', value: 6 },
  //   { day: 'Fri', value: 4 },
  //   { day: 'Sat', value: 2 },
  //   { day: 'Sun', value: 7 },
  // ];


  const activityData = [
    { day: 'Mon', value: 3 },
    { day: 'Tues', value: 6 },
    { day: 'Wed', value: 2 },
    { day: 'Thurs', value: 5 },
    { day: 'Fri', value: 4 },
    { day: 'Sat', value: 1 },
    { day: 'Sun', value: 7 },
  ];

  
  const maxValue = Math.max(...activityData.map(item => item.value));

  return (
    <div className="activity-feed">
      <h3 className="activity-title">Activity</h3>
      <div className="activity-bars">
        {activityData.map((item, index) => (
          <div key={index} className="activity-bar-container">
            <div
              className="activity-bar"
              style={{
                height: `${(item.value / maxValue) * 100}%`, 
                backgroundColor: item.value > 5 ? '#4A90E2' : '#A3BFFA', 
              }}
            />
            <span className="activity-day">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;