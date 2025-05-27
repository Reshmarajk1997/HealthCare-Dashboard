import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ navLinks }) => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-heading">GENERAL</h2>
      <nav className="sidebar-nav">
        {navLinks.map((link, index) => (
          <div
            key={index}
            className={`sidebar-link ${link.name === 'Dashboard' ? 'active' : ''}`}
          >
            <img src={link.icon} alt={`${link.name} icon`} className="sidebar-icon" />
            <span className="sidebar-link-text">{link.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;