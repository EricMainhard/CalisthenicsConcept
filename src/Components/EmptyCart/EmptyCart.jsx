import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context';
import './emptyCart.css';


function EmptyCart() {
  
  const handleClearCart = useContext(CartContext);
  
  return (
    <div className='emptyCart'>
        <i className="far fa-frown-open"></i>
        You're cart is empty,
        <Link to="/products" className='link' onClick={handleClearCart}>
            go add something
        </Link>
    </div>
  )
}

export default EmptyCart