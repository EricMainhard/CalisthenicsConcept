import React, {useState,useEffect,useContext} from 'react';
import { CartContext } from '../../Context/';
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

    const info = useContext(CartContext);

    function handleSize(size,e){
        document.querySelectorAll('.sizeBtn').forEach(btn => {
            btn.style.border = 'none';
        });
        e.target.style.border = '1px solid black';
        setSingleProduct({...singleProduct,
            size})
    }
    function handleColor(color,e){
        document.querySelectorAll('.colorBtn').forEach(btn => {
            btn.style.border = 'none';
        });
        e.target.style.border = '1px solid black';
        setSingleProduct({...singleProduct,
            color})
    }

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
                <div className="singleOptions">
                    <div className="colors">
                        {single.colors.map(color => {
                            return (
                                <div type='button' key={color} className='colorBtn' onClick={(e)=>{handleColor(color,e)}} style={{backgroundColor:color}} >

                                </div>
                            )
                        })}
                    </div>
                    <div className="sizes">
                        {single.sizes.map(size => {
                            return (
                                    <div type='button' key={size} className='sizeBtn' onClick={(e)=>{handleSize(size,e)}}>
                                        {size}
                                    </div>
                                )
                        })}
                    </div>
                </div>
                <ItemCount stock={single.stock} single={singleProduct}/>
                </div>
            </div>
        </div>
);
}

export default SingleItem;
