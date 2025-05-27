
import heartIcon from '../assets/icons/heart.png';
import teethIcon from '../assets/icons/tooth.png';
import handIcon from '../assets/icons/arm.png';
import eyeIcon from '../assets/icons/eye.png'
import checkupIcon from '../assets/icons/injection.png'
import neuroIcon from '../assets/icons/doctor.png'


export const calendarAppointments = [
  { day: 26, time: '09:00', type: 'Dentist', doctor: 'Dr. Cameron',icon:teethIcon },
  { day: 28, time: '11:00', type: 'Physiotherapy', doctor: 'Dr. Kevin',icon:handIcon },
];

export const upcomingSchedule = [
  { day: 'Thursday', 
    items:
     [{ title: 'Health checkup complete', time: '11:00',icon:checkupIcon}, 
        { title: 'Ophthalmologist', time: '14:00',icon: eyeIcon, }] },
  { day: 'Saturday', 
    items: [{ title: 'Cardiologist', time: '12:00', icon: heartIcon, },
         { title: 'Neurologist', time: '16:00' , icon:neuroIcon,}] },
];
