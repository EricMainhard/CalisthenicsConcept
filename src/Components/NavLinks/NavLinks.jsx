import React, {useEffect,useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navlinks.css';

export default function NavLinks() {

  const {pathname} = useLocation();

  useEffect(()=>{
    console.log()
  },[pathname])

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
            <li className={`navLink menuLink ${pathname.includes(category.title.toLowerCase()) && 'active-link'}`}>{category.title}</li> 
          </Link>
          )
      })}
    </ul>
</div>;
}