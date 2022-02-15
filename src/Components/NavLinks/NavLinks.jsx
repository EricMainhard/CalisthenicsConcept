import React from 'react';
import { Link } from 'react-router-dom';
import './navlinks.css';
import { Link } from 'react-router-dom';
import categories from '../../categories.json';

export default function NavLinks() {
  return <div className="navLinks">
    <ul className="navLinksList">
<<<<<<< HEAD
        <li className="navLink">
          <Link to='/categories/accesories' className='link'>
            Accesories
          </Link>
        </li>
        <li className="navLink">
          <Link to='/categories/clothes' className='link'>
            Clothes
          </Link>
        </li>
=======
      {categories.map(category=>{
        return(
          <Link className="link" to={`categories/${category.name.toLowerCase()}`}>
            <li className="navLink">{category.name}</li> 
          </Link>
          )
      })}
>>>>>>> 6a1e27ebc472834a425411ed74a9a4fa2c266b4f
    </ul>
</div>;
}