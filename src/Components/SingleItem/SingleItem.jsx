import React, {useState,useEffect} from 'react';
import './singleItem.css';

function SingleItem({single}) {

    function handleAddToCart(e){
        e.preventDefault()
    }

    function handleAddToWishlist(e){
        e.preventDefault()
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
            <form className='singleForm'>
            <div className="singleOptions">
                <div className="colors">
                        {single.colors.map(color => {
                            return (
                                <button type='button' className='colorBtn' style={{backgroundColor:color}}>

                                </button>
                            )
                        })}
                </div>
                <div className="sizes">
                    {single.sizes.map(size => {
                        return (
                            <button type='button' className='sizeBtn'>
                                {size}
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className="singleBtns">
                <button onClick={handleAddToCart}>
                    ADD TO CART
                </button>
                <button onClick={handleAddToWishlist}>
                    WISHLIST
                </button>
            </div>
            </form>
        </div>
    </div>
  );
}

export default SingleItem;
