import React, {useState} from 'react';
import './singleItem.css';
import ItemCount from "../ItemCount/ItemCount";

function SingleItem({single}) {

    const [singleProduct,setSingleProduct] = useState({
    title: single.title,
    price: single.price,
    id: single.id,
    image: single.image,
    stock: single.stock
});


    return(
        <div className='singleContainer container'>
            <div className="singleImg">
                <img src={`/img/products/${single.image}`} alt="" />
            </div>
            <div className="singleInfo">
                <h3 className="singleTitle">{single.title}</h3>
                <h3 className="singlePrice">${single.price} USD</h3>
                <p className="singleDescription">
                    {single.description}
                </p>
                <div className='singleForm'>
                    <ItemCount stock={single.stock} single={singleProduct}/>
                </div>
            </div>
        </div>
);
}

export default SingleItem;
