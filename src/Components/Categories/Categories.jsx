import React from 'react'
import { Link } from 'react-router-dom'
import categories from '../../categories.json';
import './categories.css';

function Categories() {

  return (
    <div className='categories container'>
        {categories.map(category => {
            return (
            <div className='catCard'>
                <Link to={`/categories/${category.name.toLowerCase()}`} className="link">
                    <button className="catCardBtn">
                        <h3>{category.name}</h3>
                    </button>
                </Link>
            </div>
            )
        })
        }
    </div>
  )
}

export default Categories