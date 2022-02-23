import React, {useEffect,useContext} from "react";
import './cartDrawer.css';
import { CartContext } from "../../Context";
import { Link } from "react-router-dom";
import { clear } from "@testing-library/user-event/dist/clear";

function CartDrawer({openCartDrawer,isOpen}) {

    const {cartItems,clearCart} = useContext(CartContext);

    const handleClearCart = ()=> {
        clearCart();
    }

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
                return <div className="itemInCart">
                    <div className="itemInCartImg">
                        <img src={product.image}/>
                    </div>
                    <div className="itemInCartInfo">
                        <h2>Product:{product.title}</h2>
                        <h2>Price:${product.price}</h2>
                        <h2>Color:{product.color}</h2>
                        <h2>Size:{product.size}</h2>
                    </div>
                    <div className="itemInCartQty">
                        <span>-</span>
                        {product.quantity}
                        <span>+</span>
                    </div>
                </div>
            })}
        </div>
        <button className="clearCartBtn" onClick={handleClearCart}>CLEAR CART</button>
    </div>
    );
}


export default CartDrawer;