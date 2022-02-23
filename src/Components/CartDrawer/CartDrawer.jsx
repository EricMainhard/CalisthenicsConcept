import React, {useEffect,useContext} from "react";
import './cartDrawer.css';
import { CartContext } from "../../Context";
import { Link } from "react-router-dom";

function CartDrawer({openCartDrawer,isOpen}) {

    const {cartItems} = useContext(CartContext);

    useEffect(()=>{
        if (isOpen){
            document.querySelector('.cartDrawer').style.transform = 'translateX(0%)';
        } else {
            document.querySelector('.cartDrawer').style.transform = 'translateX(150%)';
        }
    },[openCartDrawer])

  return (
    <div className="cartDrawer">
        <i className="fas fa-times closeCart" onClick={openCartDrawer}/>
        <div className="cartDrawerItems">
            {cartItems.map(product => {
                return <h2>{product.title}</h2>
            })}
        </div>
    </div>
    );
}


export default CartDrawer;