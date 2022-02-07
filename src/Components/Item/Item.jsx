import React from "react";
import './item.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

function Item({product}){
    return(
        <div className="item">
            <Link to={`/products/${product.id}`} className="link">
                <div className="itemHeader">
                    <h3>{product.title}</h3>
                </div>
            </Link>
            <div className="itemBody">
                <div className="itemImg">
                    <img src={`/img/products/${product.image}`} alt={product.title} />
                </div>
            </div>
                <ItemCount stock={product.stock}/>
        </div>
    )
}

export default Item;