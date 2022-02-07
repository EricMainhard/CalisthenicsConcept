import React, {useState} from 'react';
import './itemCount.css';

function ItemCount({stock}) {

    const [quantity,setQuantity] = useState(0)

    const handleStockLimit = ()=> {
        alert('You have reached the limit of stock');
    }

    const handleQty = (e)=> {
        if (e.target.classList.contains('plus')){
            if (quantity < stock){
                setQuantity(quantity + 1);
            }
        } else if (e.target.classList.contains('minus')){
            setQuantity(quantity - 1);
        }
    }

    return (
    <div className='itemCount'>
        <div className="itemCountQty">
            <button className='minus normalBtn' disabled={quantity === 0 ? 'disabled' : ''} onClick={handleQty}>
                <i className="minus fas fa-minus"></i>
            </button>
            <span className='qty'>{quantity}</span>
            <button className='plus normalBtn' disabled={quantity === stock ? 'disabled' : ''} onClick={handleQty}>
                <i className="plus fas fa-plus"></i>
            </button>
        </div>
        <button className="itemCountBtn normalBtn">
            ADD TO CART
        </button>
    </div>
    );
}

export default ItemCount;
