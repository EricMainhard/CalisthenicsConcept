import React, {useState,createContext} from 'react';

export const CartContext = createContext();

function CartProvider({children}){

    const [cartItems,setCartItems] = useState([]);

    function addProduct(item){
        console.log(item);
        cartItems.push(item);
    }

    function productInCart(item){
        cartItems.find(product => product.id == item.id)
    }

    function deleteProduct(item){
    cartItems.filter(product => product.id != item.id);
    }

    function clearCart(){
        setCartItems([]);
    }

    return(
        <CartContext.Provider value={{
            cartItems,
            addProduct,
            productInCart,
            deleteProduct,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;