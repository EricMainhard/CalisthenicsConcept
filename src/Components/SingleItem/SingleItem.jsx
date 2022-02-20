import React, {useState} from 'react';
import './singleItem.css';
import ItemCount from "../ItemCount/ItemCount";

function SingleItem({single}) {
 
    const [singleProduct,setSingleProduct] = useState({});

    function handleSize(size){
        setSingleProduct({...singleProduct,
            size})
    }
    function handleColor(color){
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
                                <div type='button' key={color} className='colorBtn' onClick={()=>{handleColor(color)}} style={{backgroundColor:color}} >

                                </div>
                            )
                        })}
                    </div>
                    <div className="sizes">
                        {single.sizes.map(size => {
                            return (
                                    <div type='button' key={size} className='sizeBtn' onClick={()=>{handleSize(size)}}>
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
