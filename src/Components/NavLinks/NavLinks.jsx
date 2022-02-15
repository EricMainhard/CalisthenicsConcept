import React from 'react';
import { Link } from 'react-router-dom';
import './navlinks.css';
import categories from '../../categories.json';

export default function NavLinks() {
  return <div className="navLinks">
    <ul className="navLinksList">
      {categories.map(category=>{
        return(
          <Link className="link" to={`categories/${category.name.toLowerCase()}`}>
            <li className="navLink menuLink">{category.name}</li> 
          </Link>
          )
      })}
    </ul>
</div>;
}