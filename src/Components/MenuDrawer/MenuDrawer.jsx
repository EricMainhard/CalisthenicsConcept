import React from "react";
import { useEffect } from "react/cjs/react.development";
import './menuDrawer.css';
import { Link } from "react-router-dom";

function MenuDrawer({openDrawer,isOpen}) {

    useEffect(()=>{
        if (isOpen){
            document.querySelector('.menuDrawer').style.transform = 'translateX(0%)';
        } else {
            document.querySelector('.menuDrawer').style.transform = 'translateX(150%)';
        }
    },[openDrawer])

  return (
    <div className="menuDrawer">
        <i className="fas fa-times closeMenu" onClick={openDrawer}/>
        <div className="menuDrawerLinks">
            <Link className="link menuDrawerLink"to="/login">LOGIN</Link>
            <Link className="link menuDrawerLink"to="/register">REGISTER</Link>
        </div>
    </div>
    );
}


export default MenuDrawer;