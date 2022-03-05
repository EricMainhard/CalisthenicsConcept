import React from "react";
import './item.css';
import { Link } from 'react-router-dom';

function Item({product}){

    return(
        <div className="item">
                <div className="itemHeader">
                    <h3>{product.title}</h3>
                </div>
            
                <div className="itemBody">
                    <div className="itemImg">
                        <img src={`/img/products/${product.image}`} alt={product.title} />
                    </div>
                    <div className="itemMask">
                        <Link to={`/products/${product.id}`} className="link">
                            <button className="itemBtn">
                                VIEW
                            </button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default Item;