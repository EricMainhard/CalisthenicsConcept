import React, {createContext} from "react";

let cartItems = [];

  function addProduct(item){
    for (product in cartItems){
        if (product.id != item.id){
          cartItems.push(item)
        } else {
          alert('Item already in cart');
        }
      }
  }
  function deleteProduct(item){
    cartItems.filter(products => product.id != item.id);
  }
    
const CartContext = createContext({
    cartItems,
    addProduct,
    deleteProduct
});

export default CartContext;