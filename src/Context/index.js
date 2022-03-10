import React, {useState,createContext, useEffect} from 'react';

export const CartContext = createContext();

function CartProvider({children}){

    const [cartItems,setCartItems] = useState([]);
    const [totalCart,setTotalCart] = useState(0);
    const [isCartOpen,setIsCartOpen] = useState(false)
    const [isFormOpen,setIsFormOpen] = useState(false);

    useEffect(()=>{
        setTotalCart(cartItems && cartItems.reduce((prev,curr)=> prev + curr.quantity * curr.price ,0))
    },[updateTotal])
    
    useEffect(()=>{
        setCartItems(JSON.parse(localStorage.getItem('cart')));
    },[])

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
            localStorage.setItem('cart',JSON.stringify(cartItems));
            updateTotal();
            handleOpenCartDrawer();
        } else {
            setCartItems([...cartItems,item]);
            localStorage.setItem('cart',JSON.stringify(cartItems));
            updateTotal();
            handleOpenCartDrawer();
        }
    }

    function inCart(item){
        let i = cartItems && cartItems.findIndex(i => i.id === item.id);
        return i
    }

    const addQuantity = (item) => {
        let i = cartItems.indexOf(item);
        if (cartItems[i].quantity < cartItems[i].stock){
            cartItems[i].quantity = cartItems[i].quantity + 1;
            setCartItems([...cartItems]);
            localStorage.setItem('cart',JSON.stringify(cartItems));
        } else {
            alert('You have reached the stock limit')
            return
        }
        updateTotal();
    }

    const substractQuantity = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1
            setCartItems([...cartItems]);
            localStorage.setItem('cart',JSON.stringify(cartItems));
            updateTotal();
        } else {
            deleteProduct(item.id);
            setCartItems([...cartItems]);
            localStorage.setItem('cart',JSON.stringify(cartItems));
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
            localStorage.setItem('cart',JSON.stringify(newCart));
            updateTotal();
        } else {
            setCartItems([]);
            localStorage.removeItem('cart'); 
            handleOpenCartDrawer();
            setTotalCart(0);
        }
    }

    function clearCart(){
        setCartItems([]);
        localStorage.removeItem('cart'); 
        setTotalCart(0);
    }

    function handleOpenPurchaseForm(e){
        e.stopPropagation();
        console.log(e)
        setIsFormOpen(!isFormOpen);
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
            isCartOpen,
            isFormOpen,
            setIsFormOpen,
            handleOpenPurchaseForm
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;