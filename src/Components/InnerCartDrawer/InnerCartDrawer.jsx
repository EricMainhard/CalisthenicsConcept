import React, { useContext } from 'react'
import { CartContext } from '../../Context'
import EmptyCart from '../EmptyCart/EmptyCart';
import './innerCartDrawer.css';

function InnerCartDrawer() {

    const {
        cartItems,
        deleteProduct,
        addQuantity,
        substractQuantity
    } = useContext(CartContext);

    const handleQuantity = (item,e) => {
        if (e.target.classList.contains('minus')){
            substractQuantity(item);
        } else if (e.target.classList.contains('plus')){
            addQuantity(item);
        }
    }

    const handleDeleteProduct = (e)=> {
        deleteProduct(e.target.dataset.id);
    }

  return (
    <div className='innerCartDrawer'>

    
    { cartItems && cartItems.map(product => {
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
                <button type="button" className='cartDrawerMinus normalBtn' onClick={(e)=>{handleQuantity(product,e)}}>
                    <i className="minus fas fa-minus"></i>
                </button>
                {product.quantity}
                <button type="button" className='cartDrawerPlus normalBtn'  onClick={(e)=>{handleQuantity(product,e)}}>
                    <i className="plus fas fa-plus"></i>
                </button>
            </div>
            <div id="deleteProduct">
                <i className="fas fa-trash deleteItem" data-id={product.id} onClick={handleDeleteProduct}/>
            </div>
        </div>
    })}

    {cartItems ? cartItems.length === 0 && <EmptyCart/> : ''}

  </div>
  )
}

export default InnerCartDrawer