import React, { useContext, useState, useRef } from 'react'
import reactDom from 'react-dom';
import { CartContext } from '../../Context';
import './purchaseForm.css';
import { collection, addDoc, getFirestore } from 'firebase/firestore'

function PurchaseForm() {

  const form = useRef(null);

  const handleModalContainerClick = (e) => {e.stopPropagation();}

  const [formData,setFormData] = useState({});

  const {isFormOpen,handleOpenPurchaseForm,handleOpenCartDrawer,totalCart,cartItems,clearCart} = useContext(CartContext);

  const handleChange = (e) => {
    if (e.target.value.trim() === ''){
      e.target.style.border = '1px solid red';
    } else {
      e.target.style.border = '1px solid green';
      setFormData({...formData, [e.target.name]: e.target.value})
    }
  }

  const handleSubmitForm = (e) => {
    if (formData.email !== formData.emailConfirmation){
      alert('error');
      return
    } else {
      let order = {}
      order.buyer = formData
      order.total = totalCart
      order.date  = Date.now();
      order.id = Date.now();
      order.products = cartItems.map(prod => {
          const id = prod.id;
          const title = prod.title;
          const price = prod.price;
          const quantity = prod.quantity;
          
          return {id, title, quantity, price}
      })
      const db = getFirestore()
      const orderCollection = collection(db, "orders")
      addDoc(orderCollection, order);
      let d = document.querySelector('.innerPurchaseForm');
      d.innerHTML = `
      <h1>YOUR ORDER IS READY!</h1> 
      <p>Order id: ${order.id}</p>
      
      <p>Name:${order.buyer.firstName}</p>
      <p>Last name: ${order.buyer.lastName}</p>
      <p>Email: ${order.buyer.email}</p>

      <h5>Total:$${order.total}</h5>
      <h5>Products: </h5>`
      
      order.products.map(product => {
        d.innerHTML += 
        `<ul>
          <li>Title:${product.title}</li>
          <li>Quantity:${product.quantity}</li>
          <li>Price:${product.price}</li>
        </ul>
        `
      })
    }
    clearCart();
    handleOpenCartDrawer();
    setFormData({});
  }

  return reactDom.createPortal (
    <div className={`purchaseForm ${isFormOpen && 'isOpen'}`} onClick={(e)=>{handleOpenPurchaseForm(e)}}>
        <div className='purchaseFormContainer' onClick={handleModalContainerClick}>
          <button onClick={(e)=>{handleOpenPurchaseForm(e)}} className="closeForm normalBtn">
            X
          </button>
          <div className="innerPurchaseForm">
          <form ref={form}>
            <h1>Great choice!</h1>
            <p>For security we need you to feel this form and that's all</p>
            
            <label htmlFor="firstName">Name:</label>
            <input type="text" id='firstName' name='firstName' onChange={handleChange}></input>
            
            <label htmlFor="lastName">Last name:</label>
            <input type="text" id='lastName' name='lastName' onChange={handleChange}></input>
            
            <label htmlFor="phone">Phone:</label>
            <input type="number" id='phone' name='phone' onChange={handleChange}></input>
            
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' name='email' onChange={handleChange}></input>
            
            <label htmlFor="emailConfirmation">Confirm email:</label>
            <input type="email" id='emailConfirmation' name='emailConfirmation' onChange={handleChange}></input>
            
            <label htmlFor="">I wan't to receive offers and news</label>
            <input type="checkbox" name="" id="" />

            <button type="submit" onClick={handleSubmitForm} className="submitForm normalBtn">Finish Order</button>
          
          </form>
          </div>
        </div>
    </div>, document.getElementById('form')
  )
}

export default PurchaseForm