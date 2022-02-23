import React, {useState,useContext} from 'react';
import { CartContext } from '../../Context';
import './itemCount.css';

function ItemCount({stock,single}) {
    const [quantity,setQuantity] = useState(0);
    const {addProduct} = useContext(CartContext);
    const [product,setProduct] = useState({});

    const handleAddToCart = () => {
        addProduct(product);
        console.log(product)
    }
    const handleQty = (e)=> {
        if (e.target.classList.contains('plus')){
            if (quantity < stock){
                setQuantity(quantity + 1);
                setProduct({...single,quantity});
            }
        } else if (e.target.classList.contains('minus')){
            setQuantity(quantity - 1);
            setProduct({...single,quantity});
        }
    }

    return (
    <div className='itemCount'>
        <div className="itemCountQty">
            <button type="button" className='minus normalBtn' disabled={quantity === 0 ? 'disabled' : ''} onClick={handleQty}>
                <i className="minus fas fa-minus"></i>
            </button>
            <span className='qty'>{quantity}</span>
            <button type="button" className='plus normalBtn' disabled={quantity === stock ? 'disabled' : ''} onClick={handleQty}>
                <i className="plus fas fa-plus"></i>
            </button>
        </div>
        <button className="itemCountBtn" onClick={handleAddToCart} disabled={quantity === stock ? 'disabled' : ''}>
            ADD TO CART
        </button>
        
    </div>
    );
}

export default ItemCount;
