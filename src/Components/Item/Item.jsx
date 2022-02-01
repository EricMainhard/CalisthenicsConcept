import React from "react";
import './item.css';
import ItemCount from "../ItemCount/ItemCount";

function Item({product}){
    return(
        <div className="item">
            <div className="itemHeader">
                <h3>{product.title}</h3>
            </div>
            <div className="itemBody">
                <ItemCount/>
            </div>
        </div>
    )
}

export default Item;