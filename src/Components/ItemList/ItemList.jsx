import React from "react";
import './itemList.css';
import Item from '../Item/Item';

function ItemList({products,search}){
    return(
        <div className="itemsList">
            {products.map((product) => {
                return <Item key={product.id} product={product}/>
            })}
        </div>
    )
}

export default ItemList;