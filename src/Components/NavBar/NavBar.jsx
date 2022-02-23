import React, {useState} from "react";
import './navbar.css';
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import NavIcons from "../NavIcons/NavIcons";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import CartDrawer from "../CartDrawer/CartDrawer";
import { Link } from "react-router-dom";

export default function NavBar(){

    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const [isCartOpen,setIsCartOpen] = useState(false)

    const handleOpenDrawer = (e)=> {
        if (e.target.classList.contains('openMenu')){
            setIsMenuOpen(true);
        } else if (e.target.classList.contains('closeMenu')){
            setIsMenuOpen(false);
        }
    }

    const handleOpenCartDrawer = (e)=> {
        if (e.target.classList.contains('openCart')){
            setIsCartOpen(true);
        } else if (e.target.classList.contains('closeCart')){
            setIsCartOpen(false);
        }
    }

    return(
        <div className="navBar">
            <Link to="/"><Logo/></Link>
            <NavLinks/>
            <NavIcons openDrawer={handleOpenDrawer} openCartDrawer={handleOpenCartDrawer}/>
            <MenuDrawer openDrawer={handleOpenDrawer} isOpen={isMenuOpen}/>
            <CartDrawer openCartDrawer={handleOpenCartDrawer} isOpen={isCartOpen}/>
        </div>
    )
}