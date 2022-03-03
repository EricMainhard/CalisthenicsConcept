import React, {useState,createContext} from 'react';

export const CartContext = createContext();

function CartProvider({children}){

    const [cartItems,setCartItems] = useState([]);
    const [totalCart,setTotalCart] = useState(0);
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
            let i = cartItems.indexOf(repeatedProduct);
            let cartItem = cartItems[i];
            cartItem.quantity += item.quantity;
            cartItems.splice(i,1,cartItem);
            setCartItems([...cartItems]);
            updateTotal();
            handleOpenCartDrawer();
        } else {
            setCartItems([...cartItems,item]);
            updateTotal();
            handleOpenCartDrawer();
        }
    }

    function updateTotal(){
        console.log(cartItems)
        cartItems.forEach((product)=>{
            let totalProduct = (product.quantity * product.price);
            console.log((product.price * product.quantity))
            setTotalCart(totalCart + totalProduct);
        })
    }

    function productInCart(item){
        return cartItems.some(product => product === item);
    }

    function deleteProduct(item){
        cartItems.filter(product => product.id !== item.id);
        setCartItems([cartItems]);
        updateTotal();
        if (cartItems === []){
            handleOpenCartDrawer();
            setTotalCart(0);
        }
    }

    function clearCart(){
        setCartItems([]);   
        setTotalCart(0);
    }

    return(
        <CartContext.Provider value={{
            cartItems,
            addProduct,
            productInCart,
            deleteProduct,
            clearCart,
            totalCart,
            handleOpenCartDrawer,
            isCartOpen
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;