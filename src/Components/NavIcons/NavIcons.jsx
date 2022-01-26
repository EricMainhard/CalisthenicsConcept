import React from 'react';
import './navicons.css';

export default function NavIcons() {
    return (
    <>  
        <i className="navIcons menuIcon lg_hidden fas fa-ellipsis-h"></i>
        <div className="navIcons">
            <i className="navIcon sm_hidden fas fa-search"></i>
            <i className="navIcon sm_hidden fas fa-user"></i>
            <i className="navIcon sm_hidden fas fa-shopping-cart"></i>
        </div>
    </>
    );
}
