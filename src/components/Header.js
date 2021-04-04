import React from 'react';
import './Header.css';
import logo from '../images/logo.png';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                <img src={logo} alt="Netflix"/> 
                </a>
            </div>
            <div className="header--user">

            </div>
        </header>
    );
}
