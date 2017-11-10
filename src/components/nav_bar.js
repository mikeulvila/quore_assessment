import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <div className="top-nav">
                <div>
                    <div className="nav-brand">Quore</div>
                    <a className="drop-down" href="#">Tasks <i className="fa fa-angle-down"></i></a>
                </div>
                <div>
                    <ul>
                        <li className="lighter-text">Sandbox Hotel</li>
                        <li className="light-text">Scott</li>
                        <li className="icon-header-chat"></li>
                        <li className="icon-header-mail"></li>
                        <li className="icon-header-notification"></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;