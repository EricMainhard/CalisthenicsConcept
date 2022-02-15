import React from 'react';
import { Link } from 'react-router-dom';
import './navlinks.css';

export default function NavLinks() {
  return <div className="navLinks">
    <ul className="navLinksList">
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
    </ul>
</div>;
}
