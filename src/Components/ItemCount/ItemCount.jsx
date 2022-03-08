import React, {useState,useContext, useEffect, useRef} from 'react';
import { CartContext } from '../../Context';
import './itemCount.css';

function ItemCount({stock,single}) {
    const [quantity,setQuantity] = useState(0);
    const {addProduct,inCart,deleteProduct,clearCart} = useContext(CartContext);
    const [product,setProduct] = useState({});
    const addBtn = useRef();

    useEffect(()=>{
        setProduct({...single,quantity})
    },[single]);

    useEffect(()=>{
        let i = inCart(product);
        if (i > -1){
            addBtn.current.disabled = true;
            addBtn.current.textContent = 'IN CART';
        } else {
            addBtn.current.disabled = false;
            addBtn.current.textContent = 'ADD TO CART';
        }
    },[addProduct,deleteProduct,clearCart])

    const handleAddToCart = (e) => {
        if (quantity > 0){
            addProduct(product)
        } else {
            alert('You have to select a quantity');
        }      
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
            <button type="button" className='minus normalBtn' disabled={quantity === 0 ? 'disabled' : ''} onClick={(e)=>{handleQty(e)}}>
                <i className="minus fas fa-minus"></i>
            </button>
            <span className='qty'>{quantity}</span>
            <button type="button" className='plus normalBtn' disabled={quantity === stock ? 'disabled' : ''} onClick={(e)=>{handleQty(e)}}>
                <i className="plus fas fa-plus"></i>
            </button>
        </div>
        <button className="itemCountBtn" onClick={(e)=>{handleAddToCart(e)}} ref={addBtn} disabled={quantity === stock ? 'disabled' : ''}>
            ADD TO CART
        </button>
        
    </div>
    );
}

export default ItemCount;
