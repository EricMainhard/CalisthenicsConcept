import React, { useContext, useState } from 'react';
import {CartContext} from '../../Context/';
import './navicons.css';
import { Link } from 'react-router-dom';

export default function NavIcons({openDrawer,openCartDrawer}) {
    const [user,setUser] = useState(true)
    const {cartItems} = useContext(CartContext);

    return (
    <>  
        <i className="navIcons menuIcon lg_hidden fas fa-ellipsis-h openMenu" 
        onClick={openDrawer}></i>
        <div className="navIcons">
            <i className="navIcon sm_hidden fas fa-search"></i>
            {user && <i className="navIcon sm_hidden fas fa-user"></i>}

            {user && <i className="navIcon fas fa-shopping-cart openCart" onClick={openCartDrawer}></i>}
            <span className="sm_hidden">{cartItems && cartItems.length}</span>

            {!user && <Link className="link sm_hidden" to="/login">LOGIN</Link>}
        </div>
    </>
    );
}
