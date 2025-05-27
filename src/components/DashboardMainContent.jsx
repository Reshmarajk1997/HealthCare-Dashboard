

// import React from 'react';
// import AnatomySection from './AnatomySection';
// import HealthCareStatusCards from './HealthCareStatusCards';
// import CalendarView from './CalendarView.jsx';
// import SimpleAppointmentCard from './SimpleAppointmentCard.jsx';
// import UpcomingSchedule from './UpcomingSchedule';
// import ActivityFeed from './ActivityFeed';
// import { calendarAppointments, upcomingSchedule } from '../data/appointments.js';
// import '../styles/DashboardMainContent.css';

// const DashboardMainContent = ({
//   healthStatus,
//   calendarTimes,
//   appointments,
//   upcomingSchedule: propUpcomingSchedule,
// }) => {
//   return (
//     <main className="dashboard-main">
//       <h2 className="dashboard-title">Dashboard</h2>

//       <div className="dashboard-grid">
       
//         <AnatomySection healthStatus={healthStatus} />

        
//         <div className="dashboard-right">
//           <div className="dashboard-subgrid">
//             <div className="status-cards">
//               <HealthCareStatusCards healthStatus={healthStatus} />
//             </div>
//             <div className="calendar-container">
//               <CalendarView calendarTimes={calendarTimes} appointments={appointments} />
//               <SimpleAppointmentCard appointments={calendarAppointments} />
//               <UpcomingSchedule upcomingSchedule={propUpcomingSchedule || upcomingSchedule} />
//             </div>
//           </div>

//           <div className="dashboard-bottom-section">
//             <ActivityFeed />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default DashboardMainContent;



import React from 'react';
import AnatomySection from './AnatomySection';
import HealthCareStatusCards from './HealthCareStatusCards';
import CalendarView from './CalendarView.jsx';
import SimpleAppointmentCard from './SimpleAppointmentCard.jsx';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import { calendarAppointments, upcomingSchedule } from '../data/appointments.js';
import '../styles/DashboardMainContent.css';

const DashboardMainContent = ({
  healthStatus,
  calendarTimes,
  appointments,
  upcomingSchedule: propUpcomingSchedule,
}) => {
  return (
    <main className="dashboard-main">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="dashboard-grid">
        {/* Left Side: Anatomy */}
        <AnatomySection healthStatus={healthStatus} />

        {/* Right Side: Cards + Calendar + Schedules */}
        <div className="dashboard-right">
          <div className="dashboard-subgrid">
            <div className="status-cards">
              <HealthCareStatusCards healthStatus={healthStatus} />
            </div>
            <div className="calendar-container">
              <CalendarView calendarTimes={calendarTimes} appointments={appointments} />
              <SimpleAppointmentCard appointments={calendarAppointments} />
              <UpcomingSchedule upcomingSchedule={propUpcomingSchedule || upcomingSchedule} />
            </div>
          </div>

          <div className="dashboard-bottom-section">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;