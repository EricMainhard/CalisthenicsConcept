import React, {useState,useContext} from "react";
import './navbar.css';
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import NavIcons from "../NavIcons/NavIcons";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import CartDrawer from "../CartDrawer/CartDrawer";
import { CartContext } from "../../Context";
import { Link } from "react-router-dom";

export default function NavBar(){

    const {handleOpenCartDrawer} = useContext(CartContext);
    const [isMenuOpen,setIsMenuOpen] = useState(false)

    const [categories,setCategories] = useState([
        {
          id:"accesories",
          title: "Accesories"
        },
        {
          id:"clothes",
          title: "Clothes"
        }
      ]);

    const handleOpenDrawer = (e)=> {
        if (e.target.classList.contains('openMenu')){
            setIsMenuOpen(true);
        } else if (e.target.classList.contains('closeMenu')){
            setIsMenuOpen(false);
        }
    }

    return(
        <div className="navBar">
            <Link to="/"><Logo/></Link>
            <NavLinks categories={categories}/>
            <NavIcons openDrawer={handleOpenDrawer} openCartDrawer={handleOpenCartDrawer}/>
            <MenuDrawer openDrawer={handleOpenDrawer} isOpen={isMenuOpen} categories={categories}/>
            <CartDrawer/>
        </div>
    )
}