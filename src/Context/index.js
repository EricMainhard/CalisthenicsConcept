import React, {useState,createContext, useEffect} from 'react';

export const CartContext = createContext();

function CartProvider({children}){

    const [cartItems,setCartItems] = useState([]);
    const [totalCart,setTotalCart] = useState(0);
    const [isCartOpen,setIsCartOpen] = useState(false)

    useEffect(()=>{
        setTotalCart(cartItems.reduce((prev,curr)=> prev + curr.quantity * curr.price ,0))
    },[updateTotal])

    const handleOpenCartDrawer = ()=> {
        if (isCartOpen){
            setIsCartOpen(false);
        } else {
            setIsCartOpen(true);
        }
    }

    function addProduct(item){
        let i = inCart(item);
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

    function inCart(item){
        let i = cartItems.findIndex(i => i.id === item.id);
        return i
    }

    const addQuantity = (item) => {
        let i = cartItems.indexOf(item);
        cartItems[i].quantity = cartItems[i].quantity + 1;
        updateTotal();
    }

    const substractQuantity = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1
            setCartItems([...cartItems]);
            updateTotal();
        } else {
            deleteProduct(item.id);
            updateTotal();
        }
    }

    function updateTotal(){
        const totalPrice = cartItems.reduce((prev,curr)=> prev + curr.quantity * curr.price ,0);
        setTotalCart(totalPrice);
        }

    function deleteProduct(item){
        if (cartItems.length >= 1){
            let newCart = cartItems.filter(product => product.id != item);
            setCartItems(newCart);
            updateTotal();
        } else {
            setCartItems([]);
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
            inCart,
            handleOpenCartDrawer,
            isCartOpen
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;