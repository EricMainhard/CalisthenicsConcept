import React, { useContext, useState, useRef } from 'react';
import {CartContext} from '../../Context/';
import './navicons.css';
import { Link } from 'react-router-dom';

export default function NavIcons({openDrawer,openCartDrawer}) {
    const [user,setUser] = useState(false)
    const {cartItems,searchTerms,setSearchTerms,handleSearch} = useContext(CartContext);

    const searchForm = document.querySelector('.searchForm');
    const searchIcon = document.querySelector('.searchIcon');

    const handleSearchClick = () => {
        alert('This functionality is not ready yet');
        return
        searchForm.style.transform = 'scaleX(100%)';
    }

    return (
    <>  
        <i className="navIcons menuIcon lg_hidden fas fa-ellipsis-h openMenu" 
        onClick={openDrawer}></i>
        <div className="navIcons">
            <form className="searchForm">
                <input type="search" onChange={(e)=>{handleSearch(e)}} value={searchTerms}></input>
            </form>
            <i className="navIcon sm_hidden fas fa-search searchIcon" onClick={handleSearchClick}></i>
            { <Link className="link sm_hidden" to={user ? "/profile" : "/login"}>
                <i className="navIcon sm_hidden fas fa-user"></i>
            </Link> }
            <i className="navIcon fas fa-shopping-cart openCart" onClick={openCartDrawer}></i>
            <span className="sm_hidden">{cartItems && cartItems.length}</span>

        </div>
    </>
    );
}
