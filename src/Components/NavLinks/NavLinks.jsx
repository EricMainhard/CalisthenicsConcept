import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navlinks.css';

export default function NavLinks({categories}) {

  const {pathname} = useLocation();

  return <div className="navLinks sm_hidden">
    <ul className="navLinksList">
      {categories.map(category => {
        return(
          <Link className="link" key={category.id} to={`categories/${category.title.toLowerCase()}`}>
            <li className={`navLink menuLink ${pathname.includes(category.title.toLowerCase()) && 'active-link'}`}>{category.title}</li> 
          </Link>
          )
      })}
    </ul>
</div>;
}