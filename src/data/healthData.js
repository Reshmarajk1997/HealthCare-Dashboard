import heartIcon from '../assets/icons/heart.png';
import lungsIcon from '../assets/icons/lungs (1).png';
import teethIcon from '../assets/icons/tooth.png';
import boneIcon from '../assets/icons/bone.png';
import legIcon from '../assets/icons/leg.png';

export const healthIndicators = [
  { name: "Healthy Heart", status: "healthy", position: "chest", icon: heartIcon },
  { name: "Lungs", status: "critical", position: "lungs", date: "26 Oct 2021", icon: lungsIcon },
  { name: "Teeth", status: "healthy", position: "teeth", date: "26 Oct 2021", icon: teethIcon },
  { name: "Bone", status: "warning", position: "bone", date: "26 Oct 2021", icon: boneIcon },
  { name: "Healthy Leg", status: "blue", position: "leg", icon: legIcon },
];
