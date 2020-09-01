import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        <nav className='nav wrapper blue darken-2'>
            <div className='container'>
                <a className='brand-logo' href='/'>Booking Guru</a>
                <ul className='right'>
                    <li><Link to='/'>Home</Link></li>
                    <li><NavLink to='/bookings'>Bookings</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;