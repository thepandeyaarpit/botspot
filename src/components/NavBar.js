import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <h2>BOTSPOT AI</h2>
                </div>
                <div className="items">
                    <i className="fas fa-phone-alt item"></i>
                    <i className="fas fa-search item"></i>
                    <i className="fas fa-bars item"></i>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
