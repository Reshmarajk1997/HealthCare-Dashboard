import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import { iconMap } from './data/navigation.js';
import { healthIndicators } from './data/healthData.js';
import { calendarAppointments as calendarTimes } from './data/calendarData.js';
import { calendarAppointments, upcomingSchedule } from './data/appointments.js';
import './styles/App.css';

function App() {
  // Transform iconMap into navLinks array for Sidebar
  const navLinks = Object.keys(iconMap).map((name) => ({
    name,
    icon: iconMap[name],
  }));

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar navLinks={navLinks} />
        <DashboardMainContent
          healthStatus={healthIndicators}
          calendarTimes={calendarTimes}
          appointments={calendarAppointments}
          upcomingSchedule={upcomingSchedule}
        />
      </div>
    </div>
  );
}

export default App;