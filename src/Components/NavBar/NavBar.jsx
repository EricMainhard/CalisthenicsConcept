import React from "react";
import './navbar.css';
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import NavIcons from "../NavIcons/NavIcons";

export default function NavBar(){
    return(
        <div className="navBar">
            <Logo/>
            <NavLinks/>
            <NavIcons/>
        </div>
    )
}