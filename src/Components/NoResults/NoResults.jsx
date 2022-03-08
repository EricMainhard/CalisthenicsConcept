import React from 'react'
import { Link } from 'react-router-dom';
import './noResults.css';

function NoResults() {
  return (
    <div className='noResultsContainer'>
        We're sorry! No products found in here! 
        <Link to="/products">Go back to products</Link>
    </div>
  )
}

export default NoResults