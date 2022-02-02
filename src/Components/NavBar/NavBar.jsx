import React, {useState} from "react";
import './navbar.css';
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import NavIcons from "../NavIcons/NavIcons";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import { Link } from "react-router-dom";

export default function NavBar(){

    const [isOpen,setIsOpen] = useState(false)

    const handleOpenDrawer = (e)=> {
        if (e.target.classList.contains('openMenu')){
            setIsOpen(true);
        } else if (e.target.classList.contains('closeMenu')){
            setIsOpen(false);
        }
    }

    return(
        <div className="navBar">
            <Link to="/"><Logo/></Link>
            <NavLinks/>
            <NavIcons openDrawer={handleOpenDrawer}/>
            <MenuDrawer openDrawer={handleOpenDrawer} isOpen={isOpen}/>
        </div>
    )
}