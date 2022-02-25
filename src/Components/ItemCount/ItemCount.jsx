import React, {useState,useContext, useEffect} from 'react';
import { CartContext } from '../../Context';
import './itemCount.css';

function ItemCount({stock,single}) {
    const [quantity,setQuantity] = useState(0);
    const {addProduct} = useContext(CartContext);
    const [product,setProduct] = useState({});

    useEffect(()=>{
        setProduct({...single,quantity})
    },[single]);

    const handleAddToCart = () => {
        if (!product.color || !product.size){
            alert('Pick a color and a size');
            return
        } else if (quantity === 0){
            alert('Pick a quantity');
            return
        }
        addProduct(product);
    }
    const handleQty = (e)=> {
        if (e.target.classList.contains('plus')){
            if (quantity < stock){
                setQuantity(quantity + 1);
                setProduct({...single,quantity:quantity + 1});
            }
        } else if (e.target.classList.contains('minus')){
            setQuantity(quantity - 1);
            setProduct({...single,quantity:quantity - 1});
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
