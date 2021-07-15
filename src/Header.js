import React from 'react'
import './Header.css'
import { BsSearch } from 'react-icons/bs';
import { GrLanguage } from 'react-icons/gr';
import { MdExpandMore } from 'react-icons/md';
import { Avatar } from '@material-ui/core';

import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className="header">
            <Link to='/home'>
                <img 
                className="header_icon"
                src="https://cdn.designrush.com/uploads/inspiration_images/4810/990__1511452487_364_Airbnb.png"
                alt=""/>
            </Link>
            <div className="header-center">
                <input type="text" placeholder='Search'/>
                <BsSearch/>
            </div>

            <div className="header-right">
                <h4>Become A Host</h4>
                <GrLanguage/>
                <MdExpandMore/>
                <Avatar alt="" src="/broken-image.jpg" />
            </div>
        </div>
    )
}
export default Header
