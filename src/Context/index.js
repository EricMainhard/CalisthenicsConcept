import React, {useState,createContext} from 'react';

export const CartContext = createContext();

function CartProvider({children}){

    const [cartItems,setCartItems] = useState([]);
    const [isCartOpen,setIsCartOpen] = useState(false)

    const handleOpenCartDrawer = ()=> {
        if (isCartOpen){
            setIsCartOpen(false);
        } else {
            setIsCartOpen(true);
        }
    }

    function addProduct(item){
        if (productInCart(item)){
            let repeatedProduct = cartItems.find(product => product === item);
            console.log(repeatedProduct);
            let i = cartItems.indexOf(repeatedProduct);
            let cartItem = cartItems[i];
            cartItem.quantity += item.quantity;
            cartItems.splice(i,1,cartItem);
            setCartItems([...cartItems]);
            handleOpenCartDrawer();
        } else {
            setCartItems([...cartItems,item]);
            handleOpenCartDrawer();
        }
    }

    function productInCart(item){
        return cartItems.some(product => product == item);
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
            clearCart,
            handleOpenCartDrawer,
            isCartOpen
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;