import React, {useEffect,useContext} from "react";
import './cartDrawer.css';
import InnerCartDrawer from "../InnerCartDrawer/InnerCartDrawer";
import PurchaseForm from "../PurchaseForm/PurchaseForm";
import { CartContext } from "../../Context";

function CartDrawer() {

    const {
        cartItems,
        totalCart,
        clearCart,
        handleOpenCartDrawer,
        isCartOpen,
        handleOpenPurchaseForm
        } = useContext(CartContext);

    const handleClearCart = ()=> {
        clearCart();
        handleOpenCartDrawer();
    }

    useEffect(()=>{
        if (isCartOpen){
            document.querySelector('.cartDrawer').style.transform = 'translateX(0%)';
        } else {
            document.querySelector('.cartDrawer').style.transform = 'translateX(150%)';
        }
    },[handleOpenCartDrawer,isCartOpen])

  return (
    <div className="cartDrawer">
        <i className="fas fa-times closeCart" onClick={handleOpenCartDrawer}/>
        <div className="cartDrawerItems">
            <InnerCartDrawer/>
            {cartItems ? cartItems.length > 0 && <span className="totalPrice">TOTAL: ${totalCart}</span> : ''}
        </div>
        <div className="cartDrawerBtns">
            <button className="goToPayBtn" onClick={(e)=>{handleOpenPurchaseForm(e)}}>GO TO PAY</button>
            <button className="clearCartBtn" onClick={handleClearCart}>CLEAR CART</button>
        </div>
    </div>
    );
}


export default CartDrawer;