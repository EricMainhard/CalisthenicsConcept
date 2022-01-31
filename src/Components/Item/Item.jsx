import React from "react";
import './item.css';

function Item({product}){
    return(
        <div className="item">
            <div className="itemHeader">
                <h3>{product.title}</h3>
            </div>
            <div className="itemBody"></div>
        </div>
    )
}

export default Item;