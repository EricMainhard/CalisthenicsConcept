import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './navlinks.css';

export default function NavLinks() {

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
  
  return <div className="navLinks">
    <ul className="navLinksList">
      {categories.map(category => {
        return(
          <Link className="link" key={category.id} to={`categories/${category.title.toLowerCase()}`}>
            <li className="navLink menuLink">{category.title}</li> 
          </Link>
          )
      })}
    </ul>
</div>;
}