import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
            <h2 style={{color:'white'}}>Meal DB</h2>
            </div>
            <div>
            <a href="Home">Home</a>
                <a href="Shop">Shop</a>
                <a href="About">About</a>
                <a href="Log-In">Log-In</a>
            </div>
        </div>
    );
};

export default Header;