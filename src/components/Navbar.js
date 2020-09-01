import React from 'react';

const Navbar = () => {
    return(
        <nav className='nav wrapper blue darken-2'>
            <div className='container'>
                <a className='brand-logo'>Booking Guru</a>
                <ul className='right'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/bookings'>Bookings</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;