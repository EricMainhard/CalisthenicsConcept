import React from 'react';
import { useState } from 'react';
import './navicons.css';
import { Link } from 'react-router-dom';

export default function NavIcons({openDrawer}) {

    const [user,setUser] = useState(false)

    return (
    <>  
        <i className="navIcons menuIcon lg_hidden fas fa-ellipsis-h openMenu" 
        onClick={openDrawer}></i>
        <div className="navIcons">
            <i className="navIcon sm_hidden fas fa-search"></i>
            {user && <i className="navIcon sm_hidden fas fa-user"></i>}
            {user && <i className="navIcon sm_hidden fas fa-shopping-cart"></i>}
            {!user && <Link className="link sm_hidden" to="/login">LOGIN</Link>}
        </div>
    </>
    );
}
