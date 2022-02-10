import React from 'react';
import './navlinks.css';
import { Link } from 'react-router-dom';
import categories from '../../categories.json';

export default function NavLinks() {
  return <div className="navLinks">
    <ul className="navLinksList">
      {categories.map(category=>{
        return(
          <Link className="link" to={`categories/${category.name.toLowerCase()}`}>
            <li className="navLink">{category.name}</li> 
          </Link>
          )
      })}
    </ul>
</div>;
}