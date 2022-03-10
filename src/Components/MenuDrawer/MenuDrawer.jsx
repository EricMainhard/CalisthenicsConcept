import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import './menuDrawer.css';
import { Link } from "react-router-dom";

function MenuDrawer({openDrawer,isOpen,categories}) {

    const {pathname} = useLocation();

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
            {categories.map(category => {
                return(
                <Link className={`link menuDrawerLink ${pathname.includes(category.title.toLowerCase()) && 'active-link'}`} key={category.id} to={`categories/${category.title.toLowerCase()}`} onClick={openDrawer}>
                   {category.title.toUpperCase()}
                </Link>
                )
            })}
            <Link className="link menuDrawerLink"to="/login">LOGIN</Link>
            <Link className="link menuDrawerLink"to="/register">REGISTER</Link>
        </div>
    </div>
    );
}


export default MenuDrawer;