import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <div className="top-nav">
                <div className="float-right">
                    <p className="lighter-text">Sandbox Hotel</p>
                    <p className="light-text">Scott</p>
                    <ul className="icon-group">
                        <li className="icon-header-chat"></li>
                        <li className="icon-header-mail"></li>
                        <li className="icon-header-notification"></li>
                    </ul>
                </div>
                <div className="nav-brand">Quore</div>
                <a className="drop-down" href="#">Tasks <i className="fa fa-angle-down"></i></a>
            </div>
        </nav>
    );
};

export default NavBar;