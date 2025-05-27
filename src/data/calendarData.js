
import handIcon from '../assets/icons/arm.png';
import teethIcon from '../assets/icons/tooth.png';


// Time slots for each day
export const calendarTimes = {
  "25": ["10:00", "11:00", "12:00", ],
  "26": ["08:00","09:00", "11:00"],
  "27": ["12:00", "-", "13:00"],
  "28": ["10:00", "11:00","-"],
  "29": ["-","14:00", "16:00"],
  "30": ["12:00","14:00", "15:00"],
  "31": ["09:00", "10:00","11:00"],
};

// Appointment details
export const calendarAppointments = [
  { day: 26, time: '09:00', type: 'Dentist', doctor: 'Dr. Cameron', icon: teethIcon },
  { day: 28, time: '11:00', type: 'Physiotherapy', doctor: 'Dr. Kevin', icon: handIcon },
];