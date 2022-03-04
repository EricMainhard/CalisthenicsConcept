import React, {useState,createContext, useEffect} from 'react';

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
        let i = cartItems.findIndex(i => i.id === item.id);
        if (i > -1){
            let oldQuantity = cartItems[i].quantity;
            cartItems.splice(i,1);
            setCartItems([...cartItems,{...item, quantity: oldQuantity + item.quantity}]);
            updateTotal();
            handleOpenCartDrawer();
        } else {
            setCartItems([...cartItems,item]);
            updateTotal();
            handleOpenCartDrawer();
        }
    }

    const addQuantity = (item) => {
        console.log(item)
    }

    const substractQuantity = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1
            setCartItems([...cartItems]);
            updateTotal();
        } else {
            alert('Min quantity');
        }
    }

    function updateTotal(){
        const totalPrice = cartItems.reduce((prev,curr)=> prev + curr.quantity * curr.price ,0);
        return totalPrice;
        }

    function deleteProduct(item){
        cartItems.filter(product => product.id !== item.id);
        setCartItems([...cartItems]);
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
            deleteProduct,
            clearCart,
            substractQuantity,
            addQuantity,
            totalCart,
            handleOpenCartDrawer,
            isCartOpen
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;