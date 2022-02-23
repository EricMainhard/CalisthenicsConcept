import React, {useState,createContext} from 'react';

export const CartContext = createContext();

function CartProvider({children}){

    const [cartItems,setCartItems] = useState([]);

    function addProduct(item){
        if (productInCart(item)){
            console.log('Product in cart');
            let repeatedProduct = cartItems.find(product => product.id === item.id);
            let i = cartItems.indexOf(repeatedProduct);
            let cartItem = cartItems[i];
            cartItem.quantity = cartItem.quantity + item.quantity;
            debugger
            cartItems.splice(i,1,cartItem);
            setCartItems([...cartItems]);
        } else {
            setCartItems([...cartItems,item]);
        }
    }

    function productInCart(item){
        return cartItems.some(product => product.id == item.id);
    }

    function deleteProduct(item){
    cartItems.filter(product => product.id !== item.id);
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