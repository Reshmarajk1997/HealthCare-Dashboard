import React from 'react'
import '../styles/Header.css'
import notificationIcon from '../assets/icons/bell (2).png';
import avatarIcon from '../assets/icons/avatar.png';
import addIcon from '../assets/icons/plus.png';
import searchIcon from '../assets/icons/search (1).png';


const Header = () => {
  return (
    <header>
        <div className='header_logo'><span color='#3fc3c9'>Health</span><span color='#1f1a51'>care.</span></div>
        <div className='header_search'>
            <img src={searchIcon} alt='Search Icon' className="header_search-icon" />
            <input 
            type='text'
            placeholder='Search'
            className="header_search-input"/>
        </div>
        <div className='header_icons'>
            <img src={notificationIcon} alt='Notifications' className='header_icon'/>
            <img src={avatarIcon} alt='User Avatar' className='header_avatar'/>
            <button className='header_add-button'>
                <img src={addIcon} alt='Add'/>
            </button>
        </div>
    </header>
  )
}

export default Header