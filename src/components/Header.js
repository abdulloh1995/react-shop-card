import React from 'react';

const Header = () => {
    return (
        <nav className="blue darken-4">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo right">Shop Card</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="#">Repo</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;