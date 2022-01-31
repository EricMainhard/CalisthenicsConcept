import React, {useState,useEffect} from "react";
import './itemList.css';
import Item from '../Item/Item';

function ItemList({products}){

    return(
        <div className="itemsList">
            {products.map((product,index) => {
                return <Item key={index} product={product}/>
            })}
        </div>
    )
}

export default ItemList;