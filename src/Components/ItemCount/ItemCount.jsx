import React, {useState} from 'react';
import './itemCount.css';

function ItemCount() {

    const [quantity,setQuantity] = useState(0)

    const handleQty = (e)=> {
        if (e.target.classList.contains('plus')){
            setQuantity(quantity + 1);
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
            <button className='plus normalBtn' onClick={handleQty}>
                <i class="plus fas fa-plus"></i>
            </button>
        </div>
        <button className="itemCountBtn normalBtn">
            ADD TO CART
        </button>
    </div>
    );
}

export default ItemCount;
