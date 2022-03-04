import React, {useEffect,useContext} from "react";
import './cartDrawer.css';
import { CartContext } from "../../Context";
import { Link } from "react-router-dom";

function CartDrawer() {

    const {
        cartItems,
        clearCart,
        handleOpenCartDrawer,
        isCartOpen,
        deleteProduct,
        totalCart,
        addQuantity,
        susbstractQuantity} = useContext(CartContext);

    const handleClearCart = ()=> {
        clearCart();
        handleOpenCartDrawer();
    }

    const handleQuantity = (item,event) => {
        if (event.target.classList.contains('minus')){
            susbstractQuantity(item);
        } else if (event.target.classList.contains('plus')){
            addQuantity(item);
        }
    }

    const handleDeleteProduct = (e)=> {
        deleteProduct(e.target.dataset.id);
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
            {cartItems.map(product => {
                return <div className="itemInCart">
                    <div className="itemInCartImg">
                        <img src={`/img/products/${product.image}`}/>
                    </div>
                    <div className="itemInCartInfo">
                        <p>Product:{product.title}</p>
                        <p>Price:${product.price}</p>
                        <p>Color:{product.color}</p>
                        <p>Size:{product.size}</p>
                    </div>
                    <div className="itemInCartQty">
                        <button type="button" className='minus normalBtn' onClick={()=>{handleQuantity(product)}}>
                            <i className="minus fas fa-minus"></i>
                        </button>
                        {product.quantity}
                        <button type="button" className='plus normalBtn'  onClick={()=>{handleQuantity(product)}}>
                            <i className="plus fas fa-plus"></i>
                        </button>
                    </div>
                    <div id="deleteProduct">
                        <i className="fas fa-times deleteItem" data-id={product.id} onClick={handleDeleteProduct}/>
                    </div>
                </div>
            })}
        <span className="totalPrice">TOTAL: ${totalCart}</span>
        </div>
        <button className="clearCartBtn" onClick={handleClearCart}>CLEAR CART</button>
    </div>
    );
}


export default CartDrawer;