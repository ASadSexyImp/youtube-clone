import React from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon  from '@material-ui/icons/Search';
import VideoCallIcon  from '@material-ui/icons/VideoCall';
import AppsIcon  from '@material-ui/icons/Apps';
import NotificationsIcon  from '@material-ui/icons/Notifications';
import Avator  from '@material-ui/core/Avatar';

function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <MenuIcon />
            <img
            className='header_logo'
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt=""
            />
        </div>

        <div className='header_input'>
            <input placeholder='search' type="text" />
            <SearchIcon className='header_inputButton'/>
        </div>

        <div className='header_icons'>
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avator />
        </div>
    </div>
)
}

export default Header;