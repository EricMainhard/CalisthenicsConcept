import React from "react";

import './navbar.css';

export default function NavBar(){
    return(
        <div className="navBar">
            <div className="navLogo">
                <img src="/img/logoDK.png" className="DKlogo"/>
                <img src="/img/logoMB.png" className="MBlogo"/>
            </div>
            <div className="navLinks">
                <ul className="navLinksList">
                    <li className="navLink">Materials</li>
                    <li className="navLink">Indumentary</li>
                </ul>
            </div>
            <div className="navIcons">
                <i className="navIcon fas fa-search"></i>
                <i className="navIcon fas fa-user"></i>
                <i className="navIcon fas fa-shopping-cart"></i>
            </div>
        </div>
    )
}