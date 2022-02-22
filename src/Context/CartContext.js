import React, {createContext} from "react";

let cartItems = [];

  function addProduct(item){
    for (let product in cartItems){
        if (product.id != item.id){
          cartItems.push(item)
        } else {
          alert('Item already in cart');
        }
      }
  }
  function deleteProduct(item){
    cartItems.filter(product => product.id != item.id);
  }
    
const CartContext = createContext({
    cartItems,
    addProduct,
    deleteProduct
});

export default CartContext;