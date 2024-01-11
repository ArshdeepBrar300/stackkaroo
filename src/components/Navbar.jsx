import React from 'react'
import '../App.css';
import Menu from '../assets/menu.png'
function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
            </div>
            <div className='sidebar'>
                <img src={Menu} />
            </div>
            <div className='navbar-items'>
                <div className='navbar-item'>Home</div>
                <div className='navbar-item'>About Us</div>
                <div className='navbar-item'>Work</div>
                <div className='navbar-item'>Services</div>
                <div className='navbar-item'>Clients</div>
                <div className='navbar-item'>Team</div>
                <div className='navbar-item'>Contact Us</div>
            </div>

        </div>
    )
}

export default Navbar