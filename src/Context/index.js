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
        localStorage.getItem('cart') ? setCartItems(JSON.parse(localStorage.getItem('cart'))) : setCartItems([]);
    },[])

    useEffect(()=>{
        cartItems.length > 0 ? localStorage.setItem('cart',JSON.stringify(cartItems))
        : localStorage.removeItem('cart');
    },[cartItems])

    const handleOpenCartDrawer = ()=> {
        if (isCartOpen){
            setIsCartOpen(false);
        } else {
            setIsCartOpen(true);
        }
    }

    function addProduct(item){
        let i = inCart(item);
        console.log(i)
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
        let i = cartItems && cartItems.findIndex(i => i.id === item.id);
        return i
    }

    const addQuantity = (item) => {
        let i = cartItems.indexOf(item);
        console.log(i)
        if (cartItems[i].quantity < cartItems[i].stock){
            cartItems[i].quantity = cartItems[i].quantity + 1;
            setCartItems([...cartItems]);
            
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
            
            updateTotal();
        } else {
            deleteProduct(item.id);
            setCartItems([...cartItems]);
            
            updateTotal();
        }
    }

    function updateTotal(){
        const totalPrice = cartItems.reduce((prev,curr)=> prev + curr.quantity * curr.price ,0);
        setTotalCart(totalPrice);
        }

    function deleteProduct(item){
        if (cartItems.length > 0){
            let newCart = cartItems.filter(product => product.id != item);
            setCartItems(newCart);
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